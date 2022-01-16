// 10 - Escreva um programa para encontrar os elementos comuns entre dois
// arrays

// const arrayOne = [1, -7, -23, 22, -19, 13, 10, -8, 52, -153, -127]

// const arrayTwo = [-5, -19, 32, 28, 65, -2, -49, -63, 22, 13, 255]

// const newArray3 = arrayOne.map((value1) => {
//   return arrayTwo.filter((value2) => {
//     return value2 === value1
//   })
// })

// let finalArray = newArray3.filter((value) => {
//   return value > 10 || value < -1
// })

// console.log(finalArray)

const array1 = [1, -7, -23, 22, -19, 13, 10, -8, 52, -153, -127]
const array2 = [-5, -19, 32, 28, 65, -2, -49, -63, 22, 13, 255]

const sameNumbersArray = array1.map((array1Value) => {
  return array2.filter((array2Value) => {
    return array2Value === array1Value
  })
})

const refineResult = sameNumbersArray.filter((value) => {
  if (value != 0) {
    return value
  }
})

console.log(refineResult)
