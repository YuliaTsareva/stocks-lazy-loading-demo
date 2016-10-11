import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import HomeModule from './home/home.module';
import { UsersComponent } from './users/users.component';
import UsersModule from './users/users.module';

const routeConfig = [
  { path: '', component: HomeComponent },
  { path: 'users', component: UsersComponent },
  { path: 'about', loadChildren: 'app/+about/about.module#AboutModule' },
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule,
    RouterModule.forRoot(routeConfig),
    HomeModule,
    UsersModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
