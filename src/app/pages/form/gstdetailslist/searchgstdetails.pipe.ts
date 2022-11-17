import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchgstdetails'
})
export class SearchgstdetailsPipe implements PipeTransform {
  transform(items: any, new_year_Search: string, Invcount_search: string,  invctotal_search: string, invstotal_Search: string, invitotal_Search:string, total_Search:string, Jcount_search:string, ctotal_search:string, stotal_Search:string, itotal_Search:string, Jtotal_Search:string): any{
    if (items && items.length){
      // console.log(items);
        return items.filter(item =>{
            if (new_year_Search) {
              return JSON.stringify(item.new_year).toLowerCase().includes(new_year_Search);
            }
            if (Invcount_search) {
              return JSON.stringify(item.Invcount).toLowerCase().includes(Invcount_search);
            }
            if (invctotal_search) {
              return JSON.stringify(item.invctotal).toLowerCase().includes(invctotal_search);
            }
            if (invstotal_Search) {
              return JSON.stringify(item.invstotal).toLowerCase().includes(invstotal_Search);
            }
            if (invitotal_Search) {
              return JSON.stringify(item.invitotal).toLowerCase().includes(invitotal_Search);
            }
            if (total_Search) {
              return JSON.stringify(item.total).toLowerCase().includes(total_Search);
            }
            if (Jcount_search) {
              return JSON.stringify(item.Jcount).toLowerCase().includes(Jcount_search);
            }
            if (ctotal_search) {
              return JSON.stringify(item.ctotal).toLowerCase().includes(ctotal_search);
            }
            if (stotal_Search) {
              return JSON.stringify(item.stotal).toLowerCase().includes(stotal_Search);
            }
            if (itotal_Search) {
              return JSON.stringify(item.itotal).toLowerCase().includes(itotal_Search);
            }
            if (Jtotal_Search) {
              return JSON.stringify(item.Jtotal).toLowerCase().includes(Jtotal_Search);
            }
            
          return true;
      })
    }
    else{
        return items;
    }
  }

}
