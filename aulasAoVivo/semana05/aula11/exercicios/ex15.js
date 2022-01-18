// 15 - [REFATORAÇÃO] O dono de uma livraria resolveu que precisava de novas
// funcionalidades no seu sistema de livros e para isso ele contratou um
// programador. Conversando com o programador e entendendo as necessidades
// que o dono da livraria precisava, eles chegaram nas seguintes funcionalidades:
// ● Autor do livro mais vendido;
// ● Filtrar livros que tem um preço abaixo do valor que será inserido;
// ● Filtrar livros que tem um preço acima do valor que será inserido;
// ● Pesquisa pelo nome do livro;
// ● Pesquisa pelo autor do livro;
// ● Pesquisa pelo código do livro;
// ● Lista do Estoque;
// ● Top X livros mais vendidos (X será um valor inserido como entrada);
// ● Aumento de X % no preço dos livros (X será um valor inserido como
// entrada).
// Tendo por base as funcionalidades acima e como entrada um um array de
// objetos, faça um programa que resolva o problema do dono da livraria.

const travessa = [
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

// sort com os livros mais vendidos

const bestSeller = travessa.sort((a, b) => {
  return b.quantidadeVendido - a.quantidadeVendido
})

// 1- Autor do livro mais vendido

const bestSellerAuthor = bestSeller.find((author, index) => {
  if (index === 0) {
    return author.autor
  }
})

console.log(`Autor do livro mais vendido: `, bestSellerAuthor)

//-----------------------------------------------------------------

//2- Filtrar livros que tem um preço abaixo do valor que será inserido

const findBooksByPrice = 30

const filterBooksByParamatherByLessPrice = travessa.filter((value) => {
  if (value.valor < findBooksByPrice) {
    return value
  }
})

console.log(`Resultado da sua busca: `, filterBooksByParamatherByLessPrice)

//------------------------------------------------------------------------------

//3-Filtrar livros que tem um preço acima do valor que será inserido;

const filterBooksByParamatherByHigePrice = travessa.filter((value) => {
  if (value.valor > findBooksByPrice) {
    return value
  }
})

console.log(`Resultado da sua busca: `, filterBooksByParamatherByHigePrice)

//4-Pesquisa pelo nome do livro;

const searchByNameOfBook = 'gestão de alta performance'

const searchBookByName = travessa.find((nameOfBook) => {
  if (nameOfBook.nome === searchByNameOfBook) {
    return nameOfBook
  }
})

console.log(`Livro encontrado: `, searchBookByName)

//5-Pesquisa pelo autor do livro;

const serachByNameOfAuthor = 'Napoleon Hill'

const searchByAuthorName = travessa.find((nameOfAuthor) => {
  if (nameOfAuthor.nome === serachByNameOfAuthor) {
    return nameOfAuthor
  }
})

console.log(`Autor encontrado: `, serachByNameOfAuthor)

//-------------------------------------------------------------

//6-Pesquisa pelo código do livro;

const searchByBookOfCode = '8543102146'

const searchByCodeOfBook = travessa.find((codeOfBook) => {
  if (codeOfBook.cod === searchByBookOfCode) {
    return codeOfBook
  }
})

console.log(
  `Código do livro ${searchByBookOfCode}
livro encontrado: `,
  searchByCodeOfBook
)

//-------------------------------------------
//7- Lista do Estoque;

const stock = travessa.map((books) => {
  return books
})

console.log('Estoque: ', stock)

//------------------------------
// 8- Top X livros mais vendidos

const listMostSellers = 3

const mapping = bestSeller.filter((firstPositions, index) => {
  if (index < listMostSellers) {
    return firstPositions
  }
})

console.log(`Top ${listMostSellers} de livros mais vendidos: `, mapping)

//------------------------------------------------

//9- Aumento de X % no preço dos livros (X será um valor inserido como
//entrada).

const percentOfGrowth = 0.1

const newStockPrices = travessa.map((newValue) => {
  let values = newValue.valor * 0.1 + newValue.valor
  return values.toFixed(2)
})

console.log(
  `Aumento de ${
    percentOfGrowth * 100
  } % nos livros, confira nova lista de preços: 
`,
  newStockPrices
)
