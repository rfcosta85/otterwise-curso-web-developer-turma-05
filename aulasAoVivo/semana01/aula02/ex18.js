const valueOne = 6
const valueTwo = 5
const valueThree = 4

function orderValues(number1, number2, number3) {
  console.log(number1 + '\n' + number2 + '\n' + number3)
  position2 = number3
  position3 = number1
  position1 = number2
  console.log(
    'Novos valores adotados \n' +
      position1 +
      '\n' +
      position2 +
      '\n' +
      position3
  )
}

let position1 = valueOne
let position2 = valueTwo
let position3 = valueThree

let result = orderValues(position1, position2, position3)
