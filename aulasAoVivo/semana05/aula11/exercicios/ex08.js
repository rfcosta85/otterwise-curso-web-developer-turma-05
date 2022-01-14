// 8 - [REFATORAÇÃO] Dado um array de nomes, faça um programa que tenha
// como entrada um valor à ser pesquisado e retorne se o nome existe ou não no
// array.

const names = [
  'Juliana',
  'Pedro',
  'Regina',
  'João',
  'Patrícia',
  'Gabriel',
  'Carlos',
  'Carla',
]

const parameter = 'Carla'
const ifExist = names.find((value) => {
  return value === parameter
})

console.log(`O nome ${ifExist} existe`)
