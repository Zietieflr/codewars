function rgb(r, g, b){
  const rgb = [r, g, b]
  const hex = rgb.map(value => {
    if (value > 255) {
      value = 255
    } else if (value < 0 ) {
      value = 0
    }
    const hexValue = value.toString(16)
    return "0".repeat(2 - hexValue.length) + hexValue
  })
  return hex.join("").toUpperCase()
}

// can use Math.max() and Math.min() to set boundaries. 
// Math.min(maxNum, x) => whenever the boundary x is less than maxNum
// it will use x. If x is more than maxNum it will use maxNum as that is 
// less than the boundary. 

// could use ("0" + hexValue).slice(-2) rather than repeat