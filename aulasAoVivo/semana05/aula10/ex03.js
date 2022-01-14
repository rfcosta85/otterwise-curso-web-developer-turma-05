/*Levando em consideração o array abaixo, adicione um novo elemento ao final do array com seu nome e imprima no console na ordem inversa.
[{name: “joao”}, {name: “pedro”}] */

const array = [{ name: 'joao' }, { name: 'pedro' }]

const newArray = array.concat({ name: 'Rodrigo' }).reverse()

console.log(newArray)
