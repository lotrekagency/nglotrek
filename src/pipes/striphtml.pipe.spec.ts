import {StripHtmlPipe} from './striphtml.pipe';


describe('StripHtmlPipe', () => {

  let pipe = new StripHtmlPipe();
 
  it('strip html', () => {
    expect(pipe.transform('Hey look at this:<img src=""/> Awesome!')).toBe('Hey look at this: Awesome!');
  });
 
  it('does not strip html if not present', () => {
    expect(pipe.transform('Hey you look awwwesome!')).toBe('Hey you look awwwesome!');
  });
 
});