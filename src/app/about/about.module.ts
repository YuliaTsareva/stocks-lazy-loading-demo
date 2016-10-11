import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AboutComponent } from './about.component';

export const routerConfig = [{
  path: '',
  component: AboutComponent
}];

@NgModule({
  declarations: [
    AboutComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routerConfig)
  ],
  providers: [],
  exports: [AboutComponent]
})
export default class AboutModule {
}
