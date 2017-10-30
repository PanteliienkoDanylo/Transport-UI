import { Route } from './route-entity';

export enum TransportType {
    BUS,
    TROLLYBUS
}

export class Transport {

  public id: number;
  public number: string;
  public type: TransportType;
  public latitude: number;
  public longitude: number;
  public route?: Route;

  constructor(object: Object) {
    const t: Transport = <Transport> object;
    this.id = t.id;
    this.number = t.number;
    this.type = t.type;
    this.latitude = t.latitude;
    this.longitude = t.longitude;
    this.route = t.route;
  }
}
