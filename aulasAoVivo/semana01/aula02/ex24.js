function clt(cltWage, pjWage) {
  if (cltWage >= pjWage) {
    return (
      'Com o salário anual de ' +
      cltWage +
      ' em CLT, conntra o salário anual de ' +
      pjWage +
      ' é correto aceitar a proposta como CLT'
    )
  } else {
    return (
      'Com o salário anual de ' +
      cltWage +
      ' em CLT, conntra o salário anual de ' +
      pjWage +
      ' é correto aceitar a proposta como PJ'
    )
  }
}

let wage = 2500
let thirteenthWage = wage
let fgts = 0.08
let benefit = 700
let pjWage = 5000 * 12
let anualWageWithoutTax = wage * 12 + thirteenthWage + benefit * 12
let finalCltWage = anualWageWithoutTax - anualWageWithoutTax * fgts

let result = clt(anualWageWithoutTax, pjWage)

console.log(result)
