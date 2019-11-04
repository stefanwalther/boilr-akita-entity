import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { {{ multiple | title }}Store } from './{{multiple}}.store';
import { SettingsService } from '../../../_services/settings.service';
import { {{ single | title}} } from './{{single}}.model';
import { catchError, tap, map } from 'rxjs/operators';
import { ErrorHandling } from '../../../_lib/error-handling';

const source = '{{ multiple }}.service';

@Injectable({providedIn: 'root'})
export class {{ multiple | title }}Service {

  constructor(
    private {{ multiple }}Store: {{ multiple | title }}Store,
    private http: HttpClient,
    private settingsService: SettingsService
  ) {
  }

  get() {
    const operation = 'get';

    const request$ = this.http.get<{{ single | title }}[]>(`${this.settingsService.settings.api}/{{ multiple }}`)
      .pipe(
        tap({{ multiple }} => this.{{ multiple }}Store.set({{ multiple }})),
        catchError(ErrorHandling.handleError(`${source}:${operation}`, []))
      );
    return request$;
  }

  create({{ single }}: {{single | title}}, showToastr = false) {
    const operation = 'create';

    return this.http.post<{{single | title}}>(`${this.settingsService.settings.api}/{{ multiple }}`, {{ single }})
      .pipe(
        tap(data => {
          this.{{ multiple }}Store.add(data);
        }),
        catchError(ErrorHandling.handleError(`${source}:${operation}`, {}, showToastr))
      );
  }

  delete({{ single }}: {{ single | title }}) {
    const operation = 'delete';
    return this.http.delete(`${this.settingsService.settings.api}/{{ multiple }}/${{ "{" }}{{ single }}{{ "}"}.id}}`)
      .pipe(
        tap(_ => this.{{ multiple }}Store.remove({{ single }}.id)),
        catchError(ErrorHandling.handleError(`${source}:${operation}`, []))
      );
  }

  patch({{ single }}: {{ single | title }}, patches: any) {
    const operation = 'patch';
    return this.http.patch(`${this.settingsService.settings.api}/{{ multiple }}/${{"{"}}{{single}}{{"}"}}.id}`, patches)
      .pipe(
        tap(_ => {
          this.{{ multiple }}Store.update({{ single }}.id, patches);
        }),
        catchError(ErrorHandling.handleError(`${source}:${operation}`, {}))
      );
  }
}

