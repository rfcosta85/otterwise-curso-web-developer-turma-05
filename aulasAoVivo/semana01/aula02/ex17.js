let begin = 18
let finish = 18
let matchTime = 24 - ((24 + begin - finish) % 24)

if (begin === finish) {
  console.log('O jogo durou 24 horas!')
} else {
  console.log('O jogo durou ' + matchTime + ' horas')
}
