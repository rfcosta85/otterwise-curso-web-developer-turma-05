// 12 - [REFATORAÇÃO] Dado o objeto abaixo, faça um programa que imprime no
// console o nome, cpf e telefone formatados. Dica: Separe o código em funções
// de formatação para cada um dos campos.

const user = {
  nome: 'Analu dos santos baptista',
  cpf: '14776213931',
  telefone: '8328008258',
}

console.log('Nome: ' + user.nome)
console.log('CPF: ' + user.cpf.replace('14776213931', '147.762.139-31'))
console.log(
  'Telefone: ' + user.telefone.replace('8328008258', '(83) 2800-8258')
)
