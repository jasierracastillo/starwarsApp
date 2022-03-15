import { filmsReducer } from './Reducers/films.reducers';
import { FilmsState } from './models/films.state';
import { Films } from './../modules/application/films/models/Films';
import { ActionReducerMap } from '@ngrx/store';
import { peopleReducer } from './Reducers/people.reducers';
import { PeopleState } from './models/people.state';

export interface AppState {
  films: FilmsState;
  people: PeopleState;
}

export const ROOT_REDUCERS: ActionReducerMap<AppState> = {
  films: filmsReducer,
  people: peopleReducer,
};
