/**
 * @since 2016-10-27 21:17
 * @author vivaxy
 */

import { expect } from 'chai';
import isElementVisible from '../lib/helpers/is-visible';

describe('Visibility checking with styles', () => {
    it('should be able to detect when an element is visible to user', () => {
        const div = document.querySelector('#mocha');
        expect(isElementVisible(div)).to.equal(true);
        expect(isElementVisible('#mocha')).to.equal(true);
    });

    it('should be able to detect when an element is not visible to user when' +
        ' `display: none;`', () => {
        const div = document.querySelector('#mocha');
        div.style.display = 'none';
        expect(isElementVisible(div)).to.equal(false);
        expect(isElementVisible('#mocha')).to.equal(false);
        div.style.display = 'static';
    });

    it('should be able to detect when an element is not visible to user when' +
        ' `visibility: hidden;`', () => {
        const div = document.querySelector('#mocha');
        div.style.visibility = 'hidden';
        expect(isElementVisible(div)).to.equal(false);
        expect(isElementVisible('#mocha')).to.equal(false);
        div.style.display = 'visible';
    });

    it('should be able to detect when an element is not visible to user when' +
        ' `display: none;` and `visibility: hidden;`', () => {
        const div = document.querySelector('#mocha');
        div.style.display = 'none';
        div.style.visibility = 'hidden';
        expect(isElementVisible(div)).to.equal(false);
        expect(isElementVisible('#mocha')).to.equal(false);
        div.style.display = 'static';
        div.style.display = 'visible';
    });

    it('should be able to detect when an element is not visible to user when' +
        ' its parent is `display: none;`', () => {
        const div = document.querySelector('#mocha');
        document.body.style.display = 'none';
        expect(isElementVisible(div)).to.equal(false);
        expect(isElementVisible('#mocha')).to.equal(false);
        document.body.style.display = 'static';
    });
});
