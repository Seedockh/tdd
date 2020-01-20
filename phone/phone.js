export class PhoneNumberSanitizer {
  constructor() {}

  sanitize(userPhone) {
    if (/([0-9][0-9]+-+)+/g.test(userPhone))
      userPhone = userPhone.replace(/\-/g, '')

    if (/([0-9][0-9]+\.+)+/g.test(userPhone))
      userPhone = userPhone.replace(/\./g, '')

    if (/^\+/g.test(userPhone))
      userPhone = userPhone.replace(/^\+[0-9][0-9]/, '0')

    if (/^00[0-9]+/g.test(userPhone))
      userPhone = userPhone.replace(/^00[0-9][0-9]/, '0')

    if (!userPhone) return null

    return userPhone
  }
}
