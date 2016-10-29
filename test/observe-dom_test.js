import { expect } from 'chai';
import observeDOM from '../lib/helpers/observe-dom';

describe('DOM observer with MutationObserver', () => {
    let DOMChanged;
    let div;

    beforeEach(() => {
        div = document.createElement('div');
        DOMChanged = false;
        document.body.appendChild(div);

        observeDOM(document.querySelector('body'), () => {
            DOMChanged = true;
        });
    });

    it('should detect when a node is added', (done) => {
        document.body.appendChild(div);
        setTimeout(() => {
            expect(DOMChanged).to.equal(true);
            done();
        }, 1000);
    });

    it('should detect when a node is removed', (done) => {
        const body = document.body;
        body.removeChild(div);
        setTimeout(() => {
            expect(DOMChanged).to.equal(true);
            done();
        }, 1000);
    });
});
