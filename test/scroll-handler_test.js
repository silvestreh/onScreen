import { expect } from 'chai';
import eventHandler from '../lib/helpers/scroll-handler';

describe('Scroll Handler', () => {
    it('should do nothing if there are no selectors', () => {
        const test = eventHandler();
        expect(test).to.equal(undefined);
    });
});
