/*
    6. Crie uma função chamada rockPaperScissorsWinner e recebe dois valores como parametro. Esses dois valores podem ser:
    0: tesoura
    1: papel
    2: pedra
    Construa um algoritmo que recebe esses valores randomicamente e printa na tela qual usuario ganhou, se o usuario 1 ou usario 2

*/
let scissors
let paper
let rock
let firstDraw
let secondDraw
let arrayResult

function rockPaperScissorsWinner(value1, value2) {
  if (value1 === 'tesoura' && value2 === 'papel') {
    console.log(`${value1} ganha de ${value2}`)
  } else if (value1 === 'tesoura' && value2 === 'pedra') {
    console.log(`${value1} perde de ${value2}`)
  } else if (value1 === 'papel' && value2 === 'tesoura') {
    console.log(`${value2} ganha de ${value1}`)
  } else if (value1 === 'pedra' && value2 === 'tesoura') {
    console.log(`${value1} perde de ${value2}`)
  } else if (value1 === 'pedra' && value2 === 'papel') {
    console.log(`${value2} ganha de ${value1}`)
  } else if (value1 === 'pedra' && value2 === 'tesoura') {
    console.log(`${value2} perde de ${value1}`)
  } else {
    console.log(`${value1} é igual a ${value2}, e assim temos um empate`)
  }
}

/*function getRandomInt(min, max) {
  min = Math.ceil(min)
  max = Math.floor(max)
  let draw
  for (let i = 0; i < 1; i++) {
    draw = Math.floor(Math.random() * (max - min)) + min
    firstDraw = draw
    secondDraw = draw
  }
  arrayResult = [firstDraw, secondDraw]

  return arrayResult
}
*/

function getRandomInt(min, max) {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min)) + min
}

let whoWin = getRandomInt(0, 2)

firstDraw = whoWin
secondDraw = whoWin

if (firstDraw === 0) {
  scissors = 'tesoura'
} else if (firstDraw == 1) {
  paper = 'papel'
} else {
  rock = 'pedra'
}

if (secondDraw === 0) {
  scissors = 'tesoura'
} else if (firstDraw == 1) {
  paper = 'papel'
} else {
  rock = 'pedra'
}

let result = rockPaperScissorsWinner(firstDraw, secondDraw)
