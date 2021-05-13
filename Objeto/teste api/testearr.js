const testArr = {testearr: [['a', 'b'], ['c', 'd'], ['e','f']]}
const testandoArray = testArr.testearr
console.log(testandoArray)

testandoArray.forEach(teste => {
    console.log(teste)
    console.log(teste[0])
})

console.log('')
console.log('TESTE DE DESESTRUTURAÇÂO')
testandoArray.forEach(([indiceum, indicedois])=>{
    console.log(indiceum, indicedois)
}
)