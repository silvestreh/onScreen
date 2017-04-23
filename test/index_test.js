import { expect } from 'chai';
import sinon from 'sinon';
import OnScreen from '../lib/index';

describe('Instantiation', () => {
    it('should create an instance with default settings', () => {
        const instance = new OnScreen();

        ['top', 'right', 'bottom', 'left'].forEach((prop) => {
            expect(instance.options.tolerance[prop]).to.equal(0);
        });
        expect(instance.options.debounce).to.equal(100);
    });

    it('should create an instance with custom settings and single tolerance value', () => {
        const instance = new OnScreen({
            tolerance: 50,
            debounce: 50
        });

        ['top', 'right', 'bottom', 'left'].forEach((prop) => {
            expect(instance.options.tolerance[prop]).to.equal(50);
        });
        expect(instance.options.debounce).to.equal(50);
    });

    it('should create an instance with custom settings and multiple tolerance values', () => {
        const instance = new OnScreen({
            tolerance: {
                top: 150,
                right: 250,
                bottom: 350,
                left: 450
            },
            debounce: 50
        });

        const expectedTolerances = {
            top: 150,
            right: 250,
            bottom: 350,
            left: 450
        };
        ['top', 'right', 'bottom', 'left'].forEach((prop) => {
            expect(instance.options.tolerance[prop]).to.equal(expectedTolerances[prop]);
        });
        expect(instance.options.debounce).to.equal(50);
    });

    it('should create an instance with custom settings and some tolerances missing', () => {
        const instance = new OnScreen({
            tolerance: {
                top: 150,
                right: 250
            },
            debounce: 50
        });

        const expectedTolerances = {
            top: 150,
            right: 250,
            bottom: 0,
            left: 0
        };
        ['top', 'right', 'bottom', 'left'].forEach((prop) => {
            expect(instance.options.tolerance[prop]).to.equal(expectedTolerances[prop]);
        });
        expect(instance.options.debounce).to.equal(50);
    });
});

describe('Tracking', () => {
    let instance;

    beforeEach((done) => {
        window.scrollTo(0, 0);
        instance = new OnScreen();
        done();
    });

    after((done) => {
        window.scrollTo(0, 0);
        done();
    });

    it('should provide a callback', () => {
        function enterCB() {}
        instance.on('enter', '.target', enterCB);
        instance.on('leave', '.target', () => {});

        expect(typeof instance.trackedElements['.target'].enter).to.equal('object');
        expect(typeof instance.trackedElements['.target'].leave).to.equal('object');
        expect(typeof instance.trackedElements['.target'].enter.enterCB).to.equal('function');
        expect(typeof instance.trackedElements['.target'].leave.anonymous).to.equal('function');

        expect(instance.on.bind(null, 'enter')).to.throw('No selector to track');
        expect(instance.on.bind(null)).to.throw('No event given. Choose either enter or leave');
        expect(instance.on.bind(null, 'hello', '.target', () => {}))
            .to.throw('hello event is not supported');
    });

    it('should remove a callback', () => {
        function enterCB() {}
        instance.on('enter', '.target', enterCB);
        instance.on('leave', '.target', () => {});

        instance.off('enter', '.target', enterCB);
        expect(typeof instance.trackedElements['.target'].enter.enterCB).to.equal('undefined');

        instance.off('leave', '.target', 'anonymous');
        expect(typeof instance.trackedElements['.target'].leave.anonymous).to.equal('undefined');
    });

    it('should have found DOM nodes to work with', () => {
        instance.on('enter', '.target', () => {});

        expect(instance.trackedElements['.target']).to.have.property('nodes').with.length(2);
    });

    it('should call the enter callback', () => {
        const callback = sinon.spy();
        instance.on('enter', '.target', callback);

        window.scrollTo(0, 1000);

        // We need to wait for scrolling to finish
        setTimeout(() => {
            expect(callback.called).to.equal(true);
        }, 0);
    });

    it('should call the leave callback', () => {
        const callback = sinon.spy();

        instance.on('leave', '.target', callback);

        window.scrollTo(0, 1000);
        window.scrollTo(0, 0);

        // We need to wait for scrolling to finish
        setTimeout(() => {
            expect(callback.called).to.equal(true);
        }, 0);
    });

    it('should track newly added DOM elements', () => {
        const div = document.createElement('div');

        div.classList.add('target');
        instance.on('enter', '.target', () => {});

        expect(instance.trackedElements['.target']).to.have.property('nodes').with.length(2);

        document.querySelector('body').appendChild(div);
        setTimeout(() => {
            expect(instance.trackedElements['.target']).to.have.property('nodes').with.length(3);
        }, 0);
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
            container: document.querySelector('body')
        });

        expect(otherInstance.attached).to.equal(true);
    });
});
