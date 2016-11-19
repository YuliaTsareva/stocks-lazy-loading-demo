import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CompanyStocksComponent } from './company-stocks.component';
import { StocksChartComponent } from './stocks-chart/stocks-chart.component';
import { CompanyStocksGuard } from './company-stocks-guard';
import { StockQuoteResolve } from './stock-quote-resolve';

export const routerConfig = [{
    path: ':id',
    component: CompanyStocksComponent,
    canActivate: [CompanyStocksGuard],
    resolve: {
        company: StockQuoteResolve
    }
}];

@NgModule({
    declarations: [
        CompanyStocksComponent,
        StocksChartComponent
    ],
    imports: [
        CommonModule,
        RouterModule.forChild(routerConfig)
    ],
    providers: [
        CompanyStocksGuard,
        StockQuoteResolve
    ]
})
export default class CompanyStocksModule {
}
