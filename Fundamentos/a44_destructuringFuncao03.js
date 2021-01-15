//Teste funcao rand que retorna numero aleatorio

function rand({min = 0, max = 1000}) { //Passagem de dois atributos atravez de destructuring de um obj. Retirar os atributos min e max do obj
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
    }

const obj = {max: 50, min: 40}
console.log(rand(obj))
console.log(rand({min: 955}))
console.log(rand({}))
//console.log(rand()) -> da ERRO
