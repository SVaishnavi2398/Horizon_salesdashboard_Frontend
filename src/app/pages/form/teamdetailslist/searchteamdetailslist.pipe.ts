import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchteamdetailslist'
})
export class SearchteamdetailslistPipe implements PipeTransform {

  transform(items: any, firstname_search: string, teamname_Search: string,  designation_Search: string, teamstatus_search: string, from_date_Search:string, to_date_Search:string): any{
    if (items && items.length){
      // console.log(items);
        return items.filter(item =>{
            if (firstname_search && item.firstname.toLowerCase().indexOf(firstname_search.toLowerCase()) === -1){
                return false;
            }
            if (teamname_Search && item.teamname.toLowerCase().indexOf(teamname_Search.toLowerCase()) === -1){
              return false;
            }
            if (designation_Search && item.designation.toLowerCase().indexOf(designation_Search.toLowerCase()) === -1){
              return false;
            }
            if (teamstatus_search && item.teamstatus.toLowerCase().indexOf(teamstatus_search.toLowerCase()) === -1){
              return false;
            }
            if (from_date_Search && item.from_date.toLowerCase().indexOf(from_date_Search.toLowerCase()) === -1){
              return false;
            }
            if (to_date_Search && item.to_date.toLowerCase().indexOf(to_date_Search.toLowerCase()) === -1){
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
