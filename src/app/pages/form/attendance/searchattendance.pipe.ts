import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchattendance'
})
export class SearchattendancePipe implements PipeTransform {


transform(items: any, emp_code_Search: string, emp_name_search: string, month_search: string, present_days_Search: string, absent_days_Search: string, half_days_search:string, late_marks_search:string){
  if (items && items.length){
    // console.log(items);
      return items.filter(item =>{
          if (emp_code_Search && item.emp_code.toLowerCase().indexOf(emp_code_Search.toLowerCase()) === -1){
              return false;
          }
          if (emp_name_search && item.emp_name.toLowerCase().indexOf(emp_name_search.toLowerCase()) === -1){
            return false;
        }
        if (month_search){
          return JSON.stringify(item.month).toLowerCase().includes(month_search);
        }
        if (present_days_Search){
          return JSON.stringify(item.present_days).toLowerCase().includes(present_days_Search);
        }
          
        if (absent_days_Search){
          return JSON.stringify(item.absent_days).toLowerCase().includes(absent_days_Search);
        }
        if (half_days_search){
          return JSON.stringify(item.half_days).toLowerCase().includes(half_days_search);
        }
        if (late_marks_search){
          return JSON.stringify(item.late_marks).toLowerCase().includes(late_marks_search);
        }
         return true;
    })
  }
  else{
      return items;
  }
}

}
