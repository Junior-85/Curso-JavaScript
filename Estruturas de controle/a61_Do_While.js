function getInteiroAleatorioEntre(min, max) {
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

let opcao = -1 //Mesmo que a condição seja a que fara o codigo parar, por causa do 'do' pelo menos uma vez o bloco será executado

do {
    opcao = getInteiroAleatorioEntre(-1, 5)
    console.log(`A opção escolhida foi ${opcao}.`)
} while (opcao != -1) //Porque o teste é feito após a execução.

console.log('Fim dos aleatórios')