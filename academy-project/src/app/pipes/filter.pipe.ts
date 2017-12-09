import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, term: any): any {
   // check if search is undefined
   if (term == undefined) return value;
   //return updated value array
   return value.filter(function(value){
     return value.lastName.toLowerCase().includes(term.toLowerCase());
   })
  }

}
