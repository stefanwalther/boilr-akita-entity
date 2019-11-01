import { Injectable } from '@angular/core';
import { ID, QueryEntity } from '@datorama/akita';
import { {{ multiple | title }}Store, {{ multiple | title }}State } from './{{multiple}}.store';

@Injectable({ providedIn: 'root' })
export class {{ multiple | title}}Query extends QueryEntity<{{ multiple | title }}State> {

  constructor(
    protected store: {{ multiple | title}}Store
  ) {
    super(store);}

}
