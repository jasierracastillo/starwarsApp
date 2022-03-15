import { Observable } from 'rxjs';
import { FilmsService } from './../../services/films.service';
import {
  Component,
  OnInit,
  OnChanges,
  SimpleChanges,
  Input,
} from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Films } from '../../models/Films';

@Component({
  selector: 'app-films-details-panel',
  template: `
    <table class="table table-hover">
      <tr>
        <td>Title</td>
        <td>{{ filmObj.title }}</td>
      </tr>
      <tr>
        <td>Episode</td>
        <td>{{ filmObj.episode_id }}</td>
      </tr>
      <tr>
        <td>Opening crawl</td>
        <td>{{ filmObj.opening_crawl }}</td>
      </tr>
      <tr>
        <td>Director</td>
        <td>{{ filmObj.director }}</td>
      </tr>
      <tr>
        <td>Producer</td>
        <td>{{ filmObj.producer }}</td>
      </tr>
    </table>
    <app-back-button [item]="segment"></app-back-button>
  `,
  styles: [],
})
export class FilmsDetailsPanelComponent implements OnInit, OnChanges {
  // @Input()
  film$: Observable<any> = new Observable();
  segment: string = 'films';
  id: number = 0;
  filmObj: any;

  constructor(
    private service: FilmsService,
    private _activeRoute: ActivatedRoute
  ) {
    // let r = actualRoute.url.toString();
    // this.id = parseInt(r);
  }

  ngOnInit(): void {
    this.getByState();
    // this.id = this._activeRoute.snapshot.params['id'];
    // console.log('ID: ', this.id);
    // this.service.getFilmById(this.id).subscribe((response: any) => {
    //   console.log(response);
    // });
  }
  ngOnChanges(changes: SimpleChanges): void {}

  getByState() {
    const param = history.state;
    this.id = param.key;
    this.filmObj = param.data;
  }
}
