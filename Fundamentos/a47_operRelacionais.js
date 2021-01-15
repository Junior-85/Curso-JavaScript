//São operadores Binarios

 console.log('01)', '1' == 1) // Comparando se '1' é igual a 1. Os dois valores são 1, levando em consideração apenas o valor.
 console.log('02)', '1' === 1) //Comparando se '1' é estritamente igua a 1, se ele é igual em tipo e valor. Não são, porque '1' é tipo string e 1 é tipo number. 
 console.log('03)', '3' != 3) //Comparando se '3' é diferente de 3. Falso, são do mesmo valor. (tipos diferentes, mas a comparação é entre valores)
 console.log('04)', '3' !== 3) //Comparando se '3' é estritamente diferente de 3. Verdadeiro, um é tipo string o outro é tipo number.
 console.log('05)', 3 < 2) //Comparação se 3 menor que 2
 console.log('06)', 3 > 2) //Comparação se 3 é maior que 2
 console.log('07)', 3 <= 2) //Se 3 é menor e igual a 2
 console.log('08)', 3 >= 2) //Se 3 é maior ou igual a 2

//* Para não se confundir com as regras, quando for usar a igualdade o ideal é usar o '===' (estritamente igual) quando quiser comparar, porque '==' pode gerar algum tipo de efeito colateral porque compara só valores e ignora o tipo.

 //Testes de igualdade -> Com datas

 const d1 = new Date(0) //Date (0) é o marco zero de JS 01/01/1970
 
 const d2 = new Date(0)
 
 console.log('09)', d1 === d2) //É indiferente usar '==' ou '===' porque esta comparando endereço de memoria. Os dois darão falso.

 console.log('10)', d1 == d2) //É indiferente usar '==' ou '===' porque esta comparando endereço de memoria. Os dois darão falso.

 console.log('11)', d1.getTime() === d2.getTime())//A comparação é verdadeira porque esta comparando dois tipo Number pegando exatamente o mesmo valor, inclusice milisegundos. == ou === são verdadeiros porque d1 e d2 (no get.Time) tem o mesmo tipo e o mesmo valor.

 console.log('12)', undefined == null)
 console.log('13)', undefined === null)

 




