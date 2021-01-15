{
    {
        {
            var sera = 'Dentro do bloco!'
        }
    }
}
console.log(sera)

function teste() {
    var local = 123
    console.log(local)
}

teste()

sera = 'Fora do bloco' //Como a variavel é global (var), o seu valor pode ser manipulado, isso não é uma boa prática.
console.log(sera)
