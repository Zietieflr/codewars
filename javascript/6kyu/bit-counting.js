var countBits = function(number) {
  return number
    .toString(2)
    .split("")
    .filter(byte => 1 == byte)
    .length
};