import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchsalarypackage'
})
export class SearchsalarypackagePipe implements PipeTransform {

    transform(items: any, firstname_Search: string, from_date_Search: string, basic_pay_Search: string,  monthly_salary_Search: string, yearly_salary_Search:string): any{
      if (items && items.length){
        // console.log(items);
          return items.filter(item =>{
              if (firstname_Search && item.firstname.toLowerCase().indexOf(firstname_Search.toLowerCase()) === -1){
                  return false;
              }
              if (from_date_Search && item.from_date.toLowerCase().indexOf(from_date_Search.toLowerCase()) === -1){
                return false;
              }
              if (basic_pay_Search){
                return JSON.stringify(item.basic_pay).toLowerCase().includes(basic_pay_Search);
              }
              if (monthly_salary_Search){
                return JSON.stringify(item.monthly_salary).toLowerCase().includes(monthly_salary_Search);
              }
              if (yearly_salary_Search){
                return JSON.stringify(item.yearly_salary).toLowerCase().includes(yearly_salary_Search);
              }
            return true;
        })
      }
      else{
          return items;
      }
    }

}
