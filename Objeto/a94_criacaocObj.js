// usando notação literal

const obj1 = {}
console.log(obj1)


//Object em JS
console.log(typeof Object, new Object) // 'new Object' é uma funão construtora
const obj2 = new Object
console.log(obj2)

// Funções Construtores próprias

/*Quando se trabalha com conceito de encapsulamento em JS é preciso  Entender os níveis visibilidade,
 Em JS há o nível global no Browser, quando no NODE há o global, vível de módulo (próprio arquivo) e o 
  nível da Função e usando as palavras reservadas let e const ha o nível de bloco*/

function Produto (nome, preco, desc) { // Apenas o atributo nome será publico e poderá ser alterado
    this.nome = nome // uso do this para tornar a variável publica, não encapsulada, quando houver a instancia de produto o atributo e a funcao ficarao visiveis
    this.getPrecoComDesconto = () => {  //Método 
        return preco * (1 - desc)
    }
}

const p1 = new Produto('Mesa', 250, 0.15) // Criada uma nova instancia de produto colocando nome Mesa, passando valor 250 e desconto usando o percentual de desconto 0.15(descobrir lógica de percentual)
const p2 = new Produto('Cadeira', 79, 0.20) 
console.log(p1.getPrecoComDesconto())
console.log(p2.getPrecoComDesconto())

/* Função Factory (é um padrão de projeto, simplesmente uma função que fabrica algo, nesse caso um objeto), 
   pode tanto usar uma função contrurora interna quanto notação literal*/
//Usando factory com criação de objetos com notação literal

function criarFuncionario (nome, salarioBase, faltas) {
    return { //Abrindo objeto literal
        nome,
        salarioBase,
        faltas,
        getSalario() {
            return (salarioBase / 30) * (30 - faltas)
        }
    }
}


//Teste exercíco
console.log(criarFuncionario('Gilmar', 2000, 3))
const f1 = criarFuncionario('Gilmar', 2000, 3)
const f2 = criarFuncionario('Bárbara', 3000, 2)
console.log(f1.getSalario(), f2.getSalario())

function criarTesteObj (nome, tipo, tamanho) {
    return {
        nome, 
        tipo,
        tamanho
    }
}

const lapis = criarTesteObj('Lapis', 'Colorido', 3.5)
console.log(lapis)

console.log(criarTesteObj('Lapis', 'Colorido', 3.5))


//Criar objeto através da função de Object chamada 'create, apenas mencionado na aula
const filha = Object.create(null)
filha.nome = 'Ana'
console.log(filha)

//Função famosa que retorna um objeto..
//Exemplo professor

const fromJSON = JSON.parse('{"info": "Sou um JSON"}')//JSON é em formato textual
console.log(fromJSON.info)  //Pode ser acessado como objeto

//Exercicio
const exercJson = JSON.parse('{"info": "Testando criação JSON"}') //Converte o texto em um objeto
console.log(exercJson)
console.log(exercJson.info)

//Explicação do professor do uso do JSON 
/* Quando há um 'webservice' que retorna um JSON e ele precisa ser interpretado no browser você transforma o JSON para objeto para
   manipular como objeto e não texto. Quando você submete um formulário e você manda tudo no formulário como se fosse um JSON, 
   você converte os dados em objeto para manipular como objeto.*/



