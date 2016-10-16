import { Injectable } from '@angular/core';
import { Jsonp, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { StockQuote } from './stock-quote';

const QUOTE_API_URL = 'http://dev.markitondemand.com/MODApis/Api/v2/Quote/jsonp';

@Injectable()
export class StocksService {
    constructor(private jsonp: Jsonp) {
    }

    getStockQuote(symbol: string): Observable<StockQuote> {
        const params = new URLSearchParams();
        params.set('symbol', symbol);
        params.set('callback', 'JSONP_CALLBACK');

        return this.jsonp.get(QUOTE_API_URL, {search: params})
            .map(response => response.json())
            .catch(error => this.handleError(error));
    }

    private handleError(error) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}
