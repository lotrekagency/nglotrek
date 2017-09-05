import {TitleCasePipe} from './titlecase.pipe';

describe('TitleCasePipe', () => {

  let pipe = new TitleCasePipe();
 
  it('transforms "abc" to "Abc"', () => {
    expect(pipe.transform('abc')).toBe('Abc');
  });
 
  it('transforms "abc def" to "Abc Def"', () => {
    expect(pipe.transform('abc def')).toBe('Abc Def');
  });
 
});