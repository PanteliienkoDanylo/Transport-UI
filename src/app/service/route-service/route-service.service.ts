import { Injectable } from '@angular/core';
import { Http, Headers, Response } from "@angular/http";

import { Observable } from "rxjs/Observable";
// import "rxjs/Rx"; // Не добавляй весь rxjs/Rx, а только нужные операторы
import 'rxjs/add/operator/catch';

import { Route } from '../../entity/route-entity';

@Injectable()
export class RouteServiceService {

  private url = 'http://localhost:8080/route/all';

  constructor(
    private http: Http
  ) { }

  getAllRoutes(): Observable<Route[]> {

    return this.http.get(this.url)
      .map((response: Response) => response.json())
      .filter(json => json)
      .map((objectList: Array<Object>) => objectList.map((object: Object) => new Route(object)))
      .catch(error => {
        console.log(error);
        return Observable.throw(error);
      });
  }
}
