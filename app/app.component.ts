import { Component } from '@angular/core';
import { InvoiceRow } from './invoice-row';
import { invoiceData } from './invoice-data';

@Component({
  selector: 'my-app',
  templateUrl: './index.html',
  styles: [`
    kendo-pdf-export {
      /* font-family: "DejaVu Sans", "Arial", sans-serif;
      font-size: 12px; */
    }
  `]
})
export class AppComponent {
  public data: InvoiceRow[] = invoiceData;
}
