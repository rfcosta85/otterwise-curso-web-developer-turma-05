function calculate(operator, number1, number2) {
  switch (operator) {
    case (operator = 'soma'):
      return number1 + number2
      break
    case (operator = 'subtracao'):
      return number1 - number2
      break
    case (operator = 'divisao'):
      return number1 / number2
      break
    case (operator = 'multiplicacao'):
      return number1 * number2
      break
  }
}

const soma1 = 2
const soma2 = 2
const somando = calculate('soma', soma1, soma2)
console.log(soma1 + ' + ' + soma2 + ' = ' + somando)

const sub1 = 3
const sub2 = 1
const subtraindo = calculate('subtracao', sub1, sub2)
console.log(sub1 + ' - ' + sub2 + ' = ' + subtraindo)

const div1 = 4
const div2 = 2
const divivindo = calculate('divisao', div1, div2)
console.log(div1 + ' / ' + div2 + ' = ' + divivindo)

const mult1 = 4
const mult2 = 5
const multiplicando = calculate('multiplicacao', mult1, mult2)
console.log(mult1 + ' * ' + mult2 + ' = ' + multiplicando)
