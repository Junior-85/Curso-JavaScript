/*
Um objeto é uma Coleção dinâmica de pares chave/valor
*/

const produto = new Object // A partir do operador new  chamando uma função, no caso Object 

produto.nome = 'cadeira'                  //Forma dinamica de criar atributo ou adicionar elementos ao obj
produto['marca do produto'] = 'Generica'  //Com colchetes, parecida com array, foge um pouco do padrão JS de identificadores, mas so pode ser acessado da mesma forma
produto.preco = 220
console.log(produto)

        /* deletar dinamicamten um elemento */
delete produto.nome 
delete produto['marca do produto'] // Precisa ser escrito da mesma forma que foi criado, não é possivel acessar com 'notação ponto'
console.log(produto)

/*Objeto mais complexo, objeto com objetos dentro*/

const carro = {
    modelo: 'A4',
    valor: 89000,
    proprietario: {  // O valor da chave é outro objeto, que tambem tem seu objeto
        nome: 'Raul',
        idade: 56,
        endereco: {
            logradouro: 'Rua ABC',
            numero: 123
        }
    },
    condutores: [{  // O valor da chave é um Array dentro do objeto, é possivel, como valor
        nome: 'Junior',
        idade: 19
    }, {
        nome: 'Ana',
        idade: 42

    }],
    calcularValorSeguro: function(){   //É possivel ter funções dentro de objetos
            //... bloco da função
    }  

}

console.log(carro)

//Acessando atributo pela 'notaçao ponto'
carro.proprietario.endereco.numero = 999
console.log(carro)

//É possivel acessar atributo através de colchetes, mas é mais trabalhoso.
carro['proprietario']['endereco']['logradouro'] = 'Avenida Juca Batista' 
console.log(carro)

/*É possivel deletar o objeto dentro do valor de um atributo excluido o proprio atributo, exemplo deletar o atributo condutores 
excluira os nomes e idades do objeto condutores*/
delete carro.condutores
delete carro.proprietario.endereco
delete carro.calcularValorSeguro //É possivel excluir funcoes
console.log(carro)

/*Cuidado ao acessar elementos de um objeto de forma encadeada, elementos que foram excluidos. Exemplo:*/

console.log(carro.condutores) // cosole.log(carro.condutores) gera undefined, mas porque carro existe. 
//console.log(carro.condutores.length) // Gera Erro no código Tentar acessar algo de algo que esta indefinido, exemplo lenght de condutores que esta undefined
//Precisa ter cuidado e verificar se a variavel esta definida ou nao para nao dar erro no codigo.


//TESTE
console.log('TESTE')
produto.nome = "mesa"  //Mudança no nome
console.log(produto.nome)

produto.valor = function valor(){}
console.log(produto)







/*
Professor disse que com o operador new chamando uma função era possivel criar uma objeto, a tentativa abaixo deveria funcionar

const casa = new Tentativa

casa.nome = "teste"

console.log(casa) 

*/