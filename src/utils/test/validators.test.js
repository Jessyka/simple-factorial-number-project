import isValidValue from '../validators.js'

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