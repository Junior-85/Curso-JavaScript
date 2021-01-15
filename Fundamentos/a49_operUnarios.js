let num1 = 1
let num2 = 2

num1++ //posfix, acrescenta uma unidade
console.log(num1)

//* A forma prefix tem precedencia maior do que a posfix (sera realizada primeiro)
--num1 //prefix, decresce uma unidade
console.log(num1)

console.log(++num1 === num2--) 
// *True PORQUE os valores São iguais, quando a comparação é realizada num1 esta valendo 2 (porque sofreu incremento) e num2 vale 2 (ainda não sofreu o decremento), na sequencia, apos a comparação num2 sofrerá decremento e passara a valer 1.

console.log(++num1 === num2--)
//* FALSE - Poque agora num1 vale 2 e num2 vale 1 quando a comparação é realizada.

/*RECOMENDAÇÂO DO PROFESSOR
DEIXE O CODIGO MAIS SIMPLES POSSIVEL, codigo facil de ser lido.
Exemplo, não colocar incremento dentro de uma comparação -> (++num1 === num--)
Por isso no inicio é normal fazer refatoração(simplificar um codigo já existente) para entender o codigo
 */


