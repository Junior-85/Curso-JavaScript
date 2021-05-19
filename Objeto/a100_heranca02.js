//Cadeia de prototipos (prototype chain)

Object.prototype.attr0 = '0'// NÃO FAZER AFETA ESTRUTURA, APENAS EXEMPLO ATRIBUIR ATRIBUTO NO OBJETO PAI DE TODOS OS OBJETOS.



const avo = {attr1: 'A'}
const pai = {__proto__: avo, attr2: 'B'}
const filho = {__proto__: pai, attr3: 'C'}

console.log(filho.attr1)
console.log(filho.attr4)//Chamada para herança de avo que seria Object.prototype que não tem attr0, que é undefined
console.log(filho.attr0) //


const carro = {
    velAtual: 0,
    velMax: 200,
    acelerarMais(delta) {
        if (this.velAtual + delta <= this.velMax) {
            this.velAtual += delta
        } else {
            this.velAtual = this.velMax
        }
    },
    status() {
        return `${this.velAtual} km/h de ${this.velMax} km/h`
    }
}

const ferrari = {
    modelo: 'F40',
    velMax: 324 //Shadowing, sombrear, quando definir carro como prototipo de carro, esse atributo sombreara do do carro, porque esta no escopo mais proximo ou porque não precisamos desse atributo dp prototipo, já esta nesse obj
}

//Shadowing, tambem esta sombreando status de carro, mas como sera usado status de carro tamber, deve ser usado o 'super'.
//Super para poder referenciar a função ao metodo que é referenciado como prototipo, no caso do objeto carro. Para chamar o metodo do prototipo
const volvo = {
    modelo: 'V40', 
    status () { 
        return `${this.modelo}: ${super.status()}` 
    }
}

//Estabelecer a relacao de prototipo de forma diferente

Object.setPrototypeOf(ferrari, carro)//O objeto é ferrari e o seu prototipo é carro (objeto pai). Ferrari tem carro como seu prototipo
Object.setPrototypeOf(volvo, carro)

console.log(ferrari)//Só sera chamado os atributos e metodos que pertencem ao objeto
console.log(volvo)

volvo.acelerarMais(100) //Para usar o metodo
console.log(volvo.status()) 

ferrari.acelerarMais(300)
console.log(ferrari.status())

volvo.acelerarMais(200) //Para usar o metodo
console.log(volvo.status()) 



