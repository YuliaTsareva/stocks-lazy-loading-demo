import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { StocksComponent } from './stocks.component';
import { StocksService } from './stocks.service';

export const routerConfig = [
    {path: '', component: StocksComponent},
    {path: 'company', loadChildren: 'app/stocks/company-stocks/company-stocks.module'}
];


@NgModule({
    declarations: [
        StocksComponent
    ],
    imports: [
        CommonModule,
        RouterModule.forChild(routerConfig)
    ],
    providers: [StocksService],
    exports: [StocksComponent]
})
export default class StocksModule {
}
