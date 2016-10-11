import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UsersComponent } from './users.component';
import { ActiveUserPipe } from './active-user.pipe';

export const routerConfig = [{
  path: '',
  component: UsersComponent
}];


@NgModule({
  declarations: [
    UsersComponent,
    ActiveUserPipe
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routerConfig)
  ],
  exports: [UsersComponent]
})
export default class UsersModule {
}
