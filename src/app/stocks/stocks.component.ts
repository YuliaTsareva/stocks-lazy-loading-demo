import { Component, OnInit } from '@angular/core';
import { Company } from './company';
import companies from '../../data/companies';
import { StocksService } from './stocks.service';

@Component({
    selector: 'stocks',
    templateUrl: './stocks.component.html',
    styleUrls: ['./stocks.component.css']
})
export class StocksComponent implements OnInit {
    companies: Company[] = companies;

    constructor(private stocksService: StocksService) {
    }

    ngOnInit() {
        this.companies.map(company => {
            this.stocksService.getStockQuote(company.symbol)
                .subscribe(result => {
                    company.stocksQuote = result;
                })
        });
    }
}
