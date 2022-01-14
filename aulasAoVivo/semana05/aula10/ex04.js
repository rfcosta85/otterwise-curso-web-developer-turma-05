//1. Levando em consideração o array [“joao”, “pedro”, “Gabriel”, “Mari”], retorne um novo array com o seguinte padrão: [{id: 0, name: “joao”}, {id: 1: name: “pedro”}, ...]

const array = ['joao', 'pedro', 'Gabriel', 'Mari']

const newArray = array.map((user, index) => {
  return {
    id: index,
    name: user,
  }
})

console.log(newArray)
