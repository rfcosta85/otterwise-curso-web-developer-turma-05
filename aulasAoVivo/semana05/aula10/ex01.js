// 1. Através da string “Maria, Paulo, Moisés, Joel, Ana”, imprima todos os nomes um em cada linha no console

const string = 'Maria, Paulo, Moisés, Joel, Ana'
const array = string.split(',')
for (let i = 0; i < array.length; i++) {
  console.log(`${array[i].trim()}
    `)
}
