import { Injectable } from '@angular/core';
import { TableEntry } from './models/TableEntry.model';

@Injectable({
  providedIn: 'root'
})
export class CalculateService {

  constructor() { }

  tablePush(balance, payment, interest, principal, totalInterest, table: TableEntry[]) {

    table.push({
      startingBalance: balance,
      payment,
      interestPaid: interest,
      principal,
      endingBalance: balance - principal,
      totalInterest: totalInterest + interest
    });
  }

  pmt(rate: number, numberOfPeriods: number, presentValue: number) {
    const r = rate / 12; // per month
    return (presentValue * r) / (1 - Math.pow(1 + r, -numberOfPeriods));
  }

}
