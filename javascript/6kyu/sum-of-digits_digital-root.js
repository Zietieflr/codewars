function digital_root(digits) {
  let digitSum = 0
  while (digits > 0) {
    digitSum += digits % 10
    digits = Math.floor(digits / 10)
  }
  return digitSum > 9 ? digital_root(digitSum) : digitSum
}