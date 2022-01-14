// 21 -  Maria acabou de iniciar seu curso de graduação na faculdade de medicina e precisa de sua ajuda para organizar os experimentos de um laboratório o qual ela é responsável. Ela quer saber no final do ano, quantas cobaias foram utilizadas no laboratório e o percentual de cada tipo de cobaia utilizada. Este laboratório em especial utiliza três tipos de cobaias: sapos, ratos e coelhos. Para obter estas informações, ela sabe exatamente o número de experimentos que foram realizados, o tipo de cobaia utilizada e a quantidade de cobaias utilizadas em cada experimento.

// Dado um array de objetos como entrada com todos os experimentos realizados por Maria, sendo R:Rato, S:Sapo e C:Coelho. Faça uma função que recebe como parâmetro um array e imprime no console um relatório com o total de cobaias, o quanto foi utilizado de cada cobaia e a porcentagem de cada cobaia.
// OBS: O percentual deve ser apresentado com dois dígitos após o ponto.

// Exemplo de Saída:
// Total: 92 cobaias
// Total de coelhos: 29
// Total de ratos: 40
// Total de sapos: 23
// Percentual de coelhos: 31.52%
// Percentual de ratos: 43.48%
// Percentual de sapos: 25.00%

const arrayExperimentos = [
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

function relatorio(array) {
  let totalCobaias = 0
  let totalCoelhos = 0
  let totalRatos = 0
  let totalSapos = 0

  for (let i = 0; i < array.length; i++) {
    totalCobaias += array[i].quantidade
    if (array[i].cobaia === 'C') {
      totalCoelhos += array[i].quantidade
    } else if (array[i].cobaia === 'R') {
      totalRatos += array[i].quantidade
    } else if (array[i].cobaia === 'S') {
      totalSapos += array[i].quantidade
    }
  }
  const porcentagemCoelhos = (totalCoelhos / totalCobaias) * 100
  const porcentagemRatos = (totalRatos / totalCobaias) * 100
  const porcentagemSapos = (totalSapos / totalCobaias) * 100

  console.log(`Total de cobaias: ${totalCobaias}`)
  console.log(`Total de coelhos: ${totalCoelhos}`)
  console.log(`Total de ratos: ${totalRatos}`)
  console.log(`Total de sapos: ${totalSapos}`)
  console.log(`Porcentagem de coelhos: ${porcentagemCoelhos.toFixed(2)} %`)
  console.log(`Porcentagem de ratos: ${porcentagemRatos.toFixed(2)} %`)
  console.log(`Porcentagem de sapos: ${porcentagemSapos.toFixed(2)} %`)
}

relatorio(arrayExperimentos)
