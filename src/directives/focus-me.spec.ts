
import {FocusMe} from './focus-me';

import {Component} from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { async } from '@angular/core/testing';


@Component({
  selector: 'searchbox',
  template: `Search: <input type="text" focusMe/>`
})
export class SearchTestBox {}

describe('FocusMe attribute directive Tests', () => {

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        SearchTestBox,
        FocusMe
      ]
    });
  }));

  afterEach(async(() => {
    
  }));

  it('should be able to test directive', async(() => {

    TestBed.compileComponents().then(() => {
      const fixture = TestBed.createComponent(SearchTestBox);
      fixture.whenStable().then(() => {
        let compiled = fixture.debugElement.nativeElement;
        let input = compiled.childNodes[1];
        expect(input === document.activeElement).toBe(true);
      });

    }); 

  }));

});