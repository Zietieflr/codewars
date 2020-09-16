const digitAndAdjacent = {
  "1": ["1", "2", "4"],
  "2": ["1", "2", "3", "5"],
  "3": ["2", "3", "6"],
  "4": ["1", "4", "5", "7"],
  "5": ["2", "4", "5", "6", "8"],
  "6": ["3", "5", "6", "9"],
  "7": ["4", "7", "8"],
  "8": ["5", "7", "8", "9", "0"],
  "9": ["6", "8", "9"],
  "0": ["0", "8"]
}

function getPINs(observed) {
  let finalArray = [];
  iterateAllDigits(0, observed, observed.length, finalArray, "");
  return finalArray;
}

function iterateAllDigits(i, observed, length, arr, number) {
  let digits = digitAndAdjacent[observed.charAt(i)];
  i < length
    ? digits.forEach(digit => {
        return iterateAllDigits(i+1, observed, length, arr, number + digit)
      })
    : arr.push(number)
}
