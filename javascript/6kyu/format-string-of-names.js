// Given: an array containing hashes of names

// Return: a string formatted as a list of names separated by commas except for
// the last two names, which should be separated by an ampersand.

function list(names) {
  return names.length !== 0
    ? names.map((name, index) => formatNames(name, names.length - index)).join("")
    : ''
}

function formatNames(name, distanceFromEnd) {
  return distanceFromEnd > 2
    ? formatList(name, "name", "3+")
    : formatList(name, "name", distanceFromEnd)
}

function formatList(object, key, fromEnd) {
  const listFormats = {
    "1": object[key],
    "2": `${object[key]} & `,
    "3+": `${object[key]}, `
  }
  
  return listFormats[fromEnd]
}