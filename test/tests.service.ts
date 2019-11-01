import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TestsStore } from './tests.store';
import { SettingsService } from '../../../_services/settings.service';
import { Test } from './test.model';
import { catchError, tap, map } from 'rxjs/operators';
import { ErrorHandling } from '../../../_lib/error-handling';

const source = 'tests.service';

@Injectable({providedIn: 'root'})
export class TestsService {

  constructor(
    private TestsStore: TestsStore,
    private http: HttpClient,
    private settingsService: SettingsService
  ) {
  }

  get() {
    const operation = 'get';

    const request$ = this.http.get<Test[]>(`${this.settingsService.settings.api}/tests`)
      .pipe(
        tap(tests => this.testsStore.set(tests)),
        catchError(ErrorHandling.handleError(`${source}:${operation}`, []))
      );
    return request$;
  }

  create(test: test, showToastr = false) {
    const operation = 'create';

    return this.http.post<test>(`${this.settingsService.settings.api}/tests`, test)
      .pipe(
        tap(data => {
          this.testsStore.add(data);
        }),
        catchError(ErrorHandling.handleError(`${source}:${operation}`, {}, showToastr))
      );
  }

  delete(test: Tests) {
    const operation = 'delete';
    return this.http.delete(`${this.settingsService.settings.api}/tests/${test}.id}`)
      .pipe(
        tap(_ => this.TestsStore.remove(test.id)),
        catchError(ErrorHandling.handleError(`${source}:${operation}`, []))
      );
  }

  patch(test: Test, patches: any) {
    const operation = 'patch';
    return this.http.patch(`${this.settingsService.settings.api}/tests/${test}.id}`, patches)
      .pipe(
        tap(_ => {
          this.testsStore.update(test.id, patches);
        }),
        catchError(ErrorHandling.handleError(`${source}:${operation}`, {}))
      );
  }
}

