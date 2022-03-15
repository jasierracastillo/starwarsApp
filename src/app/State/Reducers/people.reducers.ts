import { createReducer, on } from '@ngrx/store';
import { loadedPeople, loadPeople } from '../Actions/people.actions';
import { PeopleState } from '../models/people.state';

export const initialState: PeopleState = { loading: false, people: [] };

//2-Vincular reducer con Store
export const peopleReducer = createReducer(
  initialState,
  on(loadPeople, (state) => {
    return { ...state, loading: true };
  }),
  on(loadedPeople, (state, { people }) => {
    return { ...state, loading: false, people: people };
  })

  //Multiples acciones

  // initialState,
  // on(loadedpeople, (state) => {
  //   return state;
  // })
  // initialState,
  // on(loadedpeople, (state) => {
  //   return state;
  // })
  // initialState,
  // on(loadedpeople, (state) => {
  //   return state;
  // })
);
