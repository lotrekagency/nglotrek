import { PipeTransform, Pipe } from '@angular/core';

@Pipe({name: 'striphtml'})
export class StripHtmlPipe implements PipeTransform {
  transform(input: string) : string {
    return input ? input.replace(/<[^>]+>/gm, '') : ''
  }
}