const lado1 = 1
const lado2 = 2
const lado3 = 3

if (lado1 === lado2 && lado2 === lado3) {
  console.log('Trângulo equilátero')
} else if (lado1 === lado2 || lado2 === lado3 || lado1 === lado3) {
  console.log('Triângulo Isósceles')
} else if (lado1 !== lado2 && lado2 !== lado3 && lado1 !== lado3) {
  console.log('Triângulo Escaleno')
}
