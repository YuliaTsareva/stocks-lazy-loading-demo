import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { StockQuote } from '../stock-quote';
import { StocksService } from '../stocks.service';

@Injectable()
export class StockQuoteResolve implements Resolve<StockQuote> {
    constructor(private stocksService: StocksService) {
    }

    resolve(route: ActivatedRouteSnapshot) {
        return this.stocksService.getStockQuote(route.params['id']);
    }
}
