/*
    3. Levando em consideração o array [6, 21, 9, 2, 50, 98, 1] crie uma função que mostra o maior numero da lista
*/

let array = [6, 21, 9, 2, 50, 98, 1]
let biggestNumber = 0

function biggest(array) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] >= biggestNumber) {
      biggestNumber = array[i]
    }
  }

  return biggestNumber
}

let result = biggest(array)

console.log(result)
