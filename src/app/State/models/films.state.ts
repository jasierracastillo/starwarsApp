import { Films } from '../../modules/application/films/models/Films';

export interface FilmsState {
  loading: boolean;
  films: ReadonlyArray<Films>;
}
