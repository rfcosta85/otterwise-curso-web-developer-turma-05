function freelancer(jobHours) {
  return hourWage * jobHours
}

let wage = 5000
let totalHours = 160
let tax = wage
let totalDays = 22
let dayWageWithTax = 2
let dayWage = (wage / totalDays) * dayWageWithTax
let dayHour = totalHours / totalDays
let hourWage = dayWage / dayHour
let freelancerJobHour = 18

let result = freelancer(freelancerJobHour)

console.log(
  'Hora pré determinada para a execução do trabalho: ' +
    freelancerJobHour +
    ' horas'
)
console.log('O valor a ser cobrado deverá ser de: ' + result)
