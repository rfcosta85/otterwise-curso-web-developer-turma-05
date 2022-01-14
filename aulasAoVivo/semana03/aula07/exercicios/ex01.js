/*
    1 - [REFATORAÇÃO] Pegue um valor de entrada e calcule o menor número de
    notas possíveis (cédulas) no qual o valor pode ser decomposto. As notas
    consideradas são de 100, 50, 20, 10, 5, 2 e 1. A seguir mostre o valor lido e a
    relação de notas necessárias.
*/

const paper = [100, 50, 20, 10, 5, 2, 1]

let [hundred, fifty, twenty, ten, five, two, one] = paper

let rest

let change = 15

rest = change % 100
hundred = Math.floor(change / 100)
fifty = Math.floor(rest / 50)
rest %= 50
twenty = Math.floor(rest / 20)
rest %= 20
ten = Math.floor(rest / 10)
rest %= 10
five = Math.floor(rest / 5)
rest %= 5
two = Math.floor(rest / 2)
rest %= 2
one = Math.floor(rest / 1)

console.log(`${hundred} notas de 100 
${fifty} notas de 50
${twenty} notas de 20
${ten} notas de 10
${five} notas de 5
${two} notas de 2
${one} notas de 1`)
