var desc = window.document.querySelector('.desc')
var input = window.document.querySelector('#input_text')
var saida = window.document.querySelector('select#flista')
var testeSaida = window.document.querySelector('section#teste_saida')

function testar() {
    fetch('https://api.openweathermap.org/data/2.5/weather?q=' + input.value + '&units=metric&appid=9a4afdb555b5bbbe28fbdd8df81ecccc&lang=pt')
        .then(function (respostaDaApi) {
            return respostaDaApi.json()
        })
        .then(function (dadoDaApi) {
            console.log(dadoDaApi)
            var personagem = dadoDaApi['wind']['speed']

            desc.innerHTML = personagem

        })
}

function limpar() {
    desc.innerHTML = ''
}

function criarElemento() {
    let item = document.createElement('option')
    item.text = 'valor'
    saida.appendChild(item)
}

function criarElemento2() {
    let itens = document.createElement('p')
    itens.text = 'valor2Essseehjmgbmbfgmbgklmb'
    testeSaida.appendChild(itens)
}