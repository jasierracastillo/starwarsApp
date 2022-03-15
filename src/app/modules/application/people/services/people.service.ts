import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, filter, map, Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PeopleService {
  private people$: BehaviorSubject<any> = new BehaviorSubject<any>(null);
  private singlePeople$: BehaviorSubject<any> = new BehaviorSubject<any>(null);

  apiGetUrl: string = 'https://swapi.dev/api/people/';

  constructor(private http: HttpClient) {}

  //
  public get responseObject(): Observable<any> {
    return this.people$
      .asObservable()
      .pipe(filter((response) => response != null));
  }

  //
  public loadPeopleList(): Observable<any> {
    this.http
      .get(this.apiGetUrl)
      .pipe(
        map((response: any) => {
          return response.data;
        })
      )
      .subscribe((data) => {
        this.people$.next(data);
      });
    return this.people$.asObservable();
  }

  public loadPeopleById(id: number): Observable<any> {
    this.http
      .get(this.apiGetUrl + id)
      .pipe(
        map((response: any) => {
          return response.data;
        })
      )
      .subscribe((data) => {
        this.singlePeople$.next(data);
      });
    return this.singlePeople$.asObservable();
  }

  //
  public getPeople(filter: string) {
    return this.http.get(this.apiGetUrl + filter).pipe(
      map((response: any) => {
        return response.results;
      })
    );
  }

  getPeopleById(id: number) {
    return this.http.get(this.apiGetUrl + `${id}`).pipe(
      map((response: any) => {
        return response.results;
      })
    );
  }

  //Map Home World
  getHomeWorld(id: number): Observable<any> {
    return this.http.get('https://swapi.dev/api/planets/' + `${id}`).pipe(
      map((response: any) => {
        return response;
      })
    );
  }

  public getPlanets() {
    return this.http.get('https://swapi.dev/api/planets/').pipe(
      map((response: any) => {
        return response.results;
      })
    );
  }
}
