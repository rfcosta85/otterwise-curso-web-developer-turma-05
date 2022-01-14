/*
    12 - [REFATORAÇÃO] O dono de uma livraria resolveu que precisava de novas
    funcionalidades no seu sistema de livros e para isso ele contratou um
    programador. Conversando com o programador e entendendo as necessidades
    que o dono da livraria precisava, eles chegaram nas seguintes funcionalidades:
*/

const books = [
  {
    cod: '8568014003',
    nome: 'mais esperto que o diabo',
    autor: 'Napoleon Hill',
    valor: 24.6,
    quantidadeVendido: 17675,
  },
  {
    cod: '8550801488',
    nome: 'pai rico, pai pobre',
    autor: 'Robert T. Kiyosaki',
    valor: 42.71,
    quantidadeVendido: 8992,
  },
  {
    cod: '8547001085',
    nome: 'antifragil',
    autor: 'Nassim Nicholas Taleb',
    valor: 70.99,
    quantidadeVendido: 1700,
  },
  {
    cod: '8595080801',
    nome: 'o investidor inteligente',
    autor: 'Benjamin Graham',
    valor: 36.3,
    quantidadeVendido: 8445,
  },
  {
    cod: '8539004119',
    nome: 'o poder do hábito',
    autor: 'Charles Duhigg',
    valor: 48.9,
    quantidadeVendido: 14581,
  },
  {
    cod: '8543102146',
    nome: 'essencialismo',
    autor: 'Greg Mckeown',
    valor: 36.43,
    quantidadeVendido: 9730,
  },
  {
    cod: '9788539003839',
    nome: 'rápido e devagar',
    autor: 'Daniel Kahneman',
    valor: 50.93,
    quantidadeVendido: 5703,
  },
  {
    cod: '8551003429',
    nome: 'princípios',
    autor: 'Ray Dalio',
    valor: 89.9,
    quantidadeVendido: 3707,
  },
  {
    cod: '855717358X',
    nome: 'gestão de alta performance',
    autor: 'Andrew S. Grove',
    valor: 34.94,
    quantidadeVendido: 442,
  },
  {
    cod: '8550805246',
    nome: 'empresas feitas para vencer',
    autor: 'Jim Collins',
    valor: 44.2,
    quantidadeVendido: 824,
  },
  {
    cod: '855080455X',
    nome: 'avalie o que importa',
    autor: 'John Doerr',
    valor: 40.9,
    quantidadeVendido: 797,
  },
]

function authorOfTheMostSoldBookFunction(array) {
  let temporary
  let min_sold_book = books[0]
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[j].quantidadeVendido < array[i].quantidadeVendido) {
        min_sold_book = books[j]
        temporary = array[i]
        array[i] = array[j]
        array[j] = temporary
      }
    }
  }
  return temporary
}

// Top x Livros mais vendidos

function mostSoldBooksFunction(array) {
  let temporary
  let min_sold_book = books[0]
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[j].quantidadeVendido > array[i].quantidadeVendido) {
        min_sold_book = books[j]
        temporary = array[i]
        array[i] = array[j]
        array[j] = temporary
      }
    }
  }
  return array
}

function stock(array) {
  for (let i = 0; i < array.length; i++) {
    console.log(`Livro: ${books[i].nome}`)
  }
}

function lessSearchPrice(array, price) {
  let searchBooks = []

  for (let i = 0; i < array.length; i++) {
    if (array[i].valor < price) {
      //searchBooks += array[i].nome
      //priceBooks += array[i].valor
      console.log(`Livro: ${array[i].nome}
      preço: ${books[i].valor}`)

      searchBooks += array[i].nome
    }
  }
  if (searchBooks.length === 0) {
    console.log(
      'Desculpe, mas infelizmente não encontramos nenhum livro com o valor informado'
    )
  }
  //console.log(searchBooks + ' ')
}

function biggestSearchPrice(array, price) {
  let searchBooks = []

  for (let i = 0; i < array.length; i++) {
    if (array[i].valor > price) {
      //searchBooks += array[i].nome
      //priceBooks += array[i].valor
      console.log(`Livro: ${array[i].nome}
      preço: ${books[i].valor}`)

      searchBooks += array[i].nome
    }
  }
  if (searchBooks.length === 0) {
    console.log(
      'Desculpe, mas infelizmente não encontramos nenhum livro com o valor informado'
    )
  }
  //console.log(searchBooks + ' ')
}

function searchByNameOfBook(array, name) {
  let empty = []
  for (let i = 0; i < array.length; i++) {
    if (array[i].nome === name) {
      console.log(`Livro: ${array[i].nome}`)
      empty = array[i].nome
    }
  }
  if (empty.length === 0) {
    console.log(
      'Desculpe não conseguimos encontrar o seu produto em nossos estoques'
    )
  }
}

function searchByAuthor(array, name) {
  let empty = []
  for (let i = 0; i < array.length; i++) {
    if (array[i].autor === name) {
      console.log(`Autor: ${array[i].autor}`)
      empty = array[i].autor
    }
  }
  if (empty.length === 0) {
    console.log(
      'Desculpe não conseguimos encontrar o seu produto em nossos estoques'
    )
  }
}
function searchByCode(array, code) {
  let empty = []
  for (let i = 0; i < array.length; i++) {
    if (array[i].cod === code) {
      console.log(`Código: ${array[i].cod}`)
      empty = array[i].cod
    }
  }
  if (empty.length === 0) {
    console.log(
      'Desculpe não conseguimos encontrar o seu produto em nossos estoques'
    )
  }
}

function bestSallersBooks(array, bestSallers) {
  if (bestSallers) {
    for (let i = 0; i < bestSallers; i++) {
      console.log(`Livro: ${array[i].nome} 
      Autor: ${array[i].autor}`)
    }
  }
}

function chagePrices(array, newPrices) {
  for (let i = 0; i < array.length; i++) {
    console.log(` Cod: ${array[i].cod}
  Livro: ${array[i].nome}
  Autor: ${array[i].autor}
  R$ ${(array[i].valor * newPrices + array[i].valor).toFixed(2)}
  `)
  }
}

console.log('\n-----------------------------')
console.log('Autor do Livro mais vendido')
console.log('-----------------------------')
console.log(authorOfTheMostSoldBookFunction(books))

console.log('\n---------------------------')
console.log('Lista de livros mais vendidos')
console.log('-----------------------------')
console.log(mostSoldBooksFunction(books))

console.log('\n---------------------------')
console.log('Estoque')
console.log('-----------------------------')
console.log('O estoque de livros será:')
stock(books)

console.log('\n---------------------------')
console.log('Resultado da sua busca')
console.log('-----------------------------')
lessSearchPrice(books, 60)

console.log('\n---------------------------')
console.log('Resultado da sua busca')
console.log('-----------------------------')
biggestSearchPrice(books, 45)

console.log('\n---------------------------')
console.log('Resultado da sua busca')
console.log('-----------------------------')
searchByNameOfBook(books, 'pai rico, pai pobre')

console.log('\n---------------------------')
console.log('Resultado da sua busca')
console.log('-----------------------------')
searchByAuthor(books, 'Nassim Nicholas Taleb')

console.log('\n---------------------------')
console.log('Resultado da sua busca')
console.log('-----------------------------')
searchByCode(books, '8543102146')

console.log('\n---------------------------')
console.log('Top Livros mais vendidos')
console.log('-----------------------------')
bestSallersBooks(books, 3)

console.log('\n---------------------------')
console.log('Alteração dos preços dos livros')
console.log('-----------------------------')
chagePrices(books, 0.1)
