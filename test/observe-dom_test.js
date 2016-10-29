import { expect } from 'chai';
import observeDOM from '../lib/helpers/observe-dom';

describe('DOM observer with MutationObserver', () => {
    let DOMChanged;
    let div;

    beforeEach((done) => {
        div = document.createElement('div');
        DOMChanged = false;
        document.body.appendChild(div);

        observeDOM(document.querySelector('body'), () => {
            DOMChanged = true;
        });

        done();
    });

    it('should detect when a node is added', () => {
        document.body.appendChild(div);
        setTimeout(() => {
            expect(DOMChanged).to.equal(true);
        }, 0);
    });

    it('should detect when a node is removed', () => {
        const body = document.body;
        body.removeChild(div);
        setTimeout(() => {
            expect(DOMChanged).to.equal(true);
        }, 0);
    });
});
