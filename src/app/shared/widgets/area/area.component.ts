import { Component, Input, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';

@Component({
  selector: 'app-widget-area',
  templateUrl: './area.component.html',
  styleUrls: ['./area.component.scss']
})
export class AreaComponent implements OnInit {

  chartOptions: {};

  Highcharts = Highcharts;

//  @Input() data: [];
  constructor() { }

  ngOnInit(): void {
    this.chartOptions = {
      chart: {
          type: 'areaspline'
      },
      title: {
          text: 'Average Money Credit & Debit in one Year'
      },
      legend: {
          layout: 'vertical',
          align: 'left',
          verticalAlign: 'top',
          x: 150,
          y: 100,
          floating: true,
          borderWidth: 1,
          backgroundColor:
              Highcharts.defaultOptions.legend.backgroundColor || '#FFFFFF'
      },
      xAxis: {
          categories: [
              'Jan',
              'Feb',
              'March',
              'April',
              'May',
              'June',
              'July',
              'Aug',
              'Sept',
              'Octo',
              'Nov',
              'Dec'
          ],
          plotBands: [{ // visualize the weekend
              from: 0,
              to: 0,
              color: 'rgba(68, 170, 213, .2)'
          }]
      },
      yAxis: {
          title: {
              text: 'Fruit units'
          }
      },
      tooltip: {
          shared: true,
          valueSuffix: ' units'
      },
      credits: {
          enabled: false
      },
      plotOptions: {
          areaspline: {
              fillOpacity: 0.5
          }
      },
      series: [{
          name: 'Credit Amount',
          data: [0, 1000, 500, 300, 0, 400, 100, 0, 500, 300 , 400, 0]
      }, {
          name: 'Debit Amount',
          data: [0, 300, 500, 0, 300, 300, 500, 0, 200, 200 , 250, 0]
      }]
    };
  }
}
