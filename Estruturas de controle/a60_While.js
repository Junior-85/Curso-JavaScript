function getInteiroAleatorioEntre(min, max) {
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

let opcao = 0

while (opcao != -1) {
    opcao = getInteiroAleatorioEntre(-1, 5)
    console.log(`A opção escolhida foi ${opcao}.`)
}

console.log('Fim dos aleatórios')
