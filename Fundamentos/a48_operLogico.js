
function compras(trabalho1, trabalho2) {
    const comprarSorvete = trabalho1 || trabalho2 // De acordo com a tabela verdade se o primeiro for V ele nem considera o segundo
    const comprarTv50 = trabalho1 && trabalho2 // De acordo com a tabela verdade se o primeiro for F ele nem considera o segundo porque os precisam ser V.
    //const comprarTv32 = !!(trabalho1 ^ trabalho2) // bitwise xor

    const comprarTv32 = trabalho1 != trabalho2 //Ouexclusivo pode ser simulado com a diferenca
    const manterSaudavel = !comprarSorvete // Negação do tomar sorvete, operador unário

    //*JS suporta apenas um retorno, para retornar mais de um joga-se tudo dentro de UM unico objeto.
    //**Criação do objeto. Quando o atributo e o valor são o mesmo nome pode-se colocar apenas um, ou quando o nome do atributo é o mesmo da constante ele joga no atributo(que tem o mesmo nome da constante) o valor resultado da constante, não precisa criar o nome da chave e o nome do valor para apontar para um constante. Recurso novo do ES6*/
    return { comprarSorvete, comprarTv50, comprarTv32, manterSaudavel} 
    
}

console.log(compras(true, true))
console.log(compras(true, false))
console.log(compras(false, true))
console.log(compras(false, false))



/**
 TABELA VERDADE
 E ou AND simbolo &&
 v e v = v
 v e f = f
 f e ? = f

OU ou OR simbolo ||
v ou ? = V
f ou v = V
f ou f = f

OU exclusivo
v xor v = f
v xor f = v
f xor v = v
f xor f = f

NEGAÇÂO LOGICA
!v = f
!f = v

 */
