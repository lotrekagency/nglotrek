import {ReplacePipe} from './replace.pipe';


describe('ReplacePipe', () => {

  let pipe = new ReplacePipe();
 
  it('strip pattern', () => {
    expect(pipe.transform('Hey look at me!', 'me', 'him')).toEqual('Hey look at him!');
  });
 
  it('replace ignoring case', () => {
    expect(pipe.transform('Hey you! You must pay attention!', 'you', '', 'gi')).toEqual('Hey !  must pay attention!');
  });

  it('does not strip if not present', () => {
    expect(pipe.transform('Hey you!', 'girl', 'boy')).toEqual('Hey you!');
  });
 
});