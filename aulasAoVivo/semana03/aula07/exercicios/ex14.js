/*
    14 - Uma loja online que possui a estrutura do objeto abaixo, precisa que
    algumas funcionalidades sejam implementadas. Implemente a lista de
    funcionalidades abaixo.
*/

const products = [
  {
    cod: 128,
    name: 'Notebook Asus 16gb + SSD 480Gb',
    stock: 15,
    price: 8980.45,
    category: 'electronics',
  },
  {
    cod: 222,
    name: 'Xbox Séries X 1TB',
    stock: 8,
    price: 4200,
    category: 'Games',
  },
  {
    cod: 33,
    name: 'T-Shirt Fluminense Home Kit 21-22 tam: M',
    stock: 3,
    price: 250,
    category: 'sports',
  },
]

function sortByName(array) {
  const level = {
    ['Notebook Asus 16gb + SSD 480Gb']: 0,
    ['T-Shirt Fluminense Home Kit 21-22 tam: M']: 1,
    ['Xbox Séries X 1TB']: 2,
  }

  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      if (level[array[i].name] < level[array[j].name]) {
        temporary = array[i]
        array[i] = array[j]
        array[j] = temporary
      }
    }
  }
  console.log(array)
}

function sortByCode(array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      if (array[i].cod < array[j].cod) {
        temporary = array[i]
        array[i] = array[j]
        array[j] = temporary
      }
    }
  }

  console.log(array)
}

function sortByStock(array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      if (array[i].stock < array[j].stock) {
        temporary = array[i]
        array[i] = array[j]
        array[j] = temporary
      }
    }
  }

  console.log(array)
}

function sortByPrice(array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      if (array[i].price < array[j].price) {
        temporary = array[i]
        array[i] = array[j]
        array[j] = temporary
      }
    }
  }

  console.log(array)
}

function sortByCategory(array) {
  const level = {
    electronics: 0,
    games: 1,
    sports: 2,
  }

  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      if (level[array[i].category] < level[array[j].category]) {
        temporary = array[i]
        array[i] = array[j]
        array[j] = temporary
      }
    }
  }
  console.log(array)
}

console.log('------------------')
console.log('Ordenando por nome')
console.log('------------------')
sortByName(products)

console.log('-------------------')
console.log('Ordenando por código')
console.log('--------------------')
sortByCode(products)

console.log('-------------------')
console.log('Ordenando por estoque')
console.log('--------------------')
sortByStock(products)

console.log('-------------------')
console.log('Ordenando por Preço')
console.log('--------------------')
sortByPrice(products)

console.log('-------------------')
console.log('Ordenando por categoria')
console.log('--------------------')
sortByCategory(products)

function order(array, amount, code) {
  let product = []
  for (let i = 0; i < array.length; i++) {
    if (
      array[i].cod === code &&
      array[i].stock >= amount &&
      array[i].stock > 0
    ) {
      product = array[i]
    }
  }
  if (product.length !== 0) {
    console.log(product)
  } else {
    console.log('Produto não disponível')
  }
}

function orderResume(array, code, amount, choice, installments) {
  let cart = []
  let total = 0
  let ticket = 0.1
  let debitCard = 0.15
  let totalTicket = 0
  let totalDebt = 0
  let totalCreditCard = 0
  let fees = 0.03

  for (let i = 0; i < amount.length; i++) {
    cart += `
    cod: ${code[i]}: ${array[i].name} ${amount[i]} unidades
    `
    total += array[i].price
  }
  totalCreditCard = (total * fees + total) / installments
  console.log(`${cart} 
   Total do pedido: R$ ${total}`)

  console.log('\nFormas de pagamento')
  console.log(`\nEscolha: 
   
   1. para Boleto com 10% de desconto
   2. para débito com 15% de desconto
   3. para crédito`)

  totalTicket = total - total * ticket
  totalDebt = total - total * debitCard

  if (choice === 1) {
    console.log(`
    Boleto: R$ ${totalTicket.toFixed(2)}`)
  } else if (choice === 2) {
    console.log(`
    Débito: R$ ${totalDebt.toFixed(2)}`)
  } else if (choice === 3) {
    console.log(`
    Pagamento em cartão de crédito em ${installments} x`)
    if (installments === 1) {
      console.log(`
      Total a pagar: R$ ${total.toFixed(2)}`)
    } else if (installments === 2) {
      console.log(`
      Total a pagar: R$ ${totalCreditCard.toFixed(2)} por mês.`)
    } else if (installments === 3) {
      console.log(`
      Total a pagar: R$ ${totalCreditCard.toFixed(2)} por mês.`)
    } else if (installments === 4) {
      console.log(`
      Total a pagar: R$ ${totalCreditCard.toFixed(2)} por mês.`)
    } else if (installments === 5) {
      console.log(`
      Total a pagar: R$ ${totalCreditCard.toFixed(2)} por mês.`)
    } else if (installments === 6) {
      console.log(`
      Total a pagar: R$ ${totalCreditCard.toFixed(2)} por mês.`)
    } else if (installments === 7) {
      console.log(`
      Total a pagar: R$ ${totalCreditCard.toFixed(2)} por mês.`)
    } else if (installments === 8) {
      console.log(`
      Total a pagar: R$ ${totalCreditCard.toFixed(2)} por mês.`)
    } else if (installments === 9) {
      console.log(`
      Total a pagar: R$ ${totalCreditCard.toFixed(2)} por mês.`)
    } else if (installments === 10) {
      console.log(`
      Total a pagar: R$ ${totalCreditCard.toFixed(2)} por mês.`)
    } else if (installments === 11) {
      console.log(`
      Total a pagar: R$ ${totalCreditCard.toFixed(2)} por mês.`)
    } else if (installments === 12) {
      console.log(`
      Total a pagar: R$ ${totalCreditCard.toFixed(2)} por mês.`)
    }
  }
}

let productCartCode = [128, 33]
let amountProduct = [2, 3]
console.log('-------------------')
console.log('Resumo do pedido')
console.log('--------------------')
orderResume(products, productCartCode, amountProduct, 3, 12)
