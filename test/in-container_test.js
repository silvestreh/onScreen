import { expect } from 'chai';
import inContainer from '../lib/helpers/in-container';

describe('Visibility checking within container element', () => {
    let container;

    beforeEach(() => {
        container = document.querySelector('.container');
    });

    it('should be able to detect when an element is within its container boundaries', () => {
        const div = document.querySelector('.contained:first-child');
        expect(inContainer(div, container)).to.equal(true);
        expect(inContainer(div, '.container')).to.equal(true);
        expect(inContainer('.contained:first-child', '.container')).to.equal(true);
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

    it('should require an element to track', () => {
        expect(inContainer.bind(null)).to.throw('You should specify the element you want to test');
    });

    it('should require a container element', () => {
        expect(inContainer.bind(null, '.contained', { container: null }))
            .to.throw('You should specify a container element');
    });
});
