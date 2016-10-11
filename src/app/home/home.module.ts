import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { HomeComponent } from './home.component';
import { StockComponent } from './stock/stock.component';

export const routerConfig = [{
  path: '',
  component: HomeComponent
}];


@NgModule({
  declarations: [
    HomeComponent,
    StockComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routerConfig)
  ],
  providers: [],
  exports: [HomeComponent]
})
export default class HomeModule {
}
