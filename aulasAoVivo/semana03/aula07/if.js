const value = 10

if (value >= 10) {
  console.log('Valor é igual ou maior que 10')
} else {
  console.log('valor é menor que 10')
}

// if ternário

console.log(
  value >= 10 ? 'valor é igual ou maior que 10' : 'valor é menor que 10'
)

console.log(
  value > 10
    ? 'Valor é maior que 10'
    : value === 10
    ? 'valor é 10'
    : 'valor é menor que 10'
)
