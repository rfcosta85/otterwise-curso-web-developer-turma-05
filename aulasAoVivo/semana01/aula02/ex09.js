const number01 = 2
const number02 = 5

function whoIsBigger(number1, number2) {
  if (number1 > number2) {
    return number1 + ' é  maior que ' + number2
  } else if (number1 < number2) {
    return number1 + ' é menor que ' + number2
  } else {
    return number1 + ' é igual a ' + number2
  }
}

const result = whoIsBigger(number01, number02)

console.log(result)
