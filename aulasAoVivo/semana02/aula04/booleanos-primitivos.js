const test = true

if (test) {
  console.log('deu bom')
}

const string = '' // aqui ele será avaliado para falso

if (string) {
  console.log('deu bom')
} // retornará nada, pois a string vazia é setada para falso.
