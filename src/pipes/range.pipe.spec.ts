import {RangePipe} from './range.pipe';


describe('RangePipe', () => {

  let pipe = new RangePipe();
 
  it('get range', () => {
    expect(pipe.transform(2, 5)).toEqual([2, 3, 4]);
  });

  it('get range with step', () => {
    expect(pipe.transform(2, 5, 2)).toEqual([2, 4]);
  });

  it('get range with step', () => {
    expect(pipe.transform(10, 4)).toEqual([9, 8, 7, 6, 5, 4]);
  });

  it('get range with characters', () => {
    expect(pipe.transform('a', 'e', 1)).toEqual(['a', 'b', 'c', 'd']);
  });

  it('get range with characters with step', () => {
    expect(pipe.transform('a', 'e', 2)).toEqual(['a', 'c']);
  });
 
});