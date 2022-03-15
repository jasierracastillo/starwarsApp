import { Films } from '../../modules/application/films/models/Films';
import { createAction, props } from '@ngrx/store';

export const loadFilms = createAction(
  '[Films List] Load Films' // Type
  //   props<{ FilmsId: string }>()
);

export const loadedFilms = createAction(
  '[Films List] Load Success', // Type
  props<{ films: Films[] }>()
);

// export const addFilms = createAction(
//   '[Films List] Add Films',
//   props<{ FilmsId: string }>()
// );
