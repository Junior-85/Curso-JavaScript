//Exemplo de Callback no Browser
//Não será executado no Node, somente para ser copiado para o Browser.

document.getElementsByTagName('body')[0].onclick = function (e) {
    console.log('O evento ocorreu!')
}

//No console do browser, apos registrar a callback dando executado o codigo, ela so serpa chamada após o evento, que sera clicar na tela. Essa sere o evento que disparará a função que exibira a mensagem "O evento ocorreu!"