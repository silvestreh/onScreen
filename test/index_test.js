import { expect } from 'chai';
import OnScreen from '../lib/index';

describe('Instantiation', () => {
    it('should create an instance with default settings', () => {
        const instance = new OnScreen();

        expect(instance.options.tolerance).to.equal(0);
        expect(instance.options.debounce).to.equal(100);
    });

    it('should create an instance with custom settings', () => {
        const instance = new OnScreen({
            tolerance: 50,
            debounce: 50
        });

        expect(instance.options.tolerance).to.equal(50);
        expect(instance.options.debounce).to.equal(50);
    });
});

describe('Tracking', () => {
    let instance;

    beforeEach((done) => {
        instance = new OnScreen();
        done();
    });

    it('should provide an enter callback', () => {
        instance.on('enter', '.target', () => {});

        expect(typeof instance.trackedElements['.target'].enter).to.equal('function');
    });

    it('should provide an leave callback', () => {
        instance.on('leave', '.target', () => {});

        expect(typeof instance.trackedElements['.target'].leave).to.equal('function');
    });

    it('should have found DOM nodes to work with', () => {
        instance.on('enter', '.target', () => {});

        expect(instance.trackedElements['.target']).to.have.property('nodes').with.length(2);
    });

    it('should track newly added DOM elements', () => {
        let div = document.createElement('div');

        div.classList.add('target');
        instance.on('enter', '.target', () => {});

        expect(instance.trackedElements['.target']).to.have.property('nodes').with.length(2);

        document.querySelector('body').appendChild(div);
        expect(instance.trackedElements['.target']).to.have.property('nodes').with.length(3);
    });
});

describe('Scroll binding', () => {
    let instance;

    beforeEach((done) => {
        instance = new OnScreen();
        done();
    });

    it('should add a scroll event listener', () => {
        expect(instance.attached).to.equal(true);
    });

    it('should be able to remove the event listener', () => {
        instance.destroy();
        expect(instance.attached).to.equal(false);
    });
});
