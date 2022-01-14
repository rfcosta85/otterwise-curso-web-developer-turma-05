function irClt(anualWageClt) {
  if (anualWageClt <= 21453.24) {
    return 'Você está isento de imposto de renda.'
  } else if (anualWageClt > 21453.24 && anualWageClt <= 32151.48) {
    return (
      'você pagará ' + anualWageClt * 0.075 + ' de imposto de renda como CLT'
    )
  } else if (anualWageClt > 32151.48 && anualWageClt <= 42869.16) {
    return (
      'você pagará ' + anualWageClt * 0.15 + ' de imposto de renda como CLT'
    )
  } else if (anualWageClt > 42869.16 && anualWageClt <= 53565.72) {
    return (
      'você pagará ' + anualWageClt * 0.225 + ' de imposto de renda como CLT'
    )
  } else {
    return (
      'você pagará ' + anualWageClt * 0.275 + ' de imposto de renda como CLT'
    )
  }
}

function irPj(anualWagePj) {
  if (anualWagePj <= 21453.24) {
    return 'Você está isento de imposto de renda.'
  } else if (anualWagePj > 21453.24 && anualWagePj <= 32151.48) {
    return 'você pagará ' + anualWagePj * 0.075 + ' de imposto de renda como PJ'
  } else if (anualWagePj > 32151.48 && anualWagePj <= 42869.16) {
    return 'você pagará ' + anualWagePj * 0.15 + ' de imposto de renda como PJ'
  } else if (anualWagePj > 42869.16 && anualWagePj <= 53565.72) {
    return 'você pagará ' + anualWagePj * 0.225 + ' de imposto de renda como PJ'
  } else {
    return 'você pagará ' + anualWagePj * 0.275 + ' de imposto de renda como PJ'
  }
}

let wage = 5000
let thirteenthWage = wage
let fgts = 0.08
let benefit = 700
let pjWage = 5000 * 12
let anualWageWithoutTax = wage * 12 + thirteenthWage + benefit * 12
let finalCltWage = anualWageWithoutTax - anualWageWithoutTax * fgts

let irCltResult = irClt(finalCltWage)
let irPjResult = irPj(pjWage)

console.log(
  '\n' +
    'Você teve um salário anual de ' +
    finalCltWage +
    ' Como CLT e ' +
    irCltResult
)
console.log(
  '\n' +
    'Você teve um salário anual de ' +
    pjWage +
    ' como PJ e ' +
    irPjResult +
    '\n'
)
