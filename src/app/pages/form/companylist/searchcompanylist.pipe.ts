import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchcompanylist'
})
export class SearchcompanylistPipe implements PipeTransform {

 
  transform(items: any, cname_Search: string, cpan_search: string, cgst_Search:string, registered_address_Search: string, contact1_Search: string, email1_Search:string): any{
    if (items && items.length) {
      // console.log(items);
      return items.filter(item => {
        if (cname_Search && item.cname.toLowerCase().indexOf(cname_Search.toLowerCase()) === -1) {
          return false;
        }
        if (cpan_search) {
          return JSON.stringify(item.cpan).toLowerCase().includes(cpan_search);
        }
        if (cgst_Search) {
          return JSON.stringify(item.cgst).toLowerCase().includes(cgst_Search);
        }
        if (registered_address_Search) {
          return JSON.stringify(item.registered_address).toLowerCase().includes(registered_address_Search);
        }
        // if (registered_address_Search && item.registered_address.toLowerCase().indexOf(registered_address_Search.toLowerCase()) === -1) {
        //   return false;
        // }
        if (contact1_Search) {
          return JSON.stringify(item.contact1).toLowerCase().includes(contact1_Search);
        }
        if (email1_Search) {
          return JSON.stringify(item.email1).toLowerCase().includes(email1_Search);
        }
        // if (email1_Search && item.email1.toLowerCase().indexOf(email1_Search.toLowerCase()) === -1) {
        //   return false;
        // }
        return true;
      })
    }
    else {
      return items;
    }
  }
}
