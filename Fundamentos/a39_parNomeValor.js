//Par nome/valor; identificador/valor ou chave/valor
const saudacao = 'Opa' //contexto lexico, onde a variavel foi criada
                       // saudacao é o nome ou identificador e Opa é o valor

function exec() {
    const saudacao = 'Fala' //Contexto lexico 2
    return saudacao
}                      

console.log(saudacao)
console.log(exec())

//Objetos são grupos aninhados de pares nome/valor

const cliente = { //Objeto cliente
    nome: 'Pedro',
    idade: 32,
    peso: 90,
    enderço: {//Objeto endereço
        logradouro: 'Rua Das Ortencias', //Os elementos poderiam ter os mesmos nomes do objeto cliente, não conflitam porque são contextos diferentes.
        numero: 123
    }
}

console.log(cliente)

