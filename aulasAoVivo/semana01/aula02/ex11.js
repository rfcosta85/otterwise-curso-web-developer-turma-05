const side1 = 10
const side2 = 5
const side3 = 10

function triangle(number1, number2, number3) {
  if (number1 === number2 && number2 === number3) {
    return 'Triângulo Equilátero'
  } else if (
    number1 === number2 ||
    number2 === number3 ||
    number3 === number1
  ) {
    return 'Triângulo Isósceles'
  } else {
    return 'Triângulo Escaleno'
  }
}

const result = triangle(side1, side2, side3)

console.log(result)
