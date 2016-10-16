import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StocksService } from '../stocks.service';

@Component({
    selector: 'company-stocks',
    templateUrl: './company-stocks.component.html',
    styleUrls: ['./company-stocks.component.css']
})
export class CompanyStocksComponent implements OnInit {
    company;

    constructor(private route: ActivatedRoute,
                private stocksService: StocksService) {
    }

    ngOnInit() {
        this.company = this.route.snapshot.data['company'];
    }
}
