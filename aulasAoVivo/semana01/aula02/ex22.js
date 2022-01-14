function atm(order) {
  let resto = order % 100
  let hundred = Math.floor(order / 100)
  let fifty = Math.floor(resto / 50)
  resto %= 50
  let twenty = Math.floor(resto / 20)
  resto %= 20
  let ten = Math.floor(resto / 10)
  resto %= 10
  let five = Math.floor(resto / 5)
  resto %= 5
  let two = Math.floor(resto / 2)
  resto %= 2
  let one = Math.floor(resto / 1)
  console.log(
    hundred +
      ' nota(s) de R$ 100 \n' +
      fifty +
      ' nota(s) de R$ 50,00 \n' +
      twenty +
      ' nota(s) de R$ 20,00 \n' +
      ten +
      ' nota(s) de R$ 10,00 \n' +
      five +
      ' nota(s) de R$ 5,00 \n' +
      two +
      ' nota(s) de R$ 2,00 \n' +
      one +
      ' nota(s) de R$ 1,00'
  )
}

let value = 1058

let result = atm(value)
