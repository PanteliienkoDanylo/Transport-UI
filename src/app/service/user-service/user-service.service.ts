import { Injectable } from '@angular/core';
import { User } from '../../entity/user-entity';
import { UserReply } from '../../entity/user-reply';
import { Http, Headers, Response } from "@angular/http";

import { Observable } from "rxjs/Observable";
// import "rxjs/Rx";
import 'rxjs/add/operator/catch';

@Injectable()
export class UserServiceService {

  private url = 'http://localhost:8080/user/all';

  constructor(
    private http: Http
  ) { }

  getAllUsers(): Observable<UserReply> {

    return this.http.get(this.url)
      .map((response: Response) => response.json())
      .catch(error => {
        console.log(error);
        return Observable.throw(error);
      });
  }

  // addUser(): Observable<User>{

  // }

}
