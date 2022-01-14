/*
    4. Crie uma função que conte quantas palavras existem na frase que for passada como parâmetro (dica: utilizem o método split de string)
*/

function howMuchWords(word) {
  let arrayWord = word.split(' ')

  for (let i = 0; i < arrayWord.length; i++) {
    totalWords = i + 1
  }

  return totalWords
}

let totalWords = 0

let result = howMuchWords('A otterwise é muito legal')
console.log(result)
