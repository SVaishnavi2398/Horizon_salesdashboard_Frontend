import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchsalesdetails'
})


export class SearchsalesdetailsPipe implements PipeTransform {

  
//   transform(value: any, args?: any): any {

//     if(!value)return null;
//     if(!args)return value;

//     args = args.toLowerCase();

//     return value.filter(function(item){
//       console.log(args);
//         return JSON.stringify(item).toLowerCase().includes(args);
//     });
//  }


    transform(items: any, nameSearch: string, project_nameSearch: string, statusSearch: string, leadsourceSearch: string, firstnameSearch: string, booking_dateSearch:string){
      if (items && items.length){
        // console.log(items);
          return items.filter(item =>{
              if (nameSearch && item.name.toLowerCase().indexOf(nameSearch.toLowerCase()) === -1){
                  return false;
              }
              if (project_nameSearch && item.project_name.toLowerCase().indexOf(project_nameSearch.toLowerCase()) === -1){
                  return false;
              }
              if (booking_dateSearch && item.booking_date.toLowerCase().indexOf(booking_dateSearch.toLowerCase()) === -1){
                  return false;
              }
              if (statusSearch && item.status.toLowerCase().indexOf(statusSearch.toLowerCase()) === -1){
                return false;
              }
              if (leadsourceSearch && item.leadsource.toLowerCase().indexOf(leadsourceSearch.toLowerCase()) === -1){
                return false;
              }
              if (firstnameSearch && item.firstname.toLowerCase().indexOf(firstnameSearch.toLowerCase()) === -1){
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
