// 2. Crie uma função que recebe um objeto usuário e imprime se ele é maior de idade, utilize os conhecimentos da aula para melhorar o código.

const usuario = {
  name: 'Juca',
  idade: 28,
}

function maiorDeIdade(usuario) {
  const { name, idade } = usuario

  if (idade >= 18) {
    console.log(name + ' tem ' + idade + ' e portanto é maior de idade')
  } else {
    console.log(name + ' tem ' + idade + ' e portanto é menor de idade')
  }
}

console.log(maiorDeIdade(usuario))
