import { Component, OnInit } from '@angular/core';
import {UsersService} from '../users.service'

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  usersList = [];
  constructor(public userService: UsersService) { }

  ngOnInit(): void {
    this.usersList = this.userService.getUsersList();
  }
  
}
