/*
    18 - Dado a lista de compra a seguir, faça um programa que imprime no console
    valor total. Atenção, o valor de cada item é unitário.
*/

const marketList = [
  { nome: 'maçã', quantidade: 2, valor: 0.5 },
  { nome: 'alface', quantidade: 1, valor: 1.73 },
  { nome: 'Água 5L', quantidade: 2, valor: 5.99 },
  { nome: 'Pão Francês', quantidade: 8, valor: 0.63 },
]

let totalApplePrice = marketList[0].quantidade * marketList[0].valor
let totalLettucePrice = marketList[1].quantidade * marketList[1].valor
let totalWaterPrice = marketList[2].quantidade * marketList[2].valor
let totalBreadPrice = marketList[3].quantidade * marketList[3].valor
let total =
  totalApplePrice + totalLettucePrice + totalWaterPrice + totalBreadPrice

console.log(`R$ ${total}`)
