import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchmonthlytarget'
})
export class SearchmonthlytargetPipe implements PipeTransform {

  
  transform(items: any, firstname_Search: string, from_date_Search: string, to_date_Search:string, status_Search: string): any{
    if (items && items.length){
      // console.log(items);
        return items.filter(item =>{
            if (firstname_Search && item.firstname.toLowerCase().indexOf(firstname_Search.toLowerCase()) === -1){
                return false;
            }
            if (from_date_Search && item.from_date.toLowerCase().indexOf(from_date_Search.toLowerCase()) === -1){
              return false;
            }
            if (to_date_Search && item.to_date.toLowerCase().indexOf(to_date_Search.toLowerCase()) === -1){
              return false;
            }
            if (status_Search && item.status.toLowerCase().indexOf(status_Search.toLowerCase()) === -1){
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
