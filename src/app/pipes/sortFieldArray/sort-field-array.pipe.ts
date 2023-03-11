import { Pipe, PipeTransform } from '@angular/core';
import { Order } from 'src/app/enum/order';

@Pipe({
  name: 'sortFieldArray'
})
export class SortFieldArrayPipe implements PipeTransform {

  transform(value:any[],field:string,order:Order): any[] {
    let sortedArray;
    if(order===Order.ascending){
      sortedArray = value.sort((a:any,b:any)=>{
          return a[field] > b[field] ? 1 : -1
        })
    }
    else if(order===Order.descending){
      sortedArray = value.sort((a:any,b:any)=>{
        return a[field] < b[field] ? 1 : -1
      })
    }
    return value;

  }

}

