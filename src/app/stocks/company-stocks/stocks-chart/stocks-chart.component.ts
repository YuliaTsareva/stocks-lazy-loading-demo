import { Component, OnInit, ElementRef, Input } from '@angular/core';
import * as D3 from 'd3';

const width = 400;
const height = 200;
const barChartsPadding = 1;
const topPadding = 20;
const bottomPadding = 20;
const leftPadding = 30;

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
        const dataset = this.data.Dates.map((date, index) => {
            return {
                date: new Date(date),
                value: this.data.Elements[0].DataSeries.close.values[index]
            };
        });

        const svg = this.host.append('svg')
            .attr('width', width)
            .attr('height', height);

        this.buildLineChart(svg, dataset);
    }

    private buildBarChart(svg: any, dataset: {date: Date, value: number}[]) {
        svg.selectAll('rect')
            .data(dataset)
            .enter()
            .append('rect')
            .attr('x', (d, i) => i * width / dataset.length)
            .attr('y', d => height - d.value)
            .attr('width', width / dataset.length - barChartsPadding)
            .attr('height', d => d.value)
            .attr('fill', '#039be5');
    }

    private buildLineChart(svg: any, dataset: {date: Date, value: number}[]) {
        const minDate = dataset[0].date;
        const maxDate = dataset[dataset.length - 1].date;
        const xScale = D3.scaleTime()
            .domain([minDate, maxDate])
            .range([leftPadding + 1, width]);

        const yScale = D3.scaleLinear()
            .domain([0, D3.max(dataset, d => d.value)])
            .range([height - bottomPadding, topPadding]);

        const xAxis = D3.axisBottom(xScale)
            .tickFormat(D3.timeFormat('%b'));

        const yAxis = D3.axisLeft(yScale)
            .ticks(5);

        const areaFun = D3.area()
            .x((d: any) => xScale(d.date))
            .y0(height - bottomPadding)
            .y1((d: any) => yScale(d.value));

        svg.append('g')
            .call(xAxis)
            .attr('class', 'axis')
            .attr('transform', 'translate(0, ' + (height - bottomPadding) + ')');

        svg.append('g')
            .call(yAxis)
            .attr('class', 'axis')
            .attr('transform', 'translate(' + leftPadding + ', 0)');

        svg.append('path')
            .datum(dataset)
            .attr('d', areaFun)
            .attr('stroke', '#039be5')
            .attr('stroke-width', 1)
            .attr('fill', '#039be5');
    }
}
