import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CurrenciesComponent } from './currencies.component';

export const routerConfig = [{
  path: '',
  component: CurrenciesComponent
}];

@NgModule({
  declarations: [
      CurrenciesComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routerConfig)
  ],
  exports: [CurrenciesComponent]
})
export default class CurrenciesModule {
}
