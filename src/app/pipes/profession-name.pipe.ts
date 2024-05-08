import { Pipe, PipeTransform } from '@angular/core';
import { Profession } from '../models/profession';

@Pipe({
  name: 'professionName',
  standalone: true
})
export class ProfessionNamePipe implements PipeTransform {

  transform(value: number) {
    return Profession[value];
  }

}
