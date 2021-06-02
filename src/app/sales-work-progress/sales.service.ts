import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { SalesUser } from '../shared/interface/sales-user.interface';
import { Observable, of, timer } from 'rxjs';
import { switchMap } from 'rxjs/operators';

import { SalesData } from '../shared/constant/sales-data.mock';

@Injectable({
  providedIn: 'root'
})
export class SalesService {

  constructor() { }

/**
 *
 *
 * @return {*}  {Observable<SalesUser[]>}
 * @memberof SalesService
 */

public getSalesUserData(): Observable<SalesUser[]> {
    // return timer(0,10).pipe(
    //   switchMap(()=>{
    //     return of(SalesData);
    //   })
    // )
    return of(SalesData);
  }

}


