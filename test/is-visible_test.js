/**
 * @since 2016-10-27 21:17
 * @author vivaxy
 */

import { expect } from 'chai';
import isVisible from '../lib/helpers/is-visible';

describe('Visibility checking with styles', () => {
    it('should be able to detect when an element is visible to user', () => {
        const div = document.querySelector('#mocha');
        expect(isVisible(div)).to.equal(true);
        expect(isVisible('#mocha')).to.equal(true);
        expect(isVisible.bind(null)).to.throw('You should specify the element you want to test');
    });

    it('should be able to detect when an element is not visible to user when' +
        ' `display: none;`', () => {
        const div = document.querySelector('#mocha');
        div.style.display = 'none';
        expect(isVisible(div)).to.equal(false);
        expect(isVisible('#mocha')).to.equal(false);
        div.style.display = 'static';
    });

    it('should be able to detect when an element is not visible to user when' +
        ' `visibility: hidden;`', () => {
        const div = document.querySelector('#mocha');
        div.style.visibility = 'hidden';
        expect(isVisible(div)).to.equal(false);
        expect(isVisible('#mocha')).to.equal(false);
        div.style.visibility = 'visible';
    });

    it('should be able to detect when an element is not visible to user when' +
        ' `display: none;` and `visibility: hidden;`', () => {
        const div = document.querySelector('#mocha');
        div.style.display = 'none';
        div.style.visibility = 'hidden';
        expect(isVisible(div)).to.equal(false);
        expect(isVisible('#mocha')).to.equal(false);
        div.style.display = 'block';
        div.style.visibility = 'visible';
    });

    it('should be able to detect when an element is not visible to user when' +
        ' its parent is `display: none;`', () => {
        const div = document.querySelector('#mocha');
        document.body.style.display = 'none';
        expect(isVisible(div)).to.equal(false);
        expect(isVisible('#mocha')).to.equal(false);
        document.body.style.display = 'block';
    });

    it('should be able to detect when an element is not visible to user when' +
        ' `hidden`', () => {
        const div = document.querySelector('#mocha');
        div.hidden = true;
        expect(isVisible(div)).to.equal(false);
        expect(isVisible('#mocha')).to.equal(false);
        div.hidden = false;
    });
});
