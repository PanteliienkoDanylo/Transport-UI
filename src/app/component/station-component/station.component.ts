/* tslint:disable:forin */

import { Component, OnInit, Input, OnChanges, SimpleChange } from '@angular/core';
import { StationServiceService } from '../../service/station-service/station-service.service';
import { Station } from '../../entity/station-entity';
import { Observable } from 'rxjs';


//import { DataSource } from '@angular/cdk';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import { Route } from '../../entity/route-entity';
import { Subscription } from 'rxjs/Subscription';
import { RouteComponent } from '../route-component/route.component';
import { AppStateServiceService } from '../../service/app-state-service.service';

@Component({
  selector: 'app-station',
  templateUrl: './station.component.html',
  styleUrls: ['./station.component.css'],
  providers: [StationServiceService, AppStateServiceService]
})
export class StationComponent implements OnInit, OnChanges {

  // selectedRouteSubscription: Subscription;
  // selectedRoute: Route;

  @Input() route: Route;



  // displayedColumns = ['name'];
  // dataSource: ExampleDataSource | null;


  public stations: Observable<Station[]>;

  constructor(public stationService: StationServiceService) {

    //   public appStateService: AppStateServiceService
    // ) {
    //   this.selectedRouteSubscription = this.appStateService.selectedRoute$
    //     .subscribe((selected: Route) => {
    //       this.selectedRoute = selected;
    //       this.getStationsByRoute(this.selectedRoute);
    //     });
  }

  // getStationsByRoute(route: Route) {
  //   this.stations = this.stationService.getStationsByRoute(route);
  // }



  ngOnInit() {
    //this.stations = this.stationService.getAllStation();
    // this.stations = this.stationService.getStationsByRoute(this.route);
    // this.dataSource = new ExampleDataSource(this.stationService);
  }

  ngOnChanges(changes: { [propKey: string]: SimpleChange }): void {
    console.log('onChanges(Station)');
    this.stations = this.stationService.getStationsByRoute(this.route);
  }

}

// export class ExampleDataSource extends DataSource<any> {
//   constructor(private _exampleDatabase: StationServiceService) {
//     super();
//   }

//   /** Connect function called by the table to retrieve one stream containing the data to render. */
//   connect(): Observable<Station[]> {
//     return this._exampleDatabase.getAllStation();
//   }

//   disconnect() { }
// }
