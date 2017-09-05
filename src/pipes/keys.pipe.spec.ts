import {KeysPipe} from './keys.pipe';


describe('KeysPipe', () => {

  let pipe = new KeysPipe();
 
  it('get keys from a dictionary', () => {
    expect(pipe.transform({'key1' : 1, 'key2' : 2})).toEqual(['key1', 'key2']);
  });
 
  it('get keys from an empty dictionary', () => {
    expect(pipe.transform({})).toEqual([]);
  });
 
});