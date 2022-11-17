import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchinvoicedetails'
})
export class SearchinvoicedetailsPipe implements PipeTransform {

  // transform(value: any, args?: any): any {
  //   //console.log(args);
  //   if(!args){
  //       return value;
  //   }
  //       return value.filter(item=> item.name.toLowerCase().indexOf(args) > -1 || item.cname.toLowerCase().indexOf(args) > -1 
  //       || item.name.toUpperCase().indexOf(args) > -1 || item.invoice_num.toUpperCase().indexOf(args) > -1 || item.total_gst_amt.toUpperCase().indexOf(args) > -1  );
       
  // }

  // transform(list: any[], filterText: string): any {
  //   return list ? list.filter(item => item.name.search(new RegExp(filterText, 'i')) > -1 || item.invoice_num.search(new RegExp(filterText, 'i')) > -1 || item.total_gst_amt.search(new RegExp(filterText, 'i')) > -1) : [];
  // }

  transform(value: any, args?: any): any {

    if(!value)return null;
    if(!args)return value;

    args = args.toLowerCase();

    return value.filter(function(item){
        return JSON.stringify(item).toLowerCase().includes(args);
    });
}

}
