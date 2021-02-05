//Factory é uma função que sempre retorna um objeto
//Factory simples
//Exemplo de Factory com parametros fixos

function criaPessoa() {
    return {
        nome: 'Ana',
        sobrenome: 'Silva'
    }
}

console.log(criaPessoa())