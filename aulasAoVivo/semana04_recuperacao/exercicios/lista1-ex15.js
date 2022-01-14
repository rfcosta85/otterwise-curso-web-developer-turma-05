let valor1 = 3
let valor2 = 2
let valor3 = 1

if (valor1 > valor2) {
  let aux = valor1
  valor1 = valor2 // valor1 = 2
  valor2 = aux // valor2 = 3
}

if (valor2 > valor3) {
  let aux = valor2
  valor2 = valor3 // valor2 = 1
  valor3 = aux // valor3 = 3
}
if (valor1 > valor2) {
  let aux = valor1
  valor1 = valor2
  valor2 = aux
}

console.log(valor1 + ' ' + valor2 + ' ' + valor3)
