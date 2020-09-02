function order(words){
  return words.split(" ").sort( (wordA, wordB) => {
    return wordA.match(/\d+/g)
      .toString()
      .localeCompare(wordB.match(/\d+/g))
  }).join(" ")
}