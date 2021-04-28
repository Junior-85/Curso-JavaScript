var pessoa = {
    primeiroNome: 'Gilmar',
    segundoNome: 'Vaz',
    nomeCompleto: function(){
        console.log(this.primeiroNome + ' ' + this.segundoNome)
    }
}

pessoa.nomeCompleto()
console.log(this.pessoa)


let data = function() {
    getFullYear()
}


console.log(data)