import { AppState } from './../../../../../State/app.state';
import { selectFilmsList } from './../../../../../State/Selectors/films.selectors';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { FilmsService } from '../../services/films.service';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Films } from '../../models/Films';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-films-list-panel',
  template: `
    <div class="container" *ngIf="films$">
      <ul>
        <li *ngFor="let item of films$ | async; index as id">
          <i class="fa fa-film" aria-hidden="true"> </i>

          <span>{{ item.title }}</span> | {{ item.director }} |
          {{ item.created | date }} » (
          <!-- <a [routerLink]="['/starwars/films/details', id]">More details</a> -->

          <a
            (click)="sendWithState(id, item)"
            (click)="sendItemDetail(id, item)"
            [routerLink]="['/starwars/films/details', id]"
            >More details</a
          >
          <!-- rouuterLink="/details/{{ id }}" -->
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
export class FilmsListPanelComponent implements OnInit {
  @Input()
  films$: Observable<any> = new Observable();

  @Output()
  selectedItem: EventEmitter<any> = new EventEmitter<any>();

  @Input()
  filter: string = '';

  constructor(
    private service: FilmsService,
    private router: Router,
    private store: Store<AppState>
  ) {
    // this.route = router;
  }

  ngOnInit(): void {}

  //@Output()
  sendItemDetail(id: any, item: any): void {
    this.selectedItem.emit({
      pos: id,
      value: item,
    });
  }
  //Enviar objeto a la ruta
  sendWithState(id: number, object: any) {
    this.router.navigate(['/starwars/films/details/' + id], {
      state: {
        key: id,
        data: object,
      },
    });
  }
}
