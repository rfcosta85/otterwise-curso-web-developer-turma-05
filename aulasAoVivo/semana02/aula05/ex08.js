/*
    8 - Escreva um programa que tenham como entrada um valor. Este valor é a
    quantidade de linhas de saída que serão apresentadas na execução do
    programa.

*/

const value = 7
let accumulator = 1
let text = ''
for (let i = 0; i < value; i++) {
  for (let j = 1; j <= 4; j++) {
    if (j === 4) {
      text = text + ' PUM'
      console.log(text)
      text = ''
    } else {
      text = text + accumulator + ' '
    }
    accumulator++
  }
}
