import { expect } from 'chai';
import sinon from 'sinon';
import OnScreen from '../lib/index';

describe('Instantiation', () => {
    it('should create an instance with default settings', () => {
        const instance = new OnScreen();
        expect(instance.options.tolerance).to.equal(0);
        expect(instance.options.debounce).to.equal(100);
        instance.destroy();
    });

    it('should create an instance with custom settings', () => {
        const instance = new OnScreen({
            tolerance: 50,
            debounce: 50
        });

        expect(instance.options.tolerance).to.equal(50);
        expect(instance.options.debounce).to.equal(50);
        instance.destroy();
    });
});

describe('Tracking', () => {
    let instance;

    beforeEach((done) => {
        window.scrollTo(0, 0);
        instance = new OnScreen();
        done();
    });

    afterEach((done) => {
        instance.destroy();
        window.scrollTo(0, 0);
        done();
    });

    it('should provide a callback', () => {
        instance.on('enter', '.target', () => {});
        instance.on('leave', '.target', () => {});

        expect(typeof instance.trackedElements['.target'].enter).to.equal('function');
        expect(typeof instance.trackedElements['.target'].leave).to.equal('function');

        expect(instance.on.bind(null, 'enter')).to.throw('No selector to track');
        expect(instance.on.bind(null)).to.throw('No event given. Choose either enter or leave');
        expect(instance.on.bind(null, 'hello', '.target', () => {}))
            .to.throw('hello event is not supported');
    });

    it('should remove a callback', () => {
        instance.on('enter', '.target', () => {});
        instance.on('leave', '.target', () => {});

        expect(typeof instance.trackedElements['.target'].enter).to.equal('function');
        expect(typeof instance.trackedElements['.target'].leave).to.equal('function');

        instance.off('enter', '.target');
        expect(typeof instance.trackedElements['.target'].enter).to.equal('undefined');

        instance.off('leave', '.target');
        expect(typeof instance.trackedElements['.target']).to.equal('undefined');
    });

    it('should have found DOM nodes to work with', () => {
        instance.on('enter', '.target', () => {});

        expect(instance.trackedElements['.target']).to.have.property('nodes').with.length(2);
    });

    it('should call the enter callback', (done) => {
        const testInstance = new OnScreen();
        const callback = sinon.spy();
        testInstance.on('enter', '.target', callback);

        window.scrollTo(0, 2000);

        // We need to wait for scrolling to finish
        setTimeout(() => {
            expect(callback.called).to.equal(true);
            testInstance.destroy();
            done();
        }, 200);
    });

    it('should call the leave callback', (done) => {
        const testInstance = new OnScreen();
        const callback = sinon.spy();

        testInstance.on('leave', '.target', callback);

        window.scrollTo(0, 2000);

        setTimeout(() => {
            window.scrollTo(0, 0);

            // We need to wait for scrolling to finish
            setTimeout(() => {
                expect(callback.called).to.equal(true);
                testInstance.destroy();
                done();
            }, 200);
        }, 200);

    });

    it('should track newly added DOM elements', (done) => {
        const testInstance = new OnScreen();
        const div = document.createElement('div');

        div.classList.add('target');
        testInstance.on('enter', '.target', () => {});

        expect(testInstance.trackedElements['.target']).to.have.property('nodes').with.length(2);

        document.body.appendChild(div);
        setTimeout(() => {
            expect(testInstance.trackedElements['.target']).to.have.property('nodes').with.length(3);
            testInstance.destroy();
            done();
        }, 200);
    });

    it('should be able to track more elements', () => {
        instance.on('enter', '.target', () => {});
        instance.on('enter', '.horizontal', () => {});

        expect({}.hasOwnProperty.call(instance.trackedElements, '.target')).to.equal(true);
        expect({}.hasOwnProperty.call(instance.trackedElements, '.horizontal')).to.equal(true);
    });
});

describe('Scroll binding', () => {
    let instance;

    beforeEach((done) => {
        instance = new OnScreen();
        done();
    });

    afterEach((done) => {
        instance.destroy();
        done();
    });

    it('should add a scroll event listener', () => {
        expect(instance.attached).to.equal(true);
    });

    it('should be able to remove the event listener', () => {
        instance.destroy();
        expect(instance.attached).to.equal(false);
    });

    it('should be able to remove the event listener and add it back', () => {
        instance.destroy();
        expect(instance.attached).to.equal(false);

        instance.attach();
        expect(instance.attached).to.equal(true);
    });

    it('should accept a HTMLElement Object as container', () => {
        const otherInstance = new OnScreen({
            container: document.body
        });

        expect(otherInstance.attached).to.equal(true);
        otherInstance.destroy();
    });
});
