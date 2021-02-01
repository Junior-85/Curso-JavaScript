//Instanciar Funções

function Carro(velocidadeMaxima = 200, delta = 5) {
    //atributo privado
    let velocidadeAtual = 0

    // metodo publico através de this, pode ser acessada fora da função
    //Função responsavel por aumentar velocidade
    this.acelerar = function() {
        if (velocidadeAtual + delta <= velocidadeMaxima) {
            velocidadeAtual += delta
        } else {
            velocidadeAtual = velocidadeMaxima
        }
        // metodo publico
        this.pegaVelocidadeAtual = function () {
            return velocidadeAtual
        }
    }
}

const uno = new Carro //Instanciar objeto a partir da função carro
uno.acelerar()
console.log(uno.pegaVelocidadeAtual())

const ferrari = new Carro(205, 90)
ferrari.acelerar()
ferrari.acelerar()
ferrari.acelerar()
ferrari.acelerar()
console.log(ferrari.pegaVelocidadeAtual())

