import * as _ from 'lodash';
import { Pipe, PipeTransform } from '@angular/core';
import { IUser } from './users.component';

    @Pipe({
      name: 'active'
    })
    export class ActiveUserPipe implements PipeTransform {
      transform(users: IUser[]): IUser[] {
        return _.filter(users, 'isActive');
      }
    }
