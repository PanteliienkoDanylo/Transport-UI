import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../../service/user-service/user-service.service';
import { User } from '../../entity/user-entity';
import { UserReply } from '../../entity/user-reply';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-user-component',
  templateUrl: './user-component.component.html',
  styleUrls: ['./user-component.component.css'],
  providers: [UserServiceService]
})
export class UserComponentComponent implements OnInit {

  public userReply: Observable<UserReply>;

  constructor(
    private userService: UserServiceService
  ) {

  }

  ngOnInit() {
    this.userReply = this.userService.getAllUsers();
  }

}
