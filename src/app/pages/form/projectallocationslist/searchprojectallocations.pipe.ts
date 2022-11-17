import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchprojectallocations'
})
export class SearchprojectallocationsPipe implements PipeTransform {

  transform(items: any, firstname_search: string, project_name_Search: string,  subproject_name_Search: string): any{
    if (items && items.length){
      // console.log(items);
        return items.filter(item =>{
            if (firstname_search && item.firstname.toLowerCase().indexOf(firstname_search.toLowerCase()) === -1){
                return false;
            }
            if (project_name_Search && item.project_name.toLowerCase().indexOf(project_name_Search.toLowerCase()) === -1){
              //console.log(cname_Search);
              return false;
            }
            if (subproject_name_Search){
              return JSON.stringify(item.subproject_name).toLowerCase().includes(subproject_name_Search);
            }
            
          return true;
      })
    }
    else{
        return items;
    }
  }

}
