import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchclientdetails'
})
export class SearchclientdetailsPipe implements PipeTransform {

//   transform(value: any, args?: any): any {

//     if(!value)return null;
//     if(!args)return value;

//     args = args.toLowerCase();

//     return value.filter(function(item){
//         return JSON.stringify(item).toLowerCase().includes(args);
//     });
// }
transform(items: any, nameSearch: string, catrgory_id_Search: string, occupation_id_Search: string, address_Search: string, date_of_birth_Search: string, mobile1_Search: string, email1_Search:string){
  if (items && items.length){
    // console.log(items);
      return items.filter(item =>{
          if (nameSearch && item.name.toLowerCase().indexOf(nameSearch.toLowerCase()) === -1){
              return false;
          }
          if (catrgory_id_Search){
            return JSON.stringify(item.catrgory_id).toLowerCase().includes(catrgory_id_Search);
          }
          if (occupation_id_Search){
            return JSON.stringify(item.occupation_id).toLowerCase().includes(occupation_id_Search);
          }
          if (address_Search && item.address.toLowerCase().indexOf(address_Search.toLowerCase()) === -1){
            return false;
          }
          if (date_of_birth_Search && item.date_of_birth.toLowerCase().indexOf(date_of_birth_Search.toLowerCase()) === -1){
            return false;
          }
          if (mobile1_Search){
            return JSON.stringify(item.mobile1).toLowerCase().includes(mobile1_Search);
          }
          if (email1_Search && item.email1.toLowerCase().indexOf(email1_Search.toLowerCase()) === -1){
            return false;
          }
         return true;
    })
  }
  else{
      return items;
  }
}


  // transform(items: any, nameSearch: string, catrgory_id_Search: string, address_Search: string, date_of_birth_Search: string, mobile1_Search: string, occupation_id_Search:string, email1_Search:string){
  //   if (items && items.length){
  //     // console.log(items);
  //       return items.filter(item =>{
  //           if (nameSearch && item.name.toLowerCase().indexOf(nameSearch.toLowerCase()) === -1){
  //               return false;
  //           }
  //           if (catrgory_id_Search && item.catrgory_id.toLowerCase().indexOf(catrgory_id_Search.toLowerCase()) === -1){
  //               return false;
  //           }
  //           if (occupation_id_Search){
  //             return JSON.stringify(item.occupation_id).toLowerCase().includes(occupation_id_Search);
  //           }
  //           if (address_Search && item.address.toLowerCase().indexOf(address_Search.toLowerCase()) === -1){
  //             return false;
  //           }
  //           if (date_of_birth_Search && item.date_of_birth.toLowerCase().indexOf(date_of_birth_Search.toLowerCase()) === -1){
  //             return false;
  //           }
  //           if (mobile1_Search){
  //             return JSON.stringify(item.mobile1).toLowerCase().includes(mobile1_Search);
  //           }
  //           if (email1_Search && item.email1.toLowerCase().indexOf(email1_Search.toLowerCase()) === -1){
  //             return false;
  //           }
  //         return true;
  //     })
  //   }
  //   else{
  //       return items;
  //   }
  // }

}
