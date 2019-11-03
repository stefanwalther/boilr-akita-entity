import { Injectable } from '@angular/core';
import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';
import { {{ single | title }} } from './{{ single }}.model';

export interface {{ multiple | title }}State extends EntityState<{{ single | title }}> {
}

@Injectable({providedIn: 'root'})
@StoreConfig({name: 'targets', idKey: '_id'})
export class {{ multiple | title }}Store extends EntityStore<{{ multiple | title }}State, {{ single | title }}> {
  constructor() {
    super();
  }

  akitaPreAddEntity({{ single }}: {{ single | title }}) {
    return {{ single }};
  }

}
