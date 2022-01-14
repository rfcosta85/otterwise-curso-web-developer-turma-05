/*
    1. Crie uma função que recebe uma string (com quatro possibilidades: “soma”, “subtrai”, “divide”, “multiplica”) e dois números. 
    A função deve retornar a operação realizada informada pela string nos dois números.
*/

const operations = (operation) => {
  const calculate = {
    soma: (a, b) => a + b,
    subtrai: (a, b) => a - b,
    multiplica: (a, b) => a * b,
    divide: (a, b) => a / b,
  }
  return (numberOne) => (numberTwo) =>
    calculate[operation](numberOne, numberTwo)
}

console.log(operations('subtrai')(2)(2))
