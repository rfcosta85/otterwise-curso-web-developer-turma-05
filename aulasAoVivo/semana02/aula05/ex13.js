/*
    13 - Dado um array de nomes, faça um programa que tenha como entrada um
    valor à ser pesquisado e retorne se o nome existe ou não no array.

*/

const names = [
  'Juliana',
  'Pedro',
  'Regina',
  'Patrícia',
  'Gabriel',
  'Carlos',
  'Carla',
]

let search = 'Carla'
let result

for (let i = 0; i < names.length; i++) {
  if (search === names[i]) {
    result = true
  } else {
    result = false
  }
}

if (result) {
  console.log(`O nome ${search} existe no Array`)
} else {
  console.log(`O nome ${search} não existe no Array`)
}
