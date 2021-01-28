//Devido ter sido usado uma arrow function no mesmo contexto lexico, dentro do contexto da função Pessoa, this apontara para a função Pessoa ou seu contexto.

function Pessoa () {
    this.idade = 0

    setInterval(() => {//Foi criada arrowfunction dentro da função setinterval
        this.idade++
        console.log(this.idade)
    }, 1000)
    
}

new Pessoa 