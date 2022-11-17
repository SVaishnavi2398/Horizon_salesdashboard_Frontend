import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchcreditnotedetails'
})
export class SearchcreditnotedetailsPipe implements PipeTransform {


  transform(items: any, invoice_num_Search: string, cname_Search: string, credit_note_num_Search: string,  credit_note_date_Search: string, payout_percenatge_Search: string, taxable_amt_Search:string): any{
    if (items && items.length){
      // console.log(items);
        return items.filter(item =>{
            if (invoice_num_Search && item.invoice_num.toLowerCase().indexOf(invoice_num_Search.toLowerCase()) === -1){
              console.log(invoice_num_Search);
                return false;
            }
            if (cname_Search && item.cname.toLowerCase().indexOf(cname_Search.toLowerCase()) === -1){
              console.log(cname_Search);
              return false;
            }
            if (credit_note_num_Search){
              return JSON.stringify(item.credit_note_num).toLowerCase().includes(credit_note_num_Search);
            }
            if (credit_note_date_Search){
              return JSON.stringify(item.credit_note_date).toLowerCase().includes(credit_note_date_Search);
            }
            
            if (payout_percenatge_Search && item.payout_percenatge.toLowerCase().indexOf(payout_percenatge_Search.toLowerCase()) === -1){
              return false;
            }
            if (taxable_amt_Search){
              return JSON.stringify(item.taxable_amt).toLowerCase().includes(taxable_amt_Search);
            }
          return true;
      })
    }
    else{
        return items;
    }
  }

}
