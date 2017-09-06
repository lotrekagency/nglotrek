import { PipeTransform, Pipe } from '@angular/core';

@Pipe({name: 'striphtml'})
export class StripPipe implements PipeTransform {
  transform(input: string, pattern: string = '', flags = 'g') : string {
    return input ? input.replace(new RegExp(pattern, flags), '') : '';
  }
}