import { Router } from '@angular/router';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-back-button',
  template: `
    <div>
      <button type="button" class="btn btn-primary" (click)="back(item)">
        Back
      </button>
      <!-- <button [routerLink]="['/starwars', item, '/details']">Back</button> -->
    </div>
  `,
  styles: [],
})
export class BackButtonComponent implements OnInit {
  @Input() item: string = '';
  constructor(private route: Router) {}

  ngOnInit(): void {}

  back(segment: string) {
    this.route.navigate(['/starwars/' + segment + '/list/']);
  }
}
