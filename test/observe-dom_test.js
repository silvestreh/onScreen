import { expect } from 'chai';
import observeDOM from '../lib/helpers/observe-dom';

describe('DOM observer with MutationObserver', () => {

    it('should detect when a node is added', (done) => {
        const div = document.createElement('div');
        let DOMChanged = false;
        observeDOM(document.querySelector('body'), () => {
            DOMChanged = true;
        });
        document.body.appendChild(div);
        setTimeout(() => {
            expect(DOMChanged).to.equal(true);
            done();
        }, 1000);
    });

    it('should detect when a node is removed', (done) => {
        const div = document.createElement('div');
        let DOMChanged = false;
        document.body.appendChild(div);
        observeDOM(document.querySelector('body'), () => {
            DOMChanged = true;
        });
        const body = document.body;
        body.removeChild(div);
        setTimeout(() => {
            expect(DOMChanged).to.equal(true);
            done();
        }, 1000);
    });
});
