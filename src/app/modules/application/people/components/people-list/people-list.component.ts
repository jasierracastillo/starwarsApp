import { People } from './../../models/People';
import {
  loadPeople,
  loadedPeople,
} from './../../../../../State/Actions/people.actions';
import { PeopleService } from './../../services/people.service';
import { Component, OnInit, SimpleChanges } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import {
  selectLoading,
  selectPeopleList,
} from 'src/app/State/Selectors/people.selectors';

@Component({
  selector: 'app-people-list',
  templateUrl: './people-list.component.html',
  styleUrls: ['./people-list.component.css'],
})
export class PeopleListComponent implements OnInit {
  loading$: Observable<boolean> = new Observable();
  people$: Observable<any> = new Observable();
  itemSelcted: Observable<any> = new Observable();
  filter: string = '';
  itemType: string = 'people';

  constructor(private service: PeopleService, private store: Store<any>) {}

  ngOnInit(): void {
    //NGRX
    this.store.dispatch(loadPeople()); //Aqui se dipara
    this.people$ = this.store.select(selectPeopleList);
    this.loading$ = this.store.select(selectLoading);
    this.service.getPeople(this.filter).subscribe((response: People[]) => {
      this.store.dispatch(loadedPeople({ people: response }));
    });

    //Cargar lista filtrada
    // this.people$ = this.service.getPeople(this.filter);
  }

  ngOnChanges(changes: SimpleChanges): void {}

  //Recibe Ouput del item seleccionado
  getItem($event: any): void {
    console.log('Selected: ', $event);
    this.itemSelcted = $event;
  }
  //Recibe filtro de busqueda
  recieveFilter($event: any) {
    console.log('Filtro: ', $event.entry);
    this.filter = $event.entry;
  }
}
