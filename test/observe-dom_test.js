import { expect } from 'chai';
import observeDOM from '../lib/helpers/observe-dom';

describe('DOM observer with MutationObserver', () => {
    let DOMChanged;
    let div;

    beforeEach((done) => {
        div = document.createElement('div');
        DOMChanged = false;

        observeDOM(document.querySelector('body'), () => {
            DOMChanged = true;
        });

        done();
    });

    it('should detect when a node is added', () => {
        document.querySelector('body').appendChild(div);
        setTimeout(() => {
            expect(DOMChanged).to.equal(true);
        }, 0);
    });

    it('should detect when a node is removed', () => {
        const body = document.querySelector('body');

        body.removeChild(document.querySelector('#mocha'));
        setTimeout(() => {
            expect(DOMChanged).to.equal(true);
        }, 0);
    });
});
