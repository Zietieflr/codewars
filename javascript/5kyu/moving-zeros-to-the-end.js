function moveZeros(arr) {
  const noZeroes = arr.filter(element => element !== 0)
  let zeroes = []
  for (i = 0; i < (arr.length - noZeroes.length); i++) {
    zeroes.push(0)
  }
  return [...noZeroes, ...zeroes]
}

// can simply do two filters, though iterating through the array twice would
// be slower(if relevant). 