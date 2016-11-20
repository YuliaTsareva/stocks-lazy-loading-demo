import { Component, OnInit, ElementRef, Input } from '@angular/core';
import * as D3 from 'd3';

const width = 400;
const height = 200;
const padding = 1;
const topPadding = 20;

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
        const dataset = this.data.Elements[0].DataSeries.close.values;

        const svg = this.host.append('svg')
            .attr('width', width)
            .attr('height', height);

        this.buildLineChart(svg, dataset);
    }

    private buildBarChart(svg: any, dataset: number[]) {
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

    private buildLineChart(svg: any, dataset: number[]) {
        const xScale = D3.scaleLinear()
            .domain([0, dataset.length - 1])
            .range([0, width]);

        const yScale = D3.scaleLinear()
            .domain([0, D3.max(dataset)])
            .range([height, topPadding]);

        const lineFun = D3.line()
            .x((d, i) => xScale(i))
            .y((d: any) => yScale(d));

        svg.append('path')
            .datum(dataset)
            .attr('d', lineFun)
            .attr('stroke', '#039be5')
            .attr('stroke-width', 2)
            .attr('fill', 'none');
    }
}
