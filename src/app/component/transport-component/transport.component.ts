import { Component, OnInit, Input, OnChanges, SimpleChange } from '@angular/core';
import { Transport, TransportType } from '../../entity/transport-entity';
import { TransportServiceService } from '../../service/transport-service/transport-service.service';
import { Route } from '../../entity/route-entity';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-transport',
  templateUrl: './transport.component.html',
  styleUrls: ['./transport.component.css'],
  providers: [TransportServiceService]
})
export class TransportComponent implements OnInit, OnChanges {

  @Input() route: Route;

  public transports: Observable<Transport[]>;

  constructor(public transportService: TransportServiceService) {
  }

  ngOnInit() {
    //this.transports = this.transportService.getAllTransport();
    //this.transports = this.transportService.getTransportsByRoute(this.route);
  }

  ngOnChanges(changes: { [propKey: string]: SimpleChange }): void {
    console.log('onChanges(Transport)');
    this.transports = this.transportService.getTransportsByRoute(this.route);
  }

}
