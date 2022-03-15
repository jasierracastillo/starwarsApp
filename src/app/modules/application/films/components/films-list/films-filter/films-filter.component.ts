import { Films } from './../../../models/Films';
import {
  loadFilms,
  loadedFilms,
} from './../../../../../../State/Actions/films.actions';
import { selectFilmsList } from './../../../../../../State/Selectors/films.selectors';
import { selectLoading } from 'src/app/State/Selectors/films.selectors';
import { Store } from '@ngrx/store';
import { FilmsService } from './../../../services/films.service';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-films-filter',
  template: `
    <app-search-panel
      (selectedEntry)="recieveFilter($event)"
    ></app-search-panel>

    <app-navigator></app-navigator>

    <div class="alert alert-info" role="alert" *ngIf="loading$ | async">
      Loading ...
    </div>
    <app-films-list-panel
      [films$]="films$"
      [filter]="filter"
      (selectedItem)="getItem($event)"
    ></app-films-list-panel>
  `,
  styles: [],
})
export class FilmsFilterComponent implements OnInit {
  loading$: Observable<boolean> = new Observable();
  films$!: Observable<any>;
  itemSelcted: Observable<any> = new Observable();
  filter: string = '';
  constructor(private service: FilmsService, private store: Store<any>) {}

  ngOnInit(): void {
    //NGRX OK
    this.loading$ = this.store.select(selectLoading);
    this.films$ = this.store.select(selectFilmsList);
    this.store.dispatch(loadFilms()); //Aqui se dipara :)
    this.service
      .getFilmsbyFilter(this.filter)
      .subscribe((response: Films[]) => {
        this.store.dispatch(loadedFilms({ films: response }));
      });
  }

  //Recibe Ouput del item seleccionado
  getItem($event: any): void {
    console.log('Selected in filsm-list.c: ', $event);
    this.itemSelcted = $event;
  }
  //Recibe filtro de busqueda
  recieveFilter($event: string) {
    console.log('Filtro: ', $event);
    this.filter = $event;
  }
}
