import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(private http: HttpClient) { }

  paymentdata(): Observable<any>{
    return this.http.get<any>('http://localhost:3000/data');
  }
}
