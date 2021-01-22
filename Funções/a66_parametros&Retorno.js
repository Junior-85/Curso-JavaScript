// Exemplo de funcao com retorno e sem retorno, 1° não retornar mas sim exibe um valor e 2° retorna a constante 'area'
// Exemplo apenas para teste, não é pratico

function area(largura, altura) {
    const area = largura * altura 
    if (area > 20) {
        //Não retorna valor, apenas joga mensagem no console
        console.log(`Valor acimado permitido: ${area}m2`)
    } else {
        //retornou o valor de area
        return console.log(`A area é de: ${area}m2`)
    }
}

console.log('---')

area (5, 10)

console.log('---')

area (5, 3)
area (2)//Sera NaN porque foi apenas um parametro (2 * undefined = NaN)
area()// Sem senhum parametro tambem retorna NaN
area(2, 3, 4, 5, 6)// Com mais parametros do que suportado, usa os dois primeiros para a função 
