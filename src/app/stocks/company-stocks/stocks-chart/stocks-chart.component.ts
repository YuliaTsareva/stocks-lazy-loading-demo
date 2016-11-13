import { Component, OnInit, ElementRef } from '@angular/core';
import * as D3 from 'd3';

@Component({
    selector: 'stocks-chart',
    templateUrl: './stocks-chart.component.html',
    styleUrls: ['./stocks-chart.component.css']
})
export class StocksChartComponent implements OnInit {
    private host;

    constructor(private element: ElementRef) {
        // this.htmlElement = this.element.nativeElement;
        this.host = D3.select(this.element.nativeElement);
        console.log(this.host);
    }

    ngOnInit() {
        console.log('ngOnInit');
        this.host.append('svg');
    }
}
