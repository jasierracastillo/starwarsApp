import { FilmsState } from '../models/films.state';
import { AppState } from './../app.state';
import { createSelector } from '@ngrx/store';

// {
//     "films":{                   //Padre
//         "loading": "false",     //Hijo
//         "films":[]              //Hijo
//     }
// }

//Selector que tiene relacion con la propiedad films en film.state.ts
export const selectFilmsFeature = (state: AppState) => state.films; //Padre

export const selectFilmsList = createSelector(
  selectFilmsFeature,
  (state: FilmsState) => state.films //Hijo
);
export const selectLoading = createSelector(
  selectFilmsFeature,
  (state: FilmsState) => state.loading //Hijo
);

//TODO
