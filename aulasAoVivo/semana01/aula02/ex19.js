function checkSignal(x) {
  if (x % 2 >= 0) {
    return x + ' é positivo'
  } else {
    return x + ' é negativo'
  }
}

let number = -5

let result = checkSignal(number)

console.log(result)
