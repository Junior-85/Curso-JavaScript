let testeSaida = document.querySelector('p')
const nameVehicles = []
console.log(nameVehicles)

//nameVehicles.forEach(a => {
  //  $('#saida').append(`<p>${a.name}</p>`)
//})



function pegarApi(url) {
    fetch(url)
        .then(function (response) {
            return response.json()
        })
        .then(function (resposta) {
            console.log(resposta)
            const teste = resposta.results
            console.log(teste)


            teste.forEach(e => {
                nameVehicles.push(e.name)
                console.log(e.name)
            })
            console.log(nameVehicles)

            console.log('teste de saída')
            testeSaida.innerHTML = teste[0, 1, 2]

        })
}

pegarApi('https://swapi.dev/api/vehicles')


/*fetch('https://swapi.dev/api/people')
.then(function(response){
    return response.json()
})
.then(function(resposta){
   let teste = resposta.results
   teste.forEch((item, index)=>{
        console.log(item, index)
    })
})*/

/* TESTES QUE FUNCIONAM

console.log(typeof(teste))
        console.log(teste)
        console.log(Object.keys(teste))
        let testeObj = Object.keys(teste)
        console.log(testeObj)
        console.log(typeof(testeObj))
        const valoresObj1 = teste[0].name
        console.log(valoresObj1)
        const valoresObj = Object.values(teste[0].name)
        console.log(valoresObj)
        Object.entries(teste).forEach(([chave, valor])=>{
            console.log(`${chave}, ${valor}`)
        })

*/

/* teste for each e for (eu fiz o for e melhorei com o for each)
teste.forEach(e => {
    nameVehicles.push(e.name)
})

  for (let i = 0; i < 10; i++) {
            console.log(teste[i].name)
            nameVehicles.push(teste[i].name)
        }


*/