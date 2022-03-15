import { loadedFilms } from './../Actions/films.actions';
import { FilmsState } from '../models/films.state';
import { Films } from './../../modules/application/films/models/Films';
import { createReducer, on } from '@ngrx/store';
import { loadFilms } from '../Actions/films.actions';

// import {} from './books.actions';

//1-Estado Inicial
export const initialState: FilmsState = { loading: false, films: [] };

//2-Vincular reducer con Store
export const filmsReducer = createReducer(
  initialState,
  on(loadFilms, (state) => {
    return { ...state, loading: true };
  }),
  on(loadedFilms, (state, { films }) => {
    return { ...state, loading: false, films: films };
  })

  //Multiples acciones

  // initialState,
  // on(loadedFilms, (state) => {
  //   return state;
  // })
  // initialState,
  // on(loadedFilms, (state) => {
  //   return state;
  // })
  // initialState,
  // on(loadedFilms, (state) => {
  //   return state;
  // })
);
