import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit {
  usersList = [];
  username: string;
  name: string;
  role: string;

  constructor(public userService: UsersService) {}

  ngOnInit(): void {
    this.usersList = this.userService.getUsersList();
  }

  search(query: string) {
    this.usersList = this.userService.findUser(query);
  }

  sort(direction: string) {
    this.usersList = this.userService.sortUsers(direction);
  }

  addUser() {
    this.userService.addUser({
      id: Math.floor((Math.random() * 20) + 10),
      name: this.name,
      username: this.username,
      email: '',
      role: this.role,
      phone: '',
      website: '',
    });

    this.usersList = this.userService.getUsersList();
  }
}
