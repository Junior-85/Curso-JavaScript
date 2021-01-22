//Provaveis conceitos falados
//Função em JS é First-Class Object (Citzens)
//Higher-order function

/*Formas de criação de Função*/
// Criação de Forma Literal

function fun1(){

}

// Armazenar em uma variável 
 
const fun2 = function () {

}

// Armazenar em um array 

const array = [function (a, b) { return a + b}, fun1, fun2]
console.log(array[0](2,3))//chamada do array, indicação do indice onde esta a função que sera usada e parametros.

// Armazenar em um atributo de objeto
const obj = {}
obj.falar = function () {return 'Opa'}
console.log(obj.falar())

// Passar funcao como parametro 
function run (fun) {
    fun ()
}
run (function () {console.log('Executando...')})

//Uma função pode retornar ou conter uma função 
function soma(a, b) {
    return function (c) {
        console.log(a + b + c)
    }
}

soma(5, 5)(5)//passar parametros para as duas funções OU ->
const cincoMais = soma(5, 5)
cincoMais(4)