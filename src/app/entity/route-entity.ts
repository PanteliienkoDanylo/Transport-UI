import { Station } from './station-entity';
import { Transport } from './transport-entity';

export class Route {
  public id: string;
  public name: string;
  public startTime: Date;
  public endTime: Date;
  public stations: Array<Station>;
  public transports: Array<Transport>;

  constructor(object: Object) {
    const r: Route = <Route>object;
    this.id = r.id;
    this.name = r.name;
    this.startTime = r.startTime;
    this.endTime = r.endTime;
    this.stations = r.stations;
    this.transports = r.transports;
  }
}
