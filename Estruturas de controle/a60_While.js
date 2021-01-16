function getInteiroAleatorioEntre(min, max) {
    const valor = Math.ramdom() * (max - min) + min
    return Math.floor(valor)
}

let opcao = -1

while (opcao != -1) {
    opcao = getInteiroAleatorioEntre(-1, 10)
    console.log(`A opção escolhida foi ${opcao}.`)
}

console.log('Fim dos aleatórios')
