import { Component } from '@angular/core';

export interface IUser {
  name: string;
  isActive: boolean;
}

@Component({
  selector: 'users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {
  users: IUser[] = [
    { name: 'Bob', isActive: true },
    { name: 'Alice', isActive: true },
    { name: 'Carlos', isActive: false }
  ];

  
}
