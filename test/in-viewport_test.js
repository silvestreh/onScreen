import { expect } from 'chai';
import inViewport from '../lib/helpers/in-viewport';

describe('Visibility checking within viewport', () => {
    it('should be able to detect when an element is in the viewport', () => {
        const div = document.querySelector('#mocha');
        expect(inViewport(div)).to.equal(true);
        expect(inViewport('#mocha')).to.equal(true);
    });

    it('should be able to detect when an element is off the viewport', () => {
        const div = document.querySelector('.target');
        expect(inViewport(div)).to.equal(false);
    });

    it('should be able to detect when an element becomes visible after scrolling', () => {
        const div = document.querySelector('.target');
        expect(inViewport(div)).to.equal(false);
        window.scrollTo(0, 1000);
        setTimeout(() => {
            expect(inViewport(div)).to.equal(true);
        }, 100);
    });

    it('should require an element to track', () => {
        expect(inViewport.bind(null)).to.throw('You should specify the element you want to test');
    });
});
