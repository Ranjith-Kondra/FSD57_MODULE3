import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'exp'
})
export class ExpPipe implements PipeTransform {

  experience : any;
  currentyear:any;
  joinyear : any;

  transform(value: any): any {

    this.currentyear = new Date().getFullYear();
    this.joinyear = new Date(value).getFullYear();
    this.experience = this.currentyear - this.joinyear;
    return this.experience;
  }

}
