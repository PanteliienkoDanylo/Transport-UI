import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';

import { Transport } from '../../entity/transport-entity';
import { Route } from '../../entity/route-entity';

import { Observable } from 'rxjs/Observable';

@Injectable()
export class TransportServiceService {

  private url = 'http://localhost:8080/transport/all';
  private urlFind;

  constructor(
    private http: Http
  ) { }

  getAllTransport(): Observable<Transport[]> {

    return this.http.get(this.url)
      .map((response: Response) => response.json())
      .filter(json => json)
      .map((objectList: Array<Object>) => objectList.map((object: Object) => new Transport(object)))
      .catch(error => {
        console.log(error);
        return Observable.throw(error);
      });
  }

  getTransportsByRoute(route: Route): Observable<Transport[]> {
    if (route === undefined) {
      return;
    }
    this.urlFind = 'http://localhost:8080/transport/byRouteId?routeId=';
    this.urlFind += route.id;
    console.log(this.urlFind);
    if (route === undefined) {
      return;
    } else {
      return this.http.get(this.urlFind)
        .map((response: Response) => response.json())
        .filter(json => json)
        .map((objectList: Array<Object>) => objectList.map((object: Object) => new Transport(object)))
        .catch(error => {
          console.log(error);
          return Observable.throw(error);
        });
    }
  }
}
