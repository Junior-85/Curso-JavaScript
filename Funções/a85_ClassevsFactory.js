//Usar classe para construir uma função pode não funcionar, porque dependendo de 
//onde ela é chamada ou quem chama, o this tem problema para quem ele aponta.
//Isso não acontece com a função factory. Ela tem consciêcia do contexto onde foi 
//Criada. **Estudar mais esse ponto e entender a importancia.

class Pessoa {
    constructor(nome) {
        this.nome = nome // nessa situação, o this fez com que a variável passase a ser publica 
    }

    falar() {
        console.log(`Meu nome é ${this.nome}`) //Usar o this para poder acessar a variavel 
    }
}

const p1 = new Pessoa('João')
p1.falar()



//Usando Função Factory e usando arrow
const criarPessoa = nome => {
    return {
        falar: () => console.log(`Meu nome é ${nome}`)
    }
}

const p2 = criarPessoa('Jão')
p2.falar()
