function sum(value1, value2, value3) {
  if (value1 > value2 && value3 < value2) {
    return value1 + value2
  } else if (value1 < value2 && value3 > value2) {
    return value2 + value3
  } else {
    return value2 + value3
  }
}

const result = sum(10, 8, 6)

console.log(result)
