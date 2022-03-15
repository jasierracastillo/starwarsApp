import { People } from './../../modules/application/people/models/People';
import { createAction, props } from '@ngrx/store';

export const loadPeople = createAction(
  '[People List] Loadinding People' // Type
  //   props<{ PeopleId: string }>()
);

export const loadedPeople = createAction(
  '[People List] Load List Success', // Type
  props<{ people: People[] }>()
);

export const addPeople = createAction(
  '[People Item] Load People',
  props<{ people: People }>()
);
