import { ID } from '@datorama/akita';

export interface Test {

  /**
   * Just an internal id.
   * (The MongoDB ObjectId)
   */
  id: ID;
  testId: string;
}
