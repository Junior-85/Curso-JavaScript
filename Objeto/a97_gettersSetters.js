//Para proyrger atributos fazer atributos privados e acessar a partir dos metodos getters e setters
//Há criticas no modelo com muitos get e set em Java

const sequencia = {
    _valor: 1,  // Por convensão, o programador quer dizer que essa varíavel deve ser acessada somente internamente, dentro do objeto sequencia. Colocar o - (underline) antes de uma variável não quer dizer que ela é privada,
    get valor() { //Get e set são funcoes que dentro das funcoes os valores sao acessados, vantagem pode ser feita validacao no valor ou variavel
        return this._valor++
    },
    set valor(valor) { //JS não aceita sobrecarga da de metodos, varios metodos com mesmo nome, somente nesse caso que é possivel, de uso de get e set
        if (valor > this._valor) { //Exemplo de validação, se valor for maior que o atual, ou maior que sequencia, é possivel, se não não permite, sequencia sempre positiva.
            this._valor = valor
        }
    } 
}

console.log(sequencia)

// Para acessar a partir do metodo get e set

console.log(sequencia.valor, sequencia.valor) // Acessa diretamente o atributo e o JS entende que se esta chamando o metodo get e set, aparentemente parece chamar o atributo mas internamente esta chamando o metodo get e set
sequencia.valor = 1000  //O acesso ao atributo não é feito com o _(underline), professor não explicou
console.log(sequencia)
console.log(sequencia.valor, sequencia.valor)

//Exemplo de tentativa de colocar valor menor do que a variavel tem atualmente ou no modelo
sequencia.valor = 900 
console.log(sequencia.valor, sequencia.valor) //A verificacao não permite, continua fazendo contagem crescente


