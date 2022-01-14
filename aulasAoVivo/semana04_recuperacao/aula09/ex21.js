/*
21 -  Maria acabou de iniciar seu curso de graduação na faculdade de medicina e precisa de sua ajuda para organizar os experimentos de um laboratório o qual ela é responsável. Ela quer saber no final do ano, quantas cobaias foram utilizadas no laboratório e o percentual de cada tipo de cobaia utilizada. Este laboratório em especial utiliza três tipos de cobaias: sapos, ratos e coelhos. Para obter estas informações, ela sabe exatamente o número de experimentos que foram realizados, o tipo de cobaia utilizada e a quantidade de cobaias utilizadas em cada experimento.

Dado um array de objetos como entrada com todos os experimentos realizados por Maria, sendo R:Rato, S:Sapo e C:Coelho. Faça uma função que recebe como parâmetro um array e imprime no console um relatório com o total de cobaias, o quanto foi utilizado de cada cobaia e a porcentagem de cada cobaia.
OBS: O percentual deve ser apresentado com dois dígitos após o ponto.

Exemplo de Entrada:
[
  { quantidade: 10, cobaia: "C" },
  { quantidade: 6, cobaia: "R" },
  { quantidade: 15, cobaia: "S" },
  { quantidade: 5, cobaia: "C" },
  { quantidade: 14, cobaia: "R" },
  { quantidade: 9, cobaia: "C" },
  { quantidade: 6, cobaia: "R" },
  { quantidade: 8, cobaia: "S" },
  { quantidade: 5, cobaia: "C" },
  { quantidade: 14, cobaia: "R" },
]

Exemplo de Saída:
Total: 92 cobaias
Total de coelhos: 29
Total de ratos: 40
Total de sapos: 23
Percentual de coelhos: 31.52%
Percentual de ratos: 43.48%
Percentual de sapos: 25.00%

*/

const cobaias = [
  { quantidade: 10, cobaia: 'C' },
  { quantidade: 6, cobaia: 'R' },
  { quantidade: 15, cobaia: 'S' },
  { quantidade: 5, cobaia: 'C' },
  { quantidade: 14, cobaia: 'R' },
  { quantidade: 9, cobaia: 'C' },
  { quantidade: 6, cobaia: 'R' },
  { quantidade: 8, cobaia: 'S' },
  { quantidade: 5, cobaia: 'C' },
  { quantidade: 14, cobaia: 'R' },
]

let total_de_cobaias = 0
let total_cada_cobaia = 0
function contandoCobaias(array) {
  for (let i = 0; i < array.length; i++) {
    total_de_cobaias += array[i].quantidade
  }

  return total_de_cobaias
}

function contando_cada_cobaia(array) {
  for (let i = 0; i < array.length; i++) {
    console.log(array[i].cobaia + ' foi utilizada ' + array[i].quantidade)
  }
}

function contando_porcentagem_de_cada_cobaia(array) {
  for (let i = 0; i < array.length; i++) {
    console.log(
      array[i].cobaia +
        ' foi utilizada ' +
        (array[i].quantidade / total_de_cobaias) * 100
    )
  }
}

console.log('O total de cobaias foi de: ' + contandoCobaias(cobaias))
console.log('\n')
contando_cada_cobaia(cobaias)
console.log('\n')
contando_porcentagem_de_cada_cobaia(cobaias)
