import { Component, Input, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';
import { CommonService } from '../../../modules/common.service';

@Component({
  selector: 'app-widget-area',
  templateUrl: './area.component.html',
  styleUrls: ['./area.component.scss']
})
export class AreaComponent implements OnInit {

  chartOptions: {};
  creditAmount = 0;
  debitAmount = 0;

  Highcharts = Highcharts;

  constructor(private commonService: CommonService) { }

  transactions = [];
  credit = [];
  debit = [];
  ngOnInit(): void {
    this.setGraph();
    HC_exporting(Highcharts);
  }

  public setGraph(): void {

    this.commonService.paymentdata().subscribe((res: any) => {
        this.transactions = res;
        console.log(this.transactions);

        this.transactions.map((val) => {
            if (val.payment === 'Debit') {
                this.debitAmount += val.amount;
                this.debit.push(val.amount);
            } else {
                this.creditAmount += val.amount;
                this.credit.push(val.amount);
            }

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
                        text: 'Amount Range'
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
                    data: this.credit
                }, {
                    name: 'Debit Amount',
                    data: this.debit
                }]
            };

         });
    });
  }
}
