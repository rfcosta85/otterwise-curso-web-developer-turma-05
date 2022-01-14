/*
    17 - Dado o array de objetos a seguir, crie um algoritmo que imprimirá no
    console se o user é dev ou não, conforme a saída esperada à seguir.
    Importante: DEVE ser na mesma linha.
*/

let text
const value = 1

const array = [
  { name: 'Marília', age: 26, job: 'Dev' },
  { name: 'Juca', age: 21, job: 'RH' },
  { name: 'Flávia', age: 30, job: 'Financeiro' },
  { name: 'Sérgio', age: 24, job: 'Dev' },
]

for (let i = 0; i < value; i++) {
  for (let j = 0; j < array.length; j++) {
    if (array[j].job === 'Dev') {
      text = `${text} ${array[j].name} é dev,`
    } else {
      text = `${text} ${array[j].name} não é dev,`
    }
  }
  console.log(text)
}
