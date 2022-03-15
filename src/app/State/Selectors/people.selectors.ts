import { createSelector } from '@ngrx/store';
import { AppState } from '../app.state';
import { PeopleState } from '../models/people.state';

//Selector que tiene relacion con la propiedad people en people.state.ts
export const selectPeopleFeature = (state: AppState) => state.people; //Padre

export const selectPeopleList = createSelector(
  selectPeopleFeature,
  (state: PeopleState) => state.people //Hijo
);
export const selectLoading = createSelector(
  selectPeopleFeature,
  (state: PeopleState) => state.loading //Hijo
);
