import { PipeTransform, Pipe } from '@angular/core';

@Pipe({name: 'range'})
export class RangePipe implements PipeTransform {
  transform(start: any, end: any, step: number = 1) : any[] {
    let res = [];
    let leftToRight = true;
    let useChar = false;
    
    if (step < 1) {
      throw new Error('Step parameter must be >= 1');
    }
    if (end === undefined || end === null) {
      end = start;
      start = 0;
    }
    if (start > end) {
      let aux = end;
      end = start;
      start = aux;
      leftToRight = false;
    }

    if (!Number.isInteger(start) && !Number.isInteger(end)) {
      useChar = true;
      start = start.charCodeAt(0);
      end = end.charCodeAt(0);
    }

    let val:any;
    for (let i = start; i < end; i+=step) {
      val = i;
      if (useChar == true) {
        val = String.fromCharCode(val)
      }
      if (leftToRight) {
        res.push(val);
      } else {
        res.unshift(val);
      }
    }
    return res;
  }
}