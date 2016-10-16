import { StockQuote } from './stock-quote';

export interface Company {
    name: string;
    symbol: string;

    stocksQuote?: StockQuote;
}
