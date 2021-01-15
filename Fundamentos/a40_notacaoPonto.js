console.log(Math.ceil(6.1))//Para fazer um arredondamento para cima 

const obj1 = {}
obj1.nome = 'Bola' //Criando dinamicamente um atributo dentro de um objeto
                   //Mesmo que o atributo não exista, atribuindo um nome ele é criado 
                   //obj1['nome'] = 'Bola 2' // linha equivalente a que usa notação ponto. sobrescreve o atributo existente. Não é tão recomendado.

console.log(obj1)                   
console.log(obj1.nome) //Para acessar exatamente o atributo do objeto

// Usando this. o atributo ficará visivel para quem criar,intanciar um objeto do tipo Obj, vai ficar publico. 
// Atravez do this. pode criar um atributo publico e tornar uma funcao publica 
//Com this. é possivel tanto criar atributos que serao expostos fora da funcao, quanto criar funcoes. 
// É possivel criar tanto atributos e funções que serão expostas fora da função quando ele for instanciado.

function Obj(nome) {
    this.nome = nome 
}

const obj2 = new Obj('Cadeira')
const obj3 = new Obj('Mesa')

//Acessando o objeto
console.log(obj2)
console.log(obj3)

//Acessando diretamente o atributo do objeto com '.'
console.log(obj2.nome)
console.log(obj3.nome)

