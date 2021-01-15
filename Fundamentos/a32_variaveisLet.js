var numero = 1
{
    let numero = 2
    console.log('Dentro = ',numero)
}
console.log('Fora = ',numero)
 

//Impressão da variável fora do escopo

var numero_ = 3
{
    let numero_2 = 4
    console.log(numero_)
}
console.log(numero_)
