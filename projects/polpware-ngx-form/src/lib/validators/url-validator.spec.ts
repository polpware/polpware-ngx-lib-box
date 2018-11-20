import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import * as Url from 'url-parse';

import { buildUrlValidator, normalizeUrl, normalizeHost } from './url-validator';
import { FormControl } from '@angular/forms';

describe('urlValidator', () => {

    it('A valid url', () => {
        const validator = buildUrlValidator({});
        const ctrl = new FormControl('http://peeroffers.com');

        expect(validator(ctrl)).toBeNull();
    });

    it('An invalid url', () => {
        const validator = buildUrlValidator();
        const ctrl = new FormControl('xpeerofferscom');

        const v = validator(ctrl);

        expect(v).toEqual({ invalid: true });
    });

    it('Normalize into lowercase', () => {
        const v = normalizeUrl('http://PeerOffers.com');

        expect(v).toBe('http://peeroffers.com');

    });

    it('Normalize does not remove last forward slash', () => {
        const v = normalizeUrl('http://PeerOffers.com/');

        expect(v).toBe('http://peeroffers.com/');

    });

    it('host name', () => {
        const v = Url('http://PeerOffers.com/');

        expect(v.host).toBe('peeroffers.com');

    });

    it('www does matter for host name', () => {
        const v = Url('http://WWW.PeerOffers.com/');

        expect(v.host).toBe('www.peeroffers.com');

    });

    it('normalizeHost', () => {
        const v = normalizeHost('http://peeroffers.com');
        expect(v).toBe('peeroffers.com');
    });

    it('normalizeHost remove www', () => {
        const v = normalizeHost('http://www.peeroffers.com');
        expect(v).toBe('peeroffers.com');
    });

    it('normalizeHost is case-insensitive', () => {
        const v = normalizeHost('http://WWW.PEEROFFERS.com');
        expect(v).toBe('peeroffers.com');
    });

    it('normalizeHost includes port', () => {
        const v = normalizeHost('http://WWW.PEEROFFERS.com:65');
        expect(v).toBe('peeroffers.com:65');
    });

});
