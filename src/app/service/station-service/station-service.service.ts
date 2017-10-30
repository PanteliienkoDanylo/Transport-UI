import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
// import "rxjs/Rx"; // Не добавляй весь rxjs/Rx, а только нужные операторы
import 'rxjs/add/operator/catch';

import { Station } from '../../entity/station-entity';
import { Route } from '../../entity/route-entity';

@Injectable()
export class StationServiceService {

  private url = 'http://localhost:8080/station/all';
  private urlFind;

  constructor(
    private http: Http
  ) { }

  getAllStation(): Observable<Station[]> {

    return this.http.get(this.url)
      .map((response: Response) => response.json())
      .filter(json => json)
      .map((objectList: Array<Object>) => objectList.map((object: Object) => new Station(object)))
      .catch(error => {
        console.log(error);
        return Observable.throw(error);
      });
  }

  getStationsByRoute(route: Route): Observable<Station[]> {
    if (route === undefined) {
      return;
    }
    this.urlFind = 'http://localhost:8080/station/byRouteId?routeId=';
    this.urlFind += route.id;
    console.log(this.urlFind);
    if (route === undefined) {
      return;
    } else {
      return this.http.get(this.urlFind)
        .map((response: Response) => response.json())
        .filter(json => json)
        .map((objectList: Array<Object>) => objectList.map((object: Object) => new Station(object)))
        .catch(error => {
          console.log(error);
          return Observable.throw(error);
        });
    }
  }

}
