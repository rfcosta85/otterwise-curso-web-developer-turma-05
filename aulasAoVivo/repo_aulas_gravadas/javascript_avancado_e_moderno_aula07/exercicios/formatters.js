// a.	Nesse arquivo crie uma função chamada formatDate que receba uma data como parâmetro e, utilizando a date-fns, retorna essa data no formato “DD/MM/YYY.
// b.	Esse arquivo deve exportar a função formatDate

import { format } from 'date-fns'

export const formatDate = format(new Date(), 'dd/MM/yyy')
