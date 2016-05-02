/* global callPhantom */
import { expect } from 'chai';
import insideViewport from '../lib/insideViewport';

function takeScreenshot() {
    if (window.callPhantom) {
        const date = new Date();
        const filename = `screenshots/${date.getTime()}`;
        console.log(`Taking screenshot ${filename}`);
        callPhantom({
            screenshot: filename
        });
    }
}

describe('Visibility checking', () => {
    afterEach(() => {
        if (this.currentTest.state === 'failed') {
            takeScreenshot();
        }
    });

    it('should be able to detect when an element is in the viewport', () => {
        const div = document.querySelector('#mocha');
        expect(insideViewport(div)).to.equal(true);
    });

    it('should be able to detect when an element is off the viewport', () => {
        const div = document.querySelector('.target');
        expect(insideViewport(div)).to.equal(false);
    });

    it('should be able to detect when an element becomes visible after scrolling', () => {
        const div = document.querySelector('.target');
        expect(insideViewport(div)).to.equal(false);
        window.scrollTo(0, 1000);
        expect(insideViewport(div)).to.equal(true);
    });
});
