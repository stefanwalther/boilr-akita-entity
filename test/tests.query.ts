import { Injectable } from '@angular/core';
import { ID, QueryEntity } from '@datorama/akita';
import { TestsStore, TestsState } from './tests.store';

@Injectable({ providedIn: 'root' })
export class TestsQuery extends QueryEntity<TestsState> {

  constructor(
    protected store: TestsStore
  ) {
    super(store);}

}
