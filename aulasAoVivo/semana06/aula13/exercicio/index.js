// 1. Crie uma função que gere uma lista de 20 CEP’s aleatórios. Dica: uma das faixas de CEP válidas vai de 29000000 a 29099999. Use essa informação para gerar os CEP’s dentro dessa faixa.
// 2. Crie um programa que recebe uma lista de CEP’s e gera um arquivo JSON contendo as informações de logradouro, bairro, localidade, uf e o CEP consultado para cada um dos CEP’s válidos.
// Observação: escreva o arquivo apenas com ceps válidos e que tiveram retorno da api.

import axios from 'axios'
import fs from 'fs'

const searchCep = async (cep) => {
  try {
    const { data } = await axios.get(`https://viacep.com.br/ws/${cep}/json/`)
    return data
  } catch (error) {
    console.log('Desculpe! Algo deu errado')
  }
}

const savetoJSON = (infos, fileName) => {
  const parsedInfo = JSON.stringify(infos)
  fs.writeFileSync(fileName, parsedInfo)
} // fç que cria o arquivo
