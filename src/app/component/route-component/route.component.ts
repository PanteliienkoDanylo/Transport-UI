import { Component, OnInit, Input } from '@angular/core';
import { Route } from '../../entity/route-entity';
import { AppStateServiceService } from '../../service/app-state-service.service';

@Component({
  selector: 'app-route',
  templateUrl: './route.component.html',
  styleUrls: ['./route.component.css'],
  providers: [AppStateServiceService]
})
export class RouteComponent implements OnInit {

  @Input() route: Route;

  constructor() { }

  ngOnInit() {
  }

}
