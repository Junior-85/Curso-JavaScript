const funcs = [] // Foi criado um array

for (let i = 0; i < 10; i++) {
    funcs.push( function () { //colocar dentro do array funções anonimas
        console.log(i)
    }) 
}

funcs[2]()
funcs[8]()

//Quando a variavel é definida, a variavel aponta pra onde ela foi armazenada no momento que foi criada atravez da funcao.

//

//Funciona, apresentao valor correto do indice do array, por causa do conceito de clojure. 