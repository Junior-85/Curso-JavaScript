//Código executado no browser para testar this
//function f1 () {console.log(this === window)}
//No browser será true porque this aponta para o objeto global

//chamada de função através de um clique na tela
// document.getElementsByTagName('body') [0].onclick = f1
// f f1(){console.log(this === window)}
// Se a chamada da funçao com this for através de um clique na tela, 
// o resultado da função será false.

/* Sobre arraw function - Foi criada por dois motivos
1° - reduzir o tamanho da função e sua sintaxe, exemplo:
 const f3 = () => console.log(this === window) // mesma função para testar this mas no formato arrow function

2° - Ter um this que não varia ou fazer o this não variar.

No teste do browser,independente de como chamarmos this, ou onde ele estiver, se usarmos a função arrow, this apontara para window ou escopo global. 

Se this for utilizado em uma função 'tradicional' ele pode variar, usando this em uma arrow functio o this não varia. 
O this sera definido no momento que a função for definida, o this sera usado ou associado ao contexto que função foi definida. 