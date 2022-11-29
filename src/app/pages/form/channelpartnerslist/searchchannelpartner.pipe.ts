import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchchannelpartner'
})
export class SearchchannelpartnerPipe implements PipeTransform {


transform(items: any, cp_nameSearch: string, catrgory_idSearch: string, address_Search: string, date_of_birth_Search: string, mobile1_Search: string, occupation_id_Search:string, email1_Search:string){
  if (items && items.length){
      return items.filter(item =>{
          if (cp_nameSearch && item.cp_name.toLowerCase().indexOf(cp_nameSearch.toLowerCase()) === -1){
              return false;
          }
          if (catrgory_idSearch){
            return JSON.stringify(item.catrgory_id).toLowerCase().includes(catrgory_idSearch);
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

}
