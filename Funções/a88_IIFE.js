// IIFE -> Immeduately Invoked Function Expression 
// Função autoinvocada, para quando se esta usando o browser, para fugir do escopo global e evitar que as variáveis possam ser manuseadas.
//Declarar entre parenteses uma funcao anonima e para que seja chamada colocar entre parentese depois

(function() {
    console.log('Será executado na hora!')
    console.log('Foge do escopo mais abrangente!')
})()