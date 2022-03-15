import { selectFilmsList } from './../../../../../State/Selectors/films.selectors';
import {
  loadedFilms,
  loadFilms,
} from './../../../../../State/Actions/films.actions';
import { Films } from './../../models/Films';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { FilmsService } from './../../services/films.service';
import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { selectLoading } from 'src/app/State/Selectors/films.selectors';

@Component({
  selector: 'app-films-list',
  templateUrl: './films-list.component.html',
  styleUrls: ['./films-list.component.css'],
})
export class FilmsListComponent implements OnInit, OnChanges {
  loading$: Observable<boolean> = new Observable();
  films$!: Observable<any>;
  itemSelcted: Observable<any> = new Observable();
  filter: string = '';
  itemType: string = 'films';

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

    //Cargar lista filtrada
    // this.films$ = this.service.getFilms(this.filter);

    // console.log(this.itemSelcted);
  }

  ngOnChanges(changes: SimpleChanges): void {}

  //Recibe Ouput del item seleccionado
  getItem($event: any): void {
    console.log('Selected in filsm-list.c: ', $event);
    this.itemSelcted = $event;
  }
  //Recibe filtro de busqueda
  recieveFilter($event: any) {
    console.log('Filtro: ', $event.entry);
    this.filter = $event.entry;
  }
}
