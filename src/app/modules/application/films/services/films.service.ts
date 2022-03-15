import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, filter, map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FilmsService {
  private films$: BehaviorSubject<any> = new BehaviorSubject<any>(null);
  private singleFilm$: BehaviorSubject<any> = new BehaviorSubject<any>(null);

  tmpObj: any = { id: 0, object: '' };

  apiGetUrl: string = 'https://swapi.dev/api/films/';

  constructor(private http: HttpClient) {}

  //
  public get responseObject(): Observable<any> {
    return this.singleFilm$
      .asObservable()
      .pipe(filter((response) => response != null));
  }

  public get responseFilmObject(): Observable<any> {
    return this.films$
      .asObservable()
      .pipe(filter((response) => response != null));
  }

  //
  public loadFilmsList(): Observable<any> {
    this.http
      .get(this.apiGetUrl)
      .pipe(
        map((response: any) => {
          return response.data;
        })
      )
      .subscribe((data) => {
        this.films$.next(data);
      });
    return this.films$.asObservable();
  }

  public loadFilmById(id: number): Observable<any> {
    this.http
      .get(this.apiGetUrl + id)
      .pipe(
        map((response: any) => {
          return response.data;
        })
      )
      .subscribe((data) => {
        this.singleFilm$.next(data);
      });
    return this.singleFilm$.asObservable();
  }

  //Filter
  public getFilmsbyFilter(filter: string): Observable<any> {
    return this.http.get(this.apiGetUrl + '?search=' + filter).pipe(
      map((response: any) => {
        return response.results;
      })
    );
  }
  //Films
  public getFilms(filter: string): Observable<any> {
    return this.http.get(this.apiGetUrl + filter).pipe(
      map((response: any) => {
        return response.results;
      })
    );
  }

  getFilmById(id: number): Observable<any> {
    return this.http.get(this.apiGetUrl + `${id}`).pipe(
      map((response: any) => {
        return response.results;
      })
    );
  }
}
