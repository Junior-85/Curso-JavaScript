const escola = "cod3r"

console.log(escola.charAt(4)) //Caractere na posição de índice 4
console.log(escola.charAt(5))
console.log(escola.charCodeAt(3))//Codigo do caractere na tabela ASC
console.log(escola.indexOf('d'))//Saber qual o indice do caractere escolhido, se não existir sera exibidio -1

console.log(escola.substring(1))//Caracteres a partir do indice informado
console.log(escola.substring(1, 3))//Caracteres a partir do indice inforamado (primeiro) até o indice limite (segundo)

console.log('Escola ' .concat(escola) .concat (" !")) //Concatenar strings
console.log('Escola ' +escola +" !") //Concatenar strings

console.log(escola.replace(3,"e")) //Substituir. Dentro da função o primeiro parãmetro é substituido pelo segundo
//Replace tambem pode ser usado para pegar todos emails num texto, pesquisar.

//Exemplo de regex para substituir com expressão regular
console.log(escola.replace(/\d/, 'e')) //Para substituir todos os digitos(numeros??) pela letra 'e'
console.log(escola.replace(/\w/g, 'e')) //Para substituir todas as letras e digitos pela letra 'e'// 'g' quer dizer que é uma flag global
//
//Gerar um Array com uma string que os elementos estão separados por vírgula. Dentro do parentese da função indicar qual o separador dos elementos string
console.log('Ana, João, Cris'.split(',')) //Para 'quebrar' uma string em um array

