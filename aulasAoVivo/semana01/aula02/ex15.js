function growing(value1, value2, value3) {
  if (value1 > value2 && value2 > value3) {
    return '1° ' + value1 + '\n' + '2° ' + value2 + '\n' + '3° ' + value3
  } else if (value2 > value1 && value1 < value3) {
    return '1° ' + value2 + '\n' + '2° ' + value3 + '\n' + '3° ' + value1
  } else if (value1 < value2 && value1 > value3) {
    return '1° ' + value2 + '\n' + '2° ' + value1 + '\n' + '3° ' + value3
  } else if (value1 > value2 && value3 > value2) {
    return '1° ' + value1 + '\n' + '2° ' + value3 + '\n' + '3° ' + value2
  } else {
    return '1° ' + value3 + '\n' + '2° ' + value1 + '\n' + '3° ' + value2
  }
}

let first = 5
let second = 3
let third = 4

const result = growing(first, second, third)

console.log(result)
