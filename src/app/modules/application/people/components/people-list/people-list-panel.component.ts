import { loadPeople } from './../../../../../State/Actions/people.actions';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from 'src/app/State/app.state';
import { selectPeopleList } from 'src/app/State/Selectors/people.selectors';
import { PeopleService } from '../../services/people.service';

@Component({
  selector: 'app-people-list-panel',
  template: `
    <div class="container" *ngIf="people$">
      <ul>
        <li *ngFor="let item of people$ | async; index as id">
          <i class="far fa-address-card"></i>
          <span>{{ item.name }}</span> |
          {{ getPlanetIdFromPeople(item.homeworld) }} |
          {{ item.created | date }} | Height: {{ item.height | height }} » (
          <!-- <a [routerLink]="['/people', 'details', id]">More details</a>  -->
          <a
            (click)="sendItemDetail(id, item)"
            (click)="sendWithState(id, item)"
            [routerLink]="['/starwars/films/details', id]"
            >More details</a
          >
          )
        </li>
      </ul>
    </div>
  `,
  styles: [
    `
      li {
        margin: 20px;
      }
      span {
        color: crimson;
      }
    `,
  ],
})
export class PeopleListPanelComponent implements OnInit {
  @Input()
  people$: Observable<any> = new Observable();
  @Input()
  palnets$: Observable<any> = new Observable();

  @Output()
  selectedItem: EventEmitter<any> = new EventEmitter<any>();

  @Input()
  filter: string = '';

  PlanetsNames: string[] = [];
  homeworld: string = '';
  planetId: number = 0;

  constructor(private service: PeopleService, private router: Router) {}

  ngOnInit(): void {
    this.palnets$ = this.service.getPlanets();
    this.palnets$.forEach((element) => {
      this.PlanetsNames.push(element.name);
    });
  }

  getPlanet() {}

  getPlanetIdFromPeople(url: string) {
    let idPlanet: number = parseInt(url.slice(-1));
    return this.PlanetsNames[idPlanet];
  }

  //@Output()
  sendItemDetail(id: any, item: any): void {
    this.selectedItem.emit({
      pos: id,
      value: item,
    });
  }

  //Enviar objeto a la ru
  sendWithState(id: number, object: any) {
    this.router.navigate(['/starwars/people/details/' + id], {
      state: {
        key: id,
        data: object,
      },
    });
  }
}
