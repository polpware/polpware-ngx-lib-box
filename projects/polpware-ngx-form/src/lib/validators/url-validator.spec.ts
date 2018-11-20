import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { buildUrlValidator } from './url-validator';
import { FormControl } from '@angular/forms';

describe('urlValidator', () => {

    it('A valid url', () => {
        const validator = buildUrlValidator({});
        const ctrl = new FormControl('http://peeroffers.com');

        expect(validator(ctrl)).toBeNull();
    });
});
