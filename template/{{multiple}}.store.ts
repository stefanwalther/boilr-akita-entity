import { Injectable } from '@angular/core';
import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';
import { {{ multiple | title }} } from './{{ single }}.model';

export interface {{ multiple | title }}State extends EntityState<{{ multiple | title }}> {
}

@Injectable({providedIn: 'root', idKey: '_id'})
@StoreConfig({name: 'targets'})
export class {{ multiple | title }}Store extends EntityStore<{{ multiple | title }}State, {{ single | title }}> {
  constructor() {
    super();
  }

  akitaPreAddEntity({{ single }}: {{ single | title }}) {
    return {{ single }};
  }

}
