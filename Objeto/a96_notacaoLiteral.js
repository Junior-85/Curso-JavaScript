// Nas modificalções do do ECMA 2015, a notação literal de objeto foi melhorada ou aprimorada

const a = 1
const b = 2
const c = 3

//Na versão anterior era necessario a duplicidade abaixo para criar um objetoe
// Ex: criar uma variavel no obj que tem o valor da constante 
const obj1 = {a:a, b:b, c:c}
// No ECMA novo não é mais preciso
const obj2 = {a, b, c} //Automaticamento o atributo assuira o nome da constante e o valor do atriburo será o valor da constante

//Se quiser fazer modificação do atributo, deverá utilizar a notação anterior
const obj3 = {numero1: a, numero2: b, numero3: c}

console.log(obj1)
console.log(obj2)
console.log(obj3)

//Outra melhoria quando se quer criar dinamicamente um atributo em um obj usando string
//Antes da melhoria
const nomeAttr = 'nota' //É muito facil criar atributo através do nome de uma variável
const valorAttr = 7.87

const obj4 = {}
obj4[nomeAttr] = valorAttr
console.log(obj4)
console.log(obj4.nota)

//A melhoria: 

const obj5 = {[nomeAttr]: [valorAttr]}
console.log(obj5)
console.log(obj5.nota)

//Outra melhoria: Como definir funções dentro de objetos
//Forma antiga, seguia padrão chave valor: 

const obj6 = {
    funcao1: function () {
     //...Corpo da função   
    }
}

//Após a melhora: 

const obj7 = {
    funcao2() {
        //corpo da funcao
    }
}

console.log(obj6, obj7)
