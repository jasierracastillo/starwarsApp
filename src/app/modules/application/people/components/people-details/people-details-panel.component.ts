import { PeopleService } from './../../services/people.service';
import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-people-details-panel',
  template: `
    <table class="table table-hover">
      <tr class="table-primary">
        <td>Name</td>
        <td>{{ peopleObj.name }}</td>
      </tr>
      <tr>
        <td>Birth Year</td>
        <td>{{ peopleObj.birth_year }}</td>
      </tr>
      <tr>
        <td>Height</td>
        <td>{{ peopleObj.height | height }}</td>
      </tr>
      <tr>
        <td>Mass</td>
        <td>{{ peopleObj.mass }}</td>
      </tr>
      <tr>
        <td>Homeworld</td>
        <td>{{ peopleObj.homeworld }}</td>
      </tr>
    </table>
    <app-back-button [item]="segment"></app-back-button>
  `,
  styles: [],
})
export class PeopleDetailsPanelComponent implements OnInit, OnChanges {
  people$: Observable<any> = new Observable();
  segment: string = 'people';
  id: number = 0;
  peopleObj: any;

  constructor(private service: PeopleService, private router: Router) {}

  ngOnInit(): void {
    this.getByState();
  }

  ngOnChanges(changes: SimpleChanges): void {}

  getByState() {
    const param = history.state;
    this.id = param.key;
    this.peopleObj = param.data;
    // this.people$ = this.service.getPeopleById(param.key);
  }
}
