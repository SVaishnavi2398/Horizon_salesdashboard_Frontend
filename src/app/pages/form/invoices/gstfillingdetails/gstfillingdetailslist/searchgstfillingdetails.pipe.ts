import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchgstfillingdetails'
})
export class SearchgstfillingdetailsPipe implements PipeTransform {

  
  transform(items: any, invoice_num_Search: string, inv_type_Search: string, gstr1_month_Search: string,  gstr1_amount_Search: string, filed_status_Search:string): any{
    if (items && items.length){
      // console.log(items);
        return items.filter(item =>{
            if (invoice_num_Search && item.invoice_num.toLowerCase().indexOf(invoice_num_Search.toLowerCase()) === -1){
                return false;
            }
            if (inv_type_Search && item.inv_type.toLowerCase().indexOf(inv_type_Search.toLowerCase()) === -1){
              //console.log(cname_Search);
              return false;
            }
            if (gstr1_month_Search && item.gstr1_month.toLowerCase().indexOf(gstr1_month_Search.toLowerCase()) === -1){
              //console.log(cname_Search);
              return false;
            }
            if (gstr1_amount_Search){
              return JSON.stringify(item.gstr1_amount).toLowerCase().includes(gstr1_amount_Search);
            }
            if (filed_status_Search){
              return JSON.stringify(item.filed_status).toLowerCase().includes(filed_status_Search);
            }
          return true;
      })
    }
    else{
        return items;
    }
  }

}
