/**
 * @since 2016-10-27 21:17
 * @author vivaxy
 */

import { expect } from 'chai';
import isValid from '../lib/helpers/is-valid';

describe('Validation checking', () => {
    it('should be able to detect when an element is still in dom tree', () => {
        const div = document.querySelector('#mocha');
        expect(isValid(div)).to.equal(true);
    });

    it('should be able to detect when an element is not in dom tree', () => {
        const div = document.createElement('div');
        expect(isValid(div)).to.equal(false);
    });
});
