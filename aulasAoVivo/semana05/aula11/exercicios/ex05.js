// 5 - Escreva um programa para substituir os elementos pares pelo valor “X”

const array = [1, -7, -23, 22, -19, 13, 10, -8, 52, -153, -127]
let newArray = []

for (let i = 0; i < array.length; i++) {
  if (array[i] % 2 != 0) {
    newArray += array[i] + ' '
  } else {
    newArray += ' x '
  }
}

console.log(newArray)
