import { Component, OnInit, Input } from '@angular/core';
import { RouteServiceService } from '../../service/route-service/route-service.service';
import { AppStateServiceService } from '../../service/app-state-service.service';
import { Route } from '../../entity/route-entity';
import { Observable } from 'rxjs';
import { RouteComponent } from '../route-component/route.component';

//import { DataSource } from '@angular/cdk';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Component({
  selector: 'app-routes',
  templateUrl: './routes.component.html',
  styleUrls: ['./routes.component.css'],
  providers: [RouteServiceService, AppStateServiceService]

})
export class RoutesComponent implements OnInit {

  displayedColumns = ['number', 'startTime', 'endTime'];
  // dataSource: ExampleDataSource | null;

  @Input() route: RouteComponent;

  public routes: Observable<Route[]>;
  public selectedRoute: RouteComponent;

  onSelect(route: RouteComponent) {
    this.selectedRoute = route;
  }

  constructor(
    private routeService: RouteServiceService,
    private appStateService: AppStateServiceService
  ) {

  }

  ngOnInit() {
    this.routes = this.routeService.getAllRoutes();
    // this.dataSource = new ExampleDataSource(this.routeService);
  }

  public setSelected(): void {
    this.appStateService.selectRoute(this.routes[0]);
  }

}

// export class ExampleDataSource extends DataSource<any> {
//   constructor(private _exampleDatabase: RouteServiceService) {
//     super();
//   }

//   /** Connect function called by the table to retrieve one stream containing the data to render. */
//   connect(): Observable<Route[]> {
//     return this._exampleDatabase.getAllRoutes();
//   }

//   disconnect() { }
// }
