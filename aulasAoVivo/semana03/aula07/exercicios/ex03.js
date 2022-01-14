/*
    3 - [REFATORAÇÃO] Uma pessoa desenvolvedora recebe frequentemente
    propostas de trabalho pela CLT(Consolidação das Leis Trabalhistas) e pela PJ
    (Pessoa Jurídica). Considerando que o trabalho como CLT envolve férias, 13°
    salário, R$ 700 de benefício e 8% mensal referente ao FGTS. Faça um programa
    que receba como entrada os dois valores mensais oferecidos e tome a decisão
    informando qual proposta a pessoa deve aceitar.


*/
const clt = function (cltWage, pjWage) {
  if (cltWage >= pjWage) {
    return `Com o salário anual de ${cltWage} no regime CLT em comparação ao salário anual de ${pjWage} o trabalhador terá mais benefícios optando pelo regime CLT`
  } else {
    return `Com o salário anual de ${cltWage} no regime CLT em comparação ao salário anual de ${pjWage} o trabalhador terá mais benefícios optando pelo regime de PJ`
  }
}

let wage = 9500
let thirteenthWage = wage
let fgts = 0.08
let benefit = 700
let pjWage = 25000 * 12
let anualWageWithoutTax = wage * 12 + thirteenthWage + benefit * 12
let finalCltWage = anualWageWithoutTax - anualWageWithoutTax * fgts

let result = clt(anualWageWithoutTax, pjWage)

console.log(result)
