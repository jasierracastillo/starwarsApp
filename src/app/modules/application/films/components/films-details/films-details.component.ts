import { Router, ActivatedRoute } from '@angular/router';
import { FilmsService } from './../../services/films.service';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-films-details',
  templateUrl: './films-details.component.html',
  styleUrls: ['./films-details.component.css'],
})
export class FilmsDetailsComponent implements OnInit {
  id: number = 0;
  film: any;
  constructor(private service: FilmsService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    console.log('ID: ', this.id);
    this.film = this.service.loadFilmById(this.id);
    console.log(this.film);
  }
}
