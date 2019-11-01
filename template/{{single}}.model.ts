import { ID } from '@datorama/akita';

export interface {{ single | title }} {

  /**
   * Just an internal id.
   * (The MongoDB ObjectId)
   */
  id: ID;
  {{single}}Id: string;
}
