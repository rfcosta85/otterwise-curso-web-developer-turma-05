function swimmer(age) {
  if (age >= 5 && age <= 7) {
    return 'Infantil A'
  } else if (age > 7 && age <= 10) {
    return 'Infantil B'
  } else if (age > 10 && age <= 13) {
    return 'Juvenil A'
  } else if (age > 13 && age <= 17) {
    return 'Juvenil B'
  } else if (age > 18) {
    return 'Adulto'
  } else {
    return 'Fora de categoria'
  }
}

let result = swimmer(20)

console.log(result)
