//Fazer a classe do exemplo da aula 85 e usar uma função construtora e não Classe.

//Classe
//Substistituir class por function
    //constructor(nome) { //Os parametros do construtor passam a ser parametros da função construtora
    //O que foi feito no construtor da classe é feito diretamente na função construtora

function Pessoa(nome) { 
        this.nome = nome 
    
// para transformar a função e fazer ela ficar diretamente no objeto, coloca-s e o this 
    this.falar = function () { 
        console.log(`Meu nome é ${this.nome}`) //Usar o this para poder acessar a variavel 
    }
}

const p1 = new Pessoa('João')
p1.falar()

//A forma de instanciar é a mesma de chamar é a mesma de uma classe.