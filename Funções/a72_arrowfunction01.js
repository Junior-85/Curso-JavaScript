//Declaração de função anonima

let dobro = function (a) {
    return 2 * a
}

console.log(dobro(2))

// Declaração de função arrow
/* Função Arrow sempre é uma função anônima, para chamar a função arrow é preciso armazenar ela em uma variavel ou constante */
dobro = (a) => {
    return 2 * a
}

console.log(dobro(3))

//Declaração reduzida se houver apenas um parametro, funções que fazem apenas um trabalho, sem as chaves o retorno é implicito.
// Segundo o professor São muito usadas como funções especialistas, realizam apenas um trabalho. Funções especificas e reutilizaveis, por isso são mais usadas.

dobro = a => 2 * a 

console.log(dobro(2))
console.log(dobro(Math.PI))

//Exemplo 4 

let ola = function() {
    return 'Ola'
}

ola = () => 'Ola'// Função sem parâmetros
ola = _ => 'Ola' // Função arrow usando undeline é com um parâmtro. na hora da chamada o parâmetro pode ser ignorado

console.log()
console.log()
