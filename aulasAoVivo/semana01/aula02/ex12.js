const name = 'Mohammed Salah'
const governmentEmployee = false
const teacher = true

function credit(government, teacher) {
  if (government && teacher) {
    return (
      'Parabéns ' + name + ' você tem acesso a nossa linha de crédito especial'
    )
  } else if (government) {
    return (
      'Parabéns ' +
      name +
      ' você tem acesso a nossa linha de crédito para servidores'
    )
  } else if (teacher) {
    return (
      'Parabéns ' +
      name +
      ' você tem acesso a nossa linha de crédito para professores'
    )
  } else {
    return name + ' infelizmente você não tem uma linha de crédito disponível'
  }
}

const result = credit(governmentEmployee, teacher)

console.log(result)
