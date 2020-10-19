const reverse = num => {
  let flag = num < 0
  
  const res = parseInt(num.toString().split('').reverse().join(''), 10)
  if (res < Math.pow(-2, 31) || res > (Math.pow(2, 31) - 1)) {
    return 0
  }
  if (flag) {
    return res * -1
  }
  return res
}

console.log(reverse(120))