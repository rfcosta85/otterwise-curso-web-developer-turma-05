// 9 - [REFATORAÇÃO] Dado a lista de compra a seguir, faça um programa que
// imprime no console valor total. Atenção, o valor de cada item é unitário.

const cart = [
  { nome: 'maçã', quantidade: 2, valor: 0.5 },
  { nome: 'alface', quantidade: 1, valor: 1.73 },
  { nome: 'Água 5L', quantidade: 2, valor: 5.99 },
  { nome: 'Pão Francês', quantidade: 8, valor: 0.63 },
]

const getTotal = (item) => item.quantidade * item.valor

const sumProducts = (accumulator, price) => accumulator + price

const totalCart = cart.map(getTotal).reduce(sumProducts)

console.log(`Total da compra: R$ ${totalCart}`)
