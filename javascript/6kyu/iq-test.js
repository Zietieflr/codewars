function iqTest(numbers) {
  const indexedNumbers = numbers.split(" ")
  const odds = indexedNumbers.filter(number => number % 2 == 1)
  const evens = indexedNumbers.filter(number => number % 2 == 0)
  const index = odds.length == 1
    ? indexedNumbers.indexOf(odds[0])
    : indexedNumbers.indexOf(evens[0])
  return index + 1
}