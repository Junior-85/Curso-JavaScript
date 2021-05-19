// Princiopio do paradigma de OO: capacidade de receber do objeto pai atributos e comportamento que podem ser reutilizados.
//Baseada em Prototipos
//Objetivo é não copiar o codigo de outro objeto
// Comentário professor: "Se tiver que escolher entre herança e composição, priorizar a composição (objeto composto por outros objetos), é mais flexível."
//Padrão de projeto decorator ajuda a tirar a necessidade de usar herança
//Procura de atributo no objeto, não encontrou mas ele tem prototipo, ai ele procura nesse prototipo que seria seu pai (se não encontrar o atributo na cadeia de herança, ele responde undefined). 
//Atributo .prototype esta disponivel em Object, só esta disponível dentro de uma função. 
//[[Prototype != prototype]], Prototype é o conceito e prototype é a propriedade que existe dentro das funções.
//Object é uma função, e por ser função tem o atributo prototype
//Objetos não tem atributo prototype, apenas funções.

const ferrari = {
    modelo: 'F40',
    velMax: 324
}

const volvo = {
    modelo: 'V40', 
    velMax: 200
}


//A partir de __proto__ eu consigo acessar quem é o prototipo do objeto ou o pai, se eu procurar atributo em ferrari e não encotrar ele vai procurar no objeto pai por causa do __proto__.
console.log(ferrari.__proto__)                                          //Resultado é um objeto vazio, vazio mas existe. 
console.log(ferrari.__proto__ === Object.prototype)                     // Teste para saber onde aponta a chamada
console.log(volvo.__proto__ === Object.prototype)                       // Teste para saber onde aponta a chamada
console.log(Object.prototype.__proto__)                                 //Saber se Object.prototype tem um prototipo depois dele, não tem, é null
console.log(Object.prototype.__proto__ === null)

function MeuObjeto() {}
console.log(typeof Object, typeof MeuObjeto)              // São funções, 
console.log(Object.prototype, MeuObjeto.prototype)       //Objeto diferentes, 'MeuObjeto{} é um objeto criado a partir da definição da função  
console.log(ferrari.prototype)                            //Objetos não tem atributo prototype, apenas funções.






