function soBoaNoticia(nota) {
    if (nota >= 7) {
        return 'Você esta aprovado com ' + nota
    }
}

console.log(soBoaNoticia(7))


function testeValor(valor) {
    if (valor) {
        console.log(`O valor ${valor} é considerado true`) 
    }
}

//Usar console.log na chamada da func fora do bloco sempre vai gerar uma resposta com undefined no ${valor}

testeValor()
testeValor(null)
testeValor(undefined)
testeValor(NaN)
testeValor('')//String vazia
testeValor(' ')//String apenas com um espaço não é vazia
testeValor('?')
testeValor(-1)
testeValor([])//Array vazia é true
testeValor([1,2])//Array com elementos é true
testeValor({})//Objeto vazio é true
testeValor(7)


/*resolução do professor

function soBoaNoticia(nota) {
    if (nota >= 7) { // se a condição for verdadeira, o bloco sera executado
        console.log('Aprovado com ' + nota)
    }
}

soBoaNoticia(7))

*/
