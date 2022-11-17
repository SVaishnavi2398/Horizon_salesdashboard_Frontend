import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchmonthlysalary'
})
export class SearchmonthlysalaryPipe implements PipeTransform {

 
  transform(items: any, firstname_Search: string, salary_month_Search: string, absent_days_Search: string,  no_of_late_marks_Search: string, penalty_leave_days_Search:string, extra_days_Search:string): any{
    if (items && items.length){
      // console.log(items);
        return items.filter(item =>{
            if (firstname_Search && item.firstname.toLowerCase().indexOf(firstname_Search.toLowerCase()) === -1){
                return false;
            }
            if (salary_month_Search && item.salary_month.toLowerCase().indexOf(salary_month_Search.toLowerCase()) === -1){
              return false;
            }
            if (absent_days_Search){
              return JSON.stringify(item.absent_days).toLowerCase().includes(absent_days_Search);
            }
            if (no_of_late_marks_Search){
              return JSON.stringify(item.no_of_late_marks).toLowerCase().includes(no_of_late_marks_Search);
            }
            if (penalty_leave_days_Search){
              return JSON.stringify(item.penalty_leave_days).toLowerCase().includes(penalty_leave_days_Search);
            }
            if (extra_days_Search && item.extra_days.toLowerCase().indexOf(extra_days_Search.toLowerCase()) === -1){
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
