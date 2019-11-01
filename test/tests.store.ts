import { Injectable } from '@angular/core';
import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';
import { Tests } from './test.model';

export interface TestsState extends EntityState<Tests> {
}

@Injectable({providedIn: 'root'})
@StoreConfig({name: 'targets'})
export class TestsStore extends EntityStore<TestsState, Test> {
  constructor() {
    super();
  }

  akitaPreAddEntity(test: Test) {
    return test;
  }

}
