/* 
2 - Dado um array de números, faça um programa que teste se este array
contém um valor específico. Tanto o valor quanto o array serão valores de
entrada.

*/

const array = [1, 3, -12, 33, -1, 9, 110, -1168, 252, -15253, 2127]

const ifExist = array.find((value) => {
  return value === 9
})

if (ifExist) {
  console.log('O valor foi encontrado no Array')
} else {
  console.log('O valor não foi encontrado no Array')
}
