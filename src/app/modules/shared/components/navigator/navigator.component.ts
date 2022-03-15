import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigator',
  templateUrl: './navigator.component.html',
  styleUrls: ['./navigator.component.css'],
})
export class NavigatorComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  navigate(item: string, type: string) {
    let route: String = `/starwars/${item}/${type}`;
    this.router.navigate([route]);
  }
}
