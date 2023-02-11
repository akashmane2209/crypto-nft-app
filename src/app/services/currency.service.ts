import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CurrencyService {
  formatter = Intl.NumberFormat("en", {
    style: "currency",
    maximumFractionDigits: 2,
    currencyDisplay: "narrowSymbol",
    currency: "USD",
  });
  constructor() { }
  public format(amount: number) {
    return this.formatter.format(amount)
  }
}
