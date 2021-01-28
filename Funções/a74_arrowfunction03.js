let comparaComThis = function (param) {
    console.log(this === param)
}

comparaComThis(global) // Nesse contexto, no node, this aponta para global
//No browser o objeto global é window, e no browser no contexto de um função normal this tambem aponta para window. 
//Cuidado ao chamar this e atribuir determinado atributo para this dentro do escopo de uma função normal, sem nenhum tratamento de escopo, porque estaremos trabalhando no escopo global. Cuidado para não trabalhar assim. Tem que ser com escopo 'limitados'.

//Usando Bind

const obj = {}
comparaComThis = comparaComThis.bind(obj)
comparaComThis(global)//Por termos usado o bind, o this não aponta mais para global 
comparaComThis(obj)//O this agora dentro da função aponta para o obj por causa do bind.

// USANDO ARROWFUNCTION

let comparaComThisArrow = param => console.log(this === param) 
comparaComThisArrow(global) //Não apontara para o global como uma função normal porque foi definida dentro de um modulo do node. Cada arquivo representa um módulo. Se a função foi escrita em um módulo ou seu contexto detro do módulo, o this da função é o proprio módulo(o dono). 
// Resumo: se criar uma função normal apontará para global, se fizer com arrow não apontará.
// Resumo: o this dentro de uma função tradicional de JS varia conforme a chamada, aponta para o obj global tanto no browser quanto no node.
// Com Arrow, this é mais previsivel, aponta para o objeto corrente, para o modulo corrente, o arquivo no qual a função foi definida. 

// TESTE THIS COM module.exports
comparaComThisArrow(module.exports) //Modules pode ser acessado diretamente dentro de um aqrquivo no NODE com uso do 'this'
comparaComThisArrow(this)

// BIND dentro de uma função arrow - Para teste
// Teste, quem é mais forte, Bind ou arrowfunction
//Arrowfuntion, o conceito parmanece

comparaComThisArrow = comparaComThisArrow.bind(obj) // Foi tentado mundar a referencia de this com bind, mas a arrowfunction não permite
comparaComThisArrow(obj)
comparaComThisArrow(module.exports)//Continua apontando para onde originalmente foi escrito ou atribuido para o this
//Conclusão: O this de uma função ARROW, é um this associado ao contexto com o qual a função foi escrita.
 


