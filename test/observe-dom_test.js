import { expect } from 'chai';
import observeDOM from '../lib/helpers/observe-dom';

describe('DOM observer', () => {
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
        expect(DOMChanged).to.equal(true);
    });

    it('should detect when a node is removed', () => {
        const body = document.querySelector('body');

        body.removeChild(document.querySelector('#mocha'));
        expect(DOMChanged).to.equal(true);
    });
});
