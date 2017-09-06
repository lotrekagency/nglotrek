import { PipeTransform, Pipe } from '@angular/core';

@Pipe({name: 'striphtml'})
export class ReplacePipe implements PipeTransform {
  transform(input: string, pattern: string = '', replace: string = '', flags = 'g') : string {
    return input ? input.replace(new RegExp(pattern, flags), replace) : '';
  }
}