import {calculateFactorial, isValidValue} from '../factorialFunctions'

describe('Factorial Functions Tests', () => {
    it('returns 1 when value is 0', () => {
        expect(calculateFactorial(0)).toBe(1);
    });

    it('returns 1 when value is 1', () => {
        expect(calculateFactorial(1)).toBe(1);
    });

    it('returns 6 when value is 3', () => {
        expect(calculateFactorial(3)).toBe(6);
    });
});

describe('Value validator Tests', () => {
    it('returns false when value is null', () => {
        expect(isValidValue(null)).toBe(false);
    });

    it('returns false when value is not numeric', () => {
        expect(isValidValue('asasd')).toBe(false);
    });

    it('returns true when value is a number', () => {
        expect(isValidValue('1')).toBe(true);
    });

    it('returns true when value is a number', () => {
        expect(isValidValue(1)).toBe(true);
    });
});