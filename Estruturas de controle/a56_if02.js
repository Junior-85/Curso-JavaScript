function teste1(num){
    if(num > 7)
    console.log(num)
    console.log('Final')
}

teste1(8)
teste1(6)

//* ADVERTENCIA: Não usar ; nas ESTRUTURAS DE CONTROLE
function teste2 (num){
    if(num > 7); {  //Nesse caso o ; delimitou o bloco if, ele é o fim ou a execução do if
        console.log(num)//por causa do ;, essa sentença de código ficou fora do bloco if e sempre sera executada pela funcao indepentende do if
    }
}
teste2(6)
teste2(8)