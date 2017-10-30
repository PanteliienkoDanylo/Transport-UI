import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';

import { Subject } from 'rxjs/Subject';
import { Subscription } from 'rxjs/Subscription';

import { Route } from '../entity/route-entity';
import { RouteComponent } from '../component/route-component/route.component';


@Injectable()
export class AppStateServiceService {

  private selectedRouteSource: Subject<Route> = new Subject<Route>();
  public readonly selectedRoute$: Observable<Route> = this.selectedRouteSource.asObservable();

  constructor() { }


  public selectRoute(route: Route) {
    this.selectedRouteSource.next(route);
  }

}
