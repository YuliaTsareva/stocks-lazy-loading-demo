import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CompanyStocksComponent } from './company-stocks.component';
import { StockQuoteResolve } from './stock-quote-resolve';

export const routerConfig = [{
    path: ':id',
    component: CompanyStocksComponent,
    resolve: {
        company: StockQuoteResolve
    }
}];

@NgModule({
    declarations: [
        CompanyStocksComponent
    ],
    imports: [
        CommonModule,
        RouterModule.forChild(routerConfig)
    ],
    providers: [
        StockQuoteResolve
    ],
    exports: [CompanyStocksComponent]
})
export default class CompanyStocksModule {
}
