// -Regex patterns below this line ------------------------------>
const EMAIL_REGEX = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/

// -Validation functions below this line ------------------------>
export function validateEmail(email: string) {
  return EMAIL_REGEX.test(email)
}
