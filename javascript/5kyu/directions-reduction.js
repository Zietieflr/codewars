// refactored with simpler logic
function dirReduc(route){
  const opposite = {
    "NORTH": "SOUTH",
    "SOUTH": "NORTH",
    "EAST": "WEST",
    "WEST": "EAST"
  }

  return route.reduce((shortestRoute, direction) => {
    shortestRoute[shortestRoute.length - 1] === opposite[direction]
      ? shortestRoute.pop()
      : shortestRoute.push(direction)
    return shortestRoute
  }, [])
}


// initial attempt
// let skip = false

// function dirReduc(arr){
//   const simplifiedDirections = simplifyDirections(arr)
//   return simplifiedDirections.length == arr.length
//     ? simplifiedDirections
//     : simplifyDirections(simplifiedDirections)
// }

// function simplifyDirections(arr) {
//   const opposite = {
//     "NORTH": "SOUTH",
//     "SOUTH": "NORTH",
//     "EAST": "WEST",
//     "WEST": "EAST"
//   }

//   return arr.reduce((simpleDirections, direction, i, sourceArr) => {
//     if (skip) {
//       toggleSkip()
//     } else {
//       opposite[direction.toUpperCase()] == sourceArr[i+1]
//         ? toggleSkip()
//         : simpleDirections.push(direction)
//     }
//     return simpleDirections
//   }, [])
// }

// function toggleSkip() {
//   skip = !skip
// }
