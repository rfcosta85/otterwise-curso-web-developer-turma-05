//Função impura

function soma(a, b) {
  return a + b + c
}

let c = 3

console.log(soma(1, 2)) // temos uma depeência externa a função

// Função pura

function soma2(a, b, c) {
  return a + b
}

console.log(soma2(1, 2, 3))

const soma3 = function (a, b) {
  return a + b
}

console.log(soma3(5, 4))

function show(value) {
  console.log(value)
}

function soma4(a, b, callback) {
  const total = a + b
  callback(total)
  return total
}

soma4(2, 2, show)

function sumTwoNumbers(numbeOne) {
  return function (numberTwo) {
    return numbeOne + numberTwo
  }
}

console.log(sumTwoNumbers(5)(4))

const operations = {
  sum: function (a, b) {
    return a + b
  },
}

console.log(operations.sum(2, 2))

// funções em array

const operationsArray = [soma3]

console.log(operationsArray[0](4, 1))

const multiply = (a, b) => a * b

console.log(multiply(2, 5))
