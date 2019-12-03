const isValid = function (string) {
  let valid = true
  const stack = []
  const map = {
    '{': '}',
    '[': ']',
    '(': ')'
  }

  for (const key in string) {
    const val = string[key]
    if (['{', '[', '('].includes(val)) {
      stack.push(val)
    } else {
      const peak = stack.pop();
      if (val !== map[peak]) {
        return false
      }
    }
  }

  if (stack.length !== 0) return false
  return valid
}

console.log(isValid('([)'))
console.log(isValid('([{}])'))