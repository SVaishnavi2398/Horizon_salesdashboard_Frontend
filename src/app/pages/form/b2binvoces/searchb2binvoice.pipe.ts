import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchb2binvoice'
})
export class Searchb2binvoicePipe implements PipeTransform {

  transform(items: any, party_name_Search: string, inv_no_Search: string, inv_val_Search: string,  total_tax_amt_Search: string, total_tax_val_Search:string, inv_dt_Search:string): any{
    if (items && items.length){
      // console.log(items);
        return items.filter(item =>{
            if (party_name_Search && item.party_name.toLowerCase().indexOf(party_name_Search.toLowerCase()) === -1){
                return false;
            }
            if (inv_no_Search){
              return JSON.stringify(item.inv_no).toLowerCase().includes(inv_no_Search);
            }
            if (inv_val_Search){
              return JSON.stringify(item.inv_val).toLowerCase().includes(inv_val_Search);
            }
            if (total_tax_amt_Search){
              return JSON.stringify(item.total_tax_amt).toLowerCase().includes(total_tax_amt_Search);
            }
            if (total_tax_val_Search){
              return JSON.stringify(item.total_tax_val).toLowerCase().includes(total_tax_val_Search);
            }
            if (inv_dt_Search && item.inv_dt.toLowerCase().indexOf(inv_dt_Search.toLowerCase()) === -1){
              return false;
          }
          return true;
      })
    }
    else{
        return items;
    }
  }

}
