def is_square(number)
  number.negative? ? false : Math.sqrt(number) == Math.sqrt(number).to_i
end
