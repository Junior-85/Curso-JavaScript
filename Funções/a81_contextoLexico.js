const valor = 'Global'

function minhaFuncao() {
    console.log(valor)
}

function exec() {
    
    const valor = 'local'
    minhaFuncao()
}

minhaFuncao()
exec()

//Quando chamamos a função exec(), ela por consequencia chama afunção minhaFuncao(), por causa do contexto em que a funcao foi escrita minhaFuncao achara a variavel valor com string 'Global', ela procura o que executar (a variável valor) no escopo local, não achando ela passa para o escopo mais abrangente, respeitando o contexto que ela foi escrita ou definida, não onde ela foi chamada ou executada mas onde foi definida (não procura dentro de outra função).