/*
    20 - Dado o objeto abaixo, faça um programa que imprime no console o nome,
    cpf e telefone formatados. Dica: Separe o código em funções de formatação
    para cada um dos campos.

*/

const register = {
  nome: 'Analu dos santos baptista',
  cpf: '14776213931',
  telefone: '8328008258',
}

let name = register.nome
let cpf = register.cpf.replace('14776213931', '147.762.139-31')
let phone = register.telefone.replace('8328008258', '(83) 28000-8258')

console.log(name)
console.log(cpf)
console.log(phone)
