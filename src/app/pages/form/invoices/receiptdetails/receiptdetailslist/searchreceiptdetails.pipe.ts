import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchreceiptdetails'
})
export class SearchreceiptdetailsPipe implements PipeTransform {


  transform(items: any, invoice_num_Search: string, payment_mode_Search: string, instument_no_Search: string, received_amt_Search: string, instument_date_Search: string, received_taxable_amt_Search:string): any{
    if (items && items.length){
      // console.log(items);
        return items.filter(item =>{
            if (invoice_num_Search && item.invoice_num.toLowerCase().indexOf(invoice_num_Search.toLowerCase()) === -1){
                return false;
            }
            if (payment_mode_Search && item.payment_mode.toLowerCase().indexOf(payment_mode_Search.toLowerCase()) === -1){
              return false;
            }
            if (instument_no_Search){
              return JSON.stringify(item.instument_no).toLowerCase().includes(instument_no_Search);
            }
            if (received_amt_Search){
              return JSON.stringify(item.received_amt).toLowerCase().includes(received_amt_Search);
            }
            
            if (instument_date_Search && item.instument_date.toLowerCase().indexOf(instument_date_Search.toLowerCase()) === -1){
              return false;
            }
            if (received_taxable_amt_Search){
              return JSON.stringify(item.received_taxable_amt).toLowerCase().includes(received_taxable_amt_Search);
            }
          return true;
      })
    }
    else{
        return items;
    }
  }

}
