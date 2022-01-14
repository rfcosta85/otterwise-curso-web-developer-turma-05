const supermarketList = [
    { nome: 'maçã', quantidade: 2, valor: 0.5},
    { nome: 'alface', quantidade: 1, valor: 1.73},
    { nome: 'Água 5L', quantidade: 2, valor: 5.99},
    { nome: 'Pão Francês', quantidade: 8, valor: 0.63}
    ]

    //const [{amount, price}] = supermarketList
    //console.log()
 
    const finalPrice = function(list) {
        let finalPrice = 0
        for(let i = 0; i < supermarketList.length; i++) {
            finalPrice += supermarketList[i].quantidade * supermarketList[i].valor
        }
        return finalPrice
    }

    let result = finalPrice(supermarketList)

    console.log(result)