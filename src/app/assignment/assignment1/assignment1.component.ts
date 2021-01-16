import { Component, OnInit } from '@angular/core';
import { User } from '../models/user.interface';

@Component({
  selector: 'ngr-assignment1',
  templateUrl: './assignment1.component.html',
  styleUrls: ['./assignment1.component.css']
})
export class Assignment1Component implements OnInit {

  users: User[] = [
    {
      name: 'Bryant',
      username: 'Kobe',
      email: 'Kobe@gmail.com'
    },
    {
      name: 'James',
      username: 'Lebron',
      email: 'Lebron@gmail.com'
    },
    {
      name: 'Kawhi',
      username: 'Leonard',
      email: 'Leonard@gmail.com'
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

  handleDeleteUser(userIndex: number) {
    this.users.splice(userIndex, 1)
  }

}
