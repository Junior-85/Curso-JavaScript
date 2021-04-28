//Factory é uma função que sempre retorna um objeto
//Factory simples
//Exemplo de Factory com parametros fixos
//Função para criar um objeto de forma simples, não usa o new, Ela Retorna um objeto

function criaPessoa() {
    return {
        nome: 'Ana',
        sobrenome: 'Silva'
    }
}

console.log(criaPessoa())

//Exemplo usando arrowfunction

var criarMovel = () => {
    return {
        tipo: "Armário",
        modelo: "Vertical"
    }
}

console.log(criarMovel())


//Factory para não criar vários objetos semelhantes, exemplos de objetos repetidos 
const prod1 = {
    nome: 'Rádio', 
    valor: 123.00
}

const prod2 = {
    nome: 'Televisão',
    valor: 400.00
}

console.log(prod1)