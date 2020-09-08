function duplicateEncode(word) {
  const characters = word.toLowerCase().split("")
  return characters.map((character, charIndex) => {
    return includeMultiples(character, charIndex, [...characters])
      ? ")"
      : "("
  }).join("")
}

function includeMultiples(character, charIndex, characters) {
  characters.splice(charIndex, 1)
  return characters.includes(character)
}

// could use .indexOf() and .lastIndexOf()
// .indexOf() returns the index of first found, 
// .lastIndexOf() returns the last index of, 
// this would eliminate the need for the second function
