/*
    1. Crie variáveis para armazenar algumas informações de cadastro de um estudante, são elas: nome, sobrenome, dia do nascimento, mês do nascimento, ano do nascimento, primeira nota e segunda nota. A partir dessas informações, você deve mostrar um relatório na tela da seguinte forma: Nome Completo, Idade, Data de Nascimento e Média:

    Exemplo de Saída:
    Nome Completo: João Pedro Bretanha
    Idade: 29
    Data de Nascimento: 11/04/1992
Média: 8
*/

let nome = 'Rodrigo'
let sobrenome = 'Costa'
let idade = 2021 - 1985
let diaNascimento = 15
let anoNascimento = '1985'
let mesNascimento = '09'
let primeiraNota = 10
let segundaNota = 9
let media = (primeiraNota + segundaNota) / 2

console.log('Nome Completo: ' + nome + ' ' + sobrenome)
console.log('Idade: ' + idade)
console.log(
  'Data de Nascimento: ' +
    diaNascimento +
    '/' +
    mesNascimento +
    '/' +
    anoNascimento
)
console.log('media: ' + media)
