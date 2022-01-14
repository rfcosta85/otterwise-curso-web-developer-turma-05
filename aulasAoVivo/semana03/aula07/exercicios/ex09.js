/*
    9 - [REFATORAÇÃO] Dado um array de números, faça um programa que encontre
    o menor elemento deste array e sua posição. Mostre as informações
    encontradas no console.
    OBS: Para melhorar a resolução desse problema, monte um programa que
    também consegue retornar qual o maior valor e qual a sua posição.
*/

const array = [1,2,3,4,-5,6,7,8,9,10]
let smallestNumber 
let biggestNUmber
let smallestPosition
let biggestPosition

const smallestElement = function(array) {
    for(let i = 0; i < array.length; i++) {
        if(i === 0) {
            smallestNumber = array[0]
        } else {
            if(smallestNumber > array[i]) {
                smallestNumber = array[i]
                smallestPosition = i
            }
        }
    }

   console.log(`O menor número do Array é ${smallestNumber} e a sua posição é a ${smallestPosition}`)
}

const biggestElement = function(array) {
    for(let i = 0; i < array.length; i++) {
        if(i === 0) {
            biggestNumber = array[0]
        } else {
            if(biggestNumber < array[i]) {
                biggestNumber = array[i]
                biggestPosition = i
            }
        }
    }

    console.log(`O maior número do Array é ${biggestNumber} e a sua posição é a ${biggestPosition}`)
}

smallestElement(array)
biggestElement(array)