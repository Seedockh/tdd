import {isogram} from './isogram';

describe('isogram', () => {
    test('it returns false for "isograms"', () => {
        expect(isogram('isograms')).toBe(false)
    });

    test('it returns true for "background"', () => {
        expect(isogram('background')).toBe(true)
    });

    test('it returns true for "downstream"', () => {
        expect(isogram('downstream')).toBe(true)
    });

    test('it returns true for "six-year-old"', () => {
        expect(isogram('six-year-old')).toBe(true)
    });

    test('it returns true for @@@@-azerty', () => {
        expect(isogram('@@@@-azerty')).toBe(true)
    });

    test('it returns true for !_-=$%#@', () => {
        expect(isogram('!_-=$%#@')).toBe(true)
    });

    test('it returns false for "JOHN DOE"', () => {
        expect(isogram('JOHN DOE')).toBe(false)
    });

    test('it returns false for "aA"', () => {
        expect(isogram('aA')).toBe(false)
    });

    test('it throws Error for ""', () => {
      try {
        expect(isogram('')).toThrow(Error)
      } catch (e) {
        expect(e.message).toBe('Isogram parameter is either empty, null or undefined')
      }
    });

    test('it throws Error for undefined', () => {
      try {
        expect(isogram(undefined)).toThrow(Error)
      } catch (e) {
        expect(e.message).toBe('Isogram parameter is either empty, null or undefined')
      }
    });

    test('it throws Error for null', () => {
      try { expect(isogram(null)).toThrow(Error) }
      catch (e) {
        expect(e.message).toBe('Isogram parameter is either empty, null or undefined')
      }
    });
});
