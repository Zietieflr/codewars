function solution(number) {
  return number <= 0 ? 0 : sumValidNumbers(number)
}

function sumValidNumbers(number) {
  let validNumbers = 0
  for ( let i = 0; i < number; i++) {
    if (i%3 == 0) {
      validNumbers += i
    } else if (i%5 == 0) {
      validNumbers += i
    }
  }
  return validNumbers
}