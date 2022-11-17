import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchcompany'
})
export class SearchcompanyPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    //console.log(args);
    if(!args){
        return value;
    }
        return value.filter(item=> item.cname.toLowerCase().indexOf(args) > -1);
       
  }

}
