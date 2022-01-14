function pairOrOdd(number) {
  if (number % 2 === 0) {
    return 'Par'
  } else {
    return 'ímpar'
  }
}

const number = 50

const result = pairOrOdd(number)

console.log(result)
