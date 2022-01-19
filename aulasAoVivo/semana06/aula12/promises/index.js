const promise = new Promise((resolve, reject) => {
  const string1 = 'otterwise'
  const string2 = 'otterwise'
  if (string1 === string2) {
    resolve()
  } else {
    reject()
  }
})

promise.then(() => console.log('sucesso')).catch(() => console.log('deu erro')) // maneira antiga de utilizar promise

// O then só será executado quando o resolve for executado
