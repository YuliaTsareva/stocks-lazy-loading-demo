import { Component, OnInit, ElementRef, Input } from '@angular/core';
import * as D3 from 'd3';

@Component({
    selector: 'stocks-chart',
    templateUrl: './stocks-chart.component.html',
    styleUrls: ['./stocks-chart.component.css']
})
export class StocksChartComponent implements OnInit {
    @Input() data: any;
    private host;

    constructor(private element: ElementRef) {
        this.host = D3.select(this.element.nativeElement);
    }

    ngOnInit() {
        const width = 300;
        const height = 200;
        const padding = 1;
        // const dataset = [10, 20];
        const dataset = this.data.Elements[0].DataSeries.close.values;

        const svg = this.host.append('svg')
            .attr('width', width)
            .attr('height', height);

        svg.selectAll('rect')
            .data(dataset)
            .enter()
            .append('rect')
            .attr('x', (d, i) => i * width / dataset.length)
            .attr('y', d => height - d)
            .attr('width', width / dataset.length - padding)
            .attr('height', d => d)
            .attr('fill', '#039be5');
    }
}
