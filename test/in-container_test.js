/* global callPhantom */
import { expect } from 'chai';
import inContainer from '../lib/helpers/in-container';
import takeScreenshot from './take-screenshot';

describe('Visibility checking within container element', () => {
    let container;

    beforeEach(() => {
        container = document.querySelector('.container');
    });

    afterEach(function snap() {
        if (this.currentTest.state === 'failed') {
            takeScreenshot();
        }
    });

    it('should be able to detect when an element is within its container boundaries', () => {
        const div = document.querySelector('.contained:first-child');
        expect(inContainer(div, container)).to.equal(true);
    });

    it('should be able to detect when an element is off its container boundaries', () => {
        const div = document.querySelector('.contained:last-child');
        expect(inContainer(div, container)).to.equal(false);
    });

    it('should be able to detect when an element becomes visible after scrolling', () => {
        const div = document.querySelector('.contained:last-child');
        expect(inContainer(div, container)).to.equal(false);
        container.scrollTop = 1000;
        expect(inContainer(div, container)).to.equal(true);
    });
});
