import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mypipe'
})
export class MypipePipe implements PipeTransform {

  transform(name: string,gender:string): any {
   let newName:string;
   
   if(gender === 'M'){
     
    newName='Mr. ' +name;
   }else
   {
       
    newName='Mrs. ' +name;
   }
   return newName;
  }

}
