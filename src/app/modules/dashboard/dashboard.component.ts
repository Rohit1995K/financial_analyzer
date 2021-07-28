import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource} from '@angular/material/table';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})

export class DashboardComponent implements AfterViewInit, OnInit {

  transaction = [];
  bigChart = [];
  dataSource: any = [];
  displayedColumns: string[] = ['customerNumber', 'transactionDescription', 'amount', 'payment', 'category', 'date'];
  @ViewChild(MatPaginator, {static : true}) paginator: MatPaginator;
  constructor(private commonService: CommonService) { }

  ngOnInit(): void {
    this.getData();
    this.dataSource.paginator = this.paginator;
  }

  ngAfterViewInit(): void {
    // this.getData();
  }

  public getData(): void {
    this.commonService.paymentdata().subscribe((res: any) => {
      this.transaction = res;
      this.dataSource = new MatTableDataSource(this.transaction);
    });
  }
}
