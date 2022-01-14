function multiples(number1, number2) {
  if (number1 % number2 === 0) {
    return number1 + ' e ' + number2 + ' são múltiplos'
  } else {
    return number1 + ' e ' + number2 + ' não são múltiplos'
  }
}

const value1 = 4
const value2 = 2

const result = multiples(value1, value2)

console.log(result)
