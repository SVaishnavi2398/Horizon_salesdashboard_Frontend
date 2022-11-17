import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchadvanceemi'
})
export class SearchadvanceemiPipe implements PipeTransform {

 
  transform(items: any, firstname_Search: string, emi_deduct_date_search: string, deduction_amount_Search:string, remark_Search: string): any{
    if (items && items.length){
      // console.log(items);
        return items.filter(item =>{
            if (firstname_Search && item.firstname.toLowerCase().indexOf(firstname_Search.toLowerCase()) === -1){
                return false;
            }
            if (emi_deduct_date_search && item.emi_deduct_date.toLowerCase().indexOf(emi_deduct_date_search.toLowerCase()) === -1){
              return false;
            }
            if (deduction_amount_Search){
              return JSON.stringify(item.deduction_amount).toLowerCase().includes(deduction_amount_Search);
            }
            if (remark_Search){
              return JSON.stringify(item.remark).toLowerCase().includes(remark_Search);
            }
          return true;
      })
    }
    else{
        return items;
    }
  }

}
