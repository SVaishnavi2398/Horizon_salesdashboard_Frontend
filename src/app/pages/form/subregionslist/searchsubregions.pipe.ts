import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchsubregions'
})
export class SearchsubregionsPipe implements PipeTransform {


  transform(items: any, region_name_search: string, subregion_name_Search: string): any {
    if (items && items.length) {
      // console.log(items);
      return items.filter(item => {
        if (region_name_search && item.region_name.toLowerCase().indexOf(region_name_search.toLowerCase()) === -1) {
          return false;
        }
        if (subregion_name_Search && item.subregion_name.toLowerCase().indexOf(subregion_name_Search.toLowerCase()) === -1) {
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
