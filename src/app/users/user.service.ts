
  import { Injectable } from '@angular/core';
  import { IUser } from './users.component';

  @Injectable()
  export class UserService {
    getUsers(): IUser[] {
      return [
        { name: 'Bob', isActive: true },
        { name: 'Alice', isActive: true },
        { name: 'Carlos', isActive: false }
      ];
    }
  }
