import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchusers'
})
export class SearchusersPipe implements PipeTransform {

  
  transform(items: any, firstname_Search: string, email_search: string, mobile_no_Search:string, designation_Search: string, empstatus_Search: string): any{
    if (items && items.length) {
      // console.log(items);
      return items.filter(item => {
        if (firstname_Search && item.firstname.toLowerCase().indexOf(firstname_Search.toLowerCase()) === -1) {
          return false;
        }
        if (email_search && item.email.toLowerCase().indexOf(email_search.toLowerCase()) === -1) {
          return false;
        }
        if (mobile_no_Search) {
          return JSON.stringify(item.mobile_no).toLowerCase().includes(mobile_no_Search);
        }
        if (designation_Search && item.designation.toLowerCase().indexOf(designation_Search.toLowerCase()) === -1) {
          return false;
        }
        if (empstatus_Search && item.empstatus.toLowerCase().indexOf(empstatus_Search.toLowerCase()) === -1) {
          return false;
        }
        return true;
      })
    }
    else {
      return items;
    }
  }
}
