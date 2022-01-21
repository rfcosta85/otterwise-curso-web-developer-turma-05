import axios from 'axios'
import fs from 'fs' //fs significa fileSystem
import { input } from 'console-input'

const inputCep = () => input('Digite seu cep: ')

const searchFromCep = async (cep) => {
  try {
    const { data } = await axios.get(`https://viacep.com.br/ws/${cep}/json/`)
    return data
  } catch (error) {
    console.log('Ocorreu um Erro')
  }
}

const savetoJSON = (infos, fileName) => {
  const parsedInfo = JSON.stringify(infos)
  fs.writeFileSync(fileName, parsedInfo)
} // fç que cria o arquivo

const main = async () => {
  const cep = inputCep()
  const { logradouro, bairro, localidade, uf } = await searchFromCep(cep)
  const data = {
    logradouro,
    bairro,
    localidade,
    uf,
  }
  savetoJSON(data, 'arquivo.json')
}

main()
