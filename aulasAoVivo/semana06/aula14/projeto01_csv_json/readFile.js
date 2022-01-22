import { readFile, writeFile } from 'fs/promises'

const data = (await readFile('./lista.csv')).toString()

const splitFile = data.split('\r\n')

const [header, ...files] = splitFile

const array = []

for (const i of files) {
  const splitfiles = i.split(',')
  array.push({
    id: +splitfiles[0],
    name: splitfiles[1],
    preco: splitfiles[2].replace('', 'R$').replace('.', ','),
  })
}

// for(let i = 0; i < convertCSVtoJson.json.length; i++) {
//     convertCSVtoJson[i].preco = convertCSVtoJson
// }

const writingFile = await writeFile(
  './convertCSVToJson.json',
  JSON.stringify(array)
)

console.log(writingFile)
