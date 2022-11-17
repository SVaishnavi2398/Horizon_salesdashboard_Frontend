import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchinvoicedetails'
})
export class SearchinvoicedetailsPipe implements PipeTransform {


  transform(items: any, nameSearch: string, cname_Search: string, invoice_num_Search: string, total_gst_amt_Search: string, cgst_Search:string) :any{
    if (items && items.length){
      // console.log(items);
        return items.filter(item =>{
             
            if (nameSearch && item.name.toLowerCase().indexOf(nameSearch.toLowerCase()) === -1){
              // console.log(item.name);
                return false;
            }
            if (cname_Search && item.cname.toLowerCase().indexOf(cname_Search.toLowerCase()) === -1){
                return false;
            }
            if (cgst_Search){
              
              return JSON.stringify(item.cgst).toLowerCase().includes(cgst_Search);
            }
            if (invoice_num_Search && item.invoice_num.toLowerCase().indexOf(invoice_num_Search.toLowerCase()) === -1){
              return false;
            }
            if (total_gst_amt_Search){
              return JSON.stringify(item.total_gst_amt).toLowerCase().includes(total_gst_amt_Search);
            }
           
            
           return true;
      })
    }
    else{
        return items;
    }
  }


}
