import { People } from 'src/app/modules/application/people/models/People';

export interface PeopleState {
  loading: boolean;
  people: ReadonlyArray<People>;
}
