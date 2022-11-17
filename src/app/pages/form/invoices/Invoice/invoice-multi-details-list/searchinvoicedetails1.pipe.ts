import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchinvoicedetails1'
})
export class Searchinvoicedetails1Pipe implements PipeTransform {

 
  transform(items: any, cname_Search1: string, cgst_Search1: string, invoice_num_Search1: string,  total_gst_amt_Search1: string): any{
    if (items && items.length){
      // console.log(items);
        return items.filter(item =>{
            if (cname_Search1 && item.cname.toLowerCase().indexOf(cname_Search1.toLowerCase()) === -1){
                return false;
            }
            if (cgst_Search1){
              return JSON.stringify(item.cgst).toLowerCase().includes(cgst_Search1);
            }
            if (invoice_num_Search1){
              return JSON.stringify(item.invoice_num).toLowerCase().includes(invoice_num_Search1);
            }
            if (total_gst_amt_Search1){
              return JSON.stringify(item.total_gst_amt).toLowerCase().includes(total_gst_amt_Search1);
            }
           
          return true;
      })
    }
    else{
        return items;
    }
  }

}
