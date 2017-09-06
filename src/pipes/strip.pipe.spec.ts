import {StripPipe} from './strip.pipe';


describe('StripPipe', () => {

  let pipe = new StripPipe();
 
  it('strip pattern', () => {
    expect(pipe.transform('Hey look at Glook!', 'look')).toEqual('Hey  at G!');
  });
 
  it('does not strip if not present', () => {
    expect(pipe.transform('Hey you!', 'girl')).toEqual('Hey you!');
  });
 
});