import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchprojects'
})
export class SearchprojectsPipe implements PipeTransform {

 
  transform(items: any,cname_Search:string, project_name_search: string, subproject_name_Search: string,location_Search: string,  rera_Search: string, subregion_name_Search): any{
    if (items && items.length){
      // console.log(items);
        return items.filter(item =>{
            if (cname_Search && item.cname.toLowerCase().indexOf(cname_Search.toLowerCase()) === -1){
              return false;
            }
            if (project_name_search && item.project_name.toLowerCase().indexOf(project_name_search.toLowerCase()) === -1){
                return false;
            }
            if (subproject_name_Search && item.subproject_name.toLowerCase().indexOf(subproject_name_Search.toLowerCase()) === -1){
              //console.log(cname_Search);
              return false;
            }
            if (location_Search && item.location.toLowerCase().indexOf(location_Search.toLowerCase()) === -1){
              return false;
            }
            if (subregion_name_Search && item.subregion_name.toLowerCase().indexOf(subregion_name_Search.toLowerCase()) === -1){
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
