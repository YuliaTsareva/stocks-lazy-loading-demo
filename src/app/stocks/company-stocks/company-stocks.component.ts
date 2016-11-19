import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { StocksService } from '../stocks.service';
import { StockQuote } from '../stock-quote';

@Component({
    templateUrl: './company-stocks.component.html',
    styleUrls: ['./company-stocks.component.css']
})
export class CompanyStocksComponent implements OnInit {
    company: StockQuote; // todo: it is not a company
    chartData: any;

    constructor(private router: Router,
                private route: ActivatedRoute,
                private stocksService: StocksService) {
    }

    ngOnInit() {
        this.company = this.route.snapshot.data['company'];

        const chartParams = {
            StartDate: '2016-01-01T00:00:00-00',
            EndDate: '2016-11-02T00:00:00-00',
            DataPeriod: 'Month',
            Elements: [
                {Symbol: this.company.Symbol, Type: 'price', Params: ['c']}
            ]
        };

        this.stocksService.getChartData(chartParams)
            .subscribe(chart => {
                console.log(chart);
                this.chartData = chart;
            });
    }

    onBack() {
        this.router.navigate(['/stocks']);
    }
}
