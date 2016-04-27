import { multiply } from '../lib/index';
import { strictEqual } from 'assert';

describe('multiply', () => {
    it('returns 0 when either argument is 0', () => {
        strictEqual(multiply(0, 2), 0);
        strictEqual(multiply(4, 0), 0);
    });

    it('returns the value of one number if the other is 1', () => {
        strictEqual(multiply(1, 8), 8);
        strictEqual(multiply(5, 1), 5);
    });

    it('is commutative', () => {
        strictEqual(multiply(2, 4), multiply(4, 2));
    });

    it('returns the product of the two numbers', () => {
        strictEqual(multiply(11, 9), 99);
    });

    it('handles negative numbers', () => {
        strictEqual(multiply(-2, 2), -4);
        strictEqual(multiply(2, -2), -4);
        strictEqual(multiply(-2, -2), 4);
    });
});
