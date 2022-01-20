const test = new Promise((resolve, reject) => {
  const numbers = [5, 5]
  const somando = (a, b) => a + b
  const sum = numbers.reduce(somando)
  if (sum === 10) {
    resolve()
  } else {
    reject()
  }
})

test
  .then(() => console.log('Soma igual a 10'))
  .catch(() => console.log('A soma não é igual a 10'))
