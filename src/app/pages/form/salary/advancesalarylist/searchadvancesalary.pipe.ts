import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchadvancesalary'
})
export class SearchadvancesalaryPipe implements PipeTransform {

 
  transform(items: any, firstname_Search: string, advanced_paid_date_search: string, paid_Search:string, pending_amount_Search: string, adv_amount_Search: string, status_Search:string): any{
    if (items && items.length){
      // console.log(items);
        return items.filter(item =>{
            if (firstname_Search && item.firstname.toLowerCase().indexOf(firstname_Search.toLowerCase()) === -1){
                return false;
            }
            if (advanced_paid_date_search && item.advanced_paid_date.toLowerCase().indexOf(advanced_paid_date_search.toLowerCase()) === -1){
              return false;
            }
            if (paid_Search){
              return JSON.stringify(item.paid).toLowerCase().includes(paid_Search);
            }
            if (pending_amount_Search){
              return JSON.stringify(item.pending_amount).toLowerCase().includes(pending_amount_Search);
            }
            if (adv_amount_Search){
              return JSON.stringify(item.adv_amount ).toLowerCase().includes(adv_amount_Search);
            }
            if (status_Search){
              return JSON.stringify(item.status).toLowerCase().includes(status_Search);
            }
          return true;
      })
    }
    else{
        return items;
    }
  }
}
