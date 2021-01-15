const funcs = [] // Foi criado um array

for (var i = 0; i < 10; i++) {
    funcs.push( function () { //colocar dentro do array funções anonimas
        console.log(i)
    }) 
}

funcs[2]()
funcs[8]()
//Devido o problema do JavaScript, o var não tem escopo de função, o valor sempre sera 10. Por isso o valor da variável no momento não foi respeitada.