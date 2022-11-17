import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchsubprojects'
})
export class SearchsubprojectsPipe implements PipeTransform {

  
  transform(items: any, project_name_search: string, subproject_name_Search: string,  rera_Search: string): any{
    if (items && items.length){
      // console.log(items);
        return items.filter(item =>{
            if (project_name_search && item.project_name.toLowerCase().indexOf(project_name_search.toLowerCase()) === -1){
                return false;
            }
            if (subproject_name_Search && item.subproject_name.toLowerCase().indexOf(subproject_name_Search.toLowerCase()) === -1){
              //console.log(cname_Search);
              return false;
            }
            if (rera_Search){
              return JSON.stringify(item.rera).toLowerCase().includes(rera_Search);
            }
          return true;
      })
    }
    else{
        return items;
    }
  }

}
