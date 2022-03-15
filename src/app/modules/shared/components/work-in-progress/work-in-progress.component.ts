import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-work-in-progress',
  template: `
    <app-search-panel></app-search-panel>

    <app-navigator></app-navigator>
    <div class="container">
      <h1>:/ Work in progress!!</h1>
      <hr />
      <h2>Stay in touch ;)</h2>
    </div>
  `,
  styles: [],
})
export class WorkInProgressComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
