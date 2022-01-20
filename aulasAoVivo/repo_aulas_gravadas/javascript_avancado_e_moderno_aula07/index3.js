import { formatCurrency as oldFormat } from './module2.js'
import { formatQt } from './module2.js'

const result = oldFormat(6.68994)
const result2 = formatQt(6.68994)

console.log(`
Padrão atual de preço de combustíveis no Brasil R$ ${result2}`)

console.log(
  `
  Padrão de preço de combustíveis que será adotado no Brasil R$ ${result}
  `
)
