/**
 * @since 2016-10-29 16:39
 * @author vivaxy
 */
import { expect } from 'chai';
import onScreen from '../lib/helpers/on-screen';

describe('On screen check', () => {
    it('should be able to detect when an element is on screen', () => {
        const div = document.querySelector('#mocha');
        const body = document.body;
        expect(onScreen(div)).to.equal(true);
        expect(onScreen(div, { tolerance: 0, container: body })).to.equal(true);
    });
});
