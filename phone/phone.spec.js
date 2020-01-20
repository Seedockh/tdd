import { PhoneNumberSanitizer } from './phone'

describe('phone number sanitizer', () => {
  const phoneSanitizer = new PhoneNumberSanitizer()

  test('it sanitizes a dot phone number correctly', () => {
    expect(phoneSanitizer.sanitize('06.01.02.03.04')).toBe('0601020304')
  })

  test('it sanitizes a dash phone number correctly', () => {
    expect(phoneSanitizer.sanitize('06-01-02-03-04')).toBe('0601020304')
  })

  test('it sanitizes a region phone number correctly', () => {
    expect(phoneSanitizer.sanitize('+33601020304')).toBe('0601020304')
  })

  test('it sanitizes a valid phone number correctly', () => {
    expect(phoneSanitizer.sanitize('0033601020304')).toBe('0601020304')
  })

  test('it sanitizes a valid phone number correctly', () => {
    expect(phoneSanitizer.sanitize('0601020304')).toBe('0601020304')
  })

  test('it fails to sanitizes null phone number correctly', () => {
    expect(phoneSanitizer.sanitize(null)).toBe(null)
  })

  test('it fails to sanitizes undefined phone number correctly', () => {
    expect(phoneSanitizer.sanitize(undefined)).toBe(null)
  })

  test('it fails to sanitizes empty phone number correctly', () => {
    expect(phoneSanitizer.sanitize('')).toBe(null)
  })
})
