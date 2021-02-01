const fabricantes = ["Mercedez", "Audi", "BMW"]

function imprimir(nome, indice) {
    console.log(`${indice + 1}, ${nome}`) //Exibe primeiro o index e depois o valor
}

fabricantes.forEach(imprimir)//Para cada elemento do array o forEach chamara a função imprimir
fabricantes.forEach(function (a, b) {
    console.log(a, b)
})

/*Função arrow*/
fabricantes.forEach(fabricante => console.log(fabricante) )

//O forEach executa o callback 

//Nada mais é do que passar uma função e essa função ser chamda quando um envento acontecer.

//Nos exemplos acima o evento foi um looping que sempre que encontrava um elemento novo, disparava a função. Cada um dos elementos percorridos do array chama o callback

//Outro exemplo são chamadas AJAX. 