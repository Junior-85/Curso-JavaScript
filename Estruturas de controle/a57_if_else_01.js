const imprimirResultado = function (nota) { //constante que recebe funcao que recebe parametro nota
    if (nota >= 7) {
        console.log('Aprovado')
    } else {
        console.log('Reprovado')
    }
}

imprimirResultado(10)
imprimirResultado(5)
imprimirResultado('Epa')//Cuidado, devido ser fracamente tipado, JS não acusa erro, tenta comparar e responde como false.