function getRandomInt(min, max) {
  const arrayCep = []
  min = Math.ceil(min)
  max = Math.floor(max)

  for (let i = 0; i <= 20; i++) {
    arrayCep[i] = Math.floor(Math.random() * (max - min)) + min
  }

  return arrayCep
}
console.log(getRandomInt(29000000, 29099999))

export default getRandomInt
