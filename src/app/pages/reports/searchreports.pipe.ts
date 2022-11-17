import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchreports'
})
export class SearchreportsPipe implements PipeTransform {
  transform(items: any, report_name_Search: string, primary_module_name_search: string,  primary_module_field_name_search: string, secondary_module_name_Search: string, secondary_module_field_name_Search:string): any{
    if (items && items.length){
      // console.log(items);
        return items.filter(item =>{
            if (report_name_Search && item.report_name.toLowerCase().indexOf(report_name_Search.toLowerCase()) === -1){
                return false;
            }
            if (primary_module_name_search && item.primary_module_name.toLowerCase().indexOf(primary_module_name_search.toLowerCase()) === -1){
              return false;
            }
            if (primary_module_field_name_search && item.primary_module_field_name.toLowerCase().indexOf(primary_module_field_name_search.toLowerCase()) === -1){
              return false;
            }
            if (secondary_module_name_Search && item.secondary_module_name.toLowerCase().indexOf(secondary_module_name_Search.toLowerCase()) === -1){
              return false;
            }
            if (secondary_module_field_name_Search && item.secondary_module_field_name.toLowerCase().indexOf(secondary_module_field_name_Search.toLowerCase()) === -1){
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
