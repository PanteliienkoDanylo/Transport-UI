import { Route } from './route-entity';

export class Station {

    public id: number; 
    public name: string; 
    public latitude: number; 
    public longitude: number; 
    public routes?: Array<Route>;

    constructor(object: Object) {
        const s: Station = <Station> object;
        this.id = s.id;
        this.name = s.name;
        this.latitude = s.latitude;
        this.longitude = s.longitude;
        this.routes = s.routes;
    }
}