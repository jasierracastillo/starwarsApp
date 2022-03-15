import { PeopleService } from './../../application/people/services/people.service';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'height',
})
export class HeightPipe implements PipeTransform {
  transform(param: string): string {
    let value = parseInt(param);
    let height: string = '';
    if (value > 200) {
      height = 'High';
    } else if (value > 100 && value < 200) {
      height = 'Normal';
    } else {
      height = 'Low';
    }
    return height;
  }
}
