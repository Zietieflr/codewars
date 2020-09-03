function pigIt(phrase){
  return phrase.split(" ").map(word => {
    return word.match(/[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g)
      ? word
      : word.slice(1) + word.charAt(0) + "ay"
  }).join(" ")
}