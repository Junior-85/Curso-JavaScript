//Função setInterval() dispara outra função a partir de determinado intevalo passado em milissegundos

function Pessoa() {
    this.idade = 0 //criação do atributo idade através do this. Quando o objeto for criado através da funçao vamos ter o atributo idade criado para manipulação

    setInterval(function() {
        this.idade++
        console.log(this.idade)
    }, 1000)
}

new Pessoa //Objeto sendo instanciado


// O this.idade não aponta para o Objeto Pessoa Como quem esta disparando a chamada da função é um temporizador e não o objeto pessoa. o resultado é NaN

//1° Forma de resolver problema 
//Usando .bind(this) o this apontará para o  objeto pessoa, já que ele esta dentro da função

function Pessoa1() {
    this.idade = 0

    setInterval(function(){
        this.idade++
        console.log(this.idade)
    }.bind(this), 1000)
}

new Pessoa1

//2° Forma de resolver o problema
//Usar uma const self para substituir pelo self

function Pessoa2() {
    this.idade = 0

    const self = this
    setInterval(function(){
        self.idade++
        console.log(self.idade)
    }, 1000)
}

new Pessoa2



