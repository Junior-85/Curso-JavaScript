//CÓDIGO NÃO EXECUTÁVEL

//Procedural

//Funções que manipulam dados que estão disponiveis de forma global, vários podem acessar os dados.
//Funções que manipulam dados e retornam valores
processamento(valor1, valor2, valor3)  


//OO
// A ideia dos objetos é trazer o mundo real, constituido de objetos, para o software

objeto = {       //Dentro do objeto você tem...
    valor1,      //atributos e ...   
    valor2,
    valor,
    processamento() {  // procedimentos
        //...
    }
}

objeto.processamento() //Passa a invocar o comportamento através do dado... o objeto funciona como uma capsula que agrupa atributos e comportamentos


/*                 Principios importantes
 -> ABSTRAÇÃO - Pegar objeto do mundo real e trazer para o sistema 
                Exemplo: carro, tem atributos: peso, largura, vel max, vel atual, Metodos: ligar, desligar
                funcionario do detran criar atributos e metodos que fazem sentido para o orgao, dono, placa, condutor
                É preciso entender e mapear o mundo real para trazer para o software fazendo sentido.  
                Sistema para o oficina, o carro terá uma abstração diferente, com atributos e metodos diferentes.
 
 -> ENCAPSULAMENTO - Detalhes de implementação escondidos e mostrar para quem precisa usar o sistema
                Exemplo: Como dirigir, placa, abastecimento... são informações que precisamos saber. Agora, como funciono o motor, valvulas
                suspensão e etc, são informações que ficam escondidas e lidamos apenas com a interface do carro que precisamos, ignicao, volante, painel etc.
                As vezes, carros tem funcionamento diferente internamente, cambio cvt e cambio automatico normal, a implementação mudou, mas 
                a interface, a nossa utilização não muda, não precisa de muita adaptação. 

                Conclusão: quando internamente um objeto tem a implementação interna modificada, não quer dizer que quem usa aquele objeto precisa se 
                adaptar, porque a interface ou o que esta visivel do objeto pra fora do objeto não mudou. 
                Mas devido ao encapsulamento, se alguma modificação interna for realizada, não há necessidade de quem usa o objeto externamente se adaptar. 
                Alto nível de acoplamento no sistema é ruim, quando muitos dependem de outros, quando um objeto tem muitos objetos expostos, e baixo nível 
                de encapsulamento torna a evolução do sistema mais complicada. Quando poucas coisa são expostas na interface  do objeto a chance de um
                acoplamento grande é menor porque os detalhes são interno ao objeto e causam menos impacto.
                Não existem sistemas sem acoplamento, os objetos se comunicam e é preciso se preocuoar mais com a comuncação entre eles do que com a 
                implementação interna do objeto, comunicações de forma excessiva qualquer modificação em um objeto tem impacto no outro e assim por diante.
                A implementação é interna e uma interface de comunicação simples é importante. 
                
-> HERANÇA (Prototype) - Principio baseado na relação É UM... forma de reusar código. Receber atributos e comportamentos de um objeto pai. Em JS heranca de 
                apenas um pai, pode ser feita uma cadeia de prototipo, quando há varias herancas. Compor objetos complexos a parti de objetos mais simples.
                Exemplo: Animal -> Mamifero -> Homem  
                                -> Anfibio  -> Sapo      
                Composição: Ex: Obj carro, composto por obj motor que é composto por outros vários objts menores, carro tbm comporto por obj porta composto
                por outros varios objetos.                
                PRIORIZAR a composição ao invez de heranca (é uma tendencia geral de programação) porque heranca pode trazer muita confusao dentro do codigo.
                A composição é uma relação TEM UM. 

 -> POLIMORFISMO: Multiplas formas.                 
                Exemplo: Celular, conceito generico e abstrato, tem iPhone, Samsumg... a partir do conceito generico criar objetos. É mais para linguagems 
                tipadas. Substituir conceitos genericos criar objetos. A partir de variavel generica... esturturas tipadas. 
                Typescript. Váriavel do tipo carro e é capaz de atribuir ferrari, civic, uno, relacao de heranca entre carro e tipos concretos, uma classe 
                filha pode se referenciar a a uma variavel do tipo pai, Oai do tipo mais generico e ter subtipos mais genericos. 

*/

