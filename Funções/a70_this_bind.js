const pessoa = { //variavel pessoa que recebe um objeto
    saudacao: 'Bom dia',
    falar () { //Funçao em obj recurso novo ECMA2015
        console.log(this.saudacao) //Acessando o objeto do dono da função através do this, o objeto de pessoa, a saudação de pessoa.
        //estamos acessando um atributo de um obj com this, isso é OO
    }
}


pessoa.falar ()
console.log(pessoa.saudacao) //Meu teste

const falar = pessoa.falar //armazenando a função em uma variavel
falar() // conflito entre paradigmas: funcional e OO
        //O resultado sera undefined porque nesse contexto this não aponta mais para o objeto pessoa, e não tem o atributo saudaçao.

// Para resolver usar a função bind

const falarDePessoa = pessoa.falar.bind(pessoa) //bind, passa o bjeto no qual sera resolvido o this. o this dentro da funçao sera a constante pessoa. Passando 'pessoa' como argumento na função bind, o this sempre sera resolvido para pessoa.
falarDePessoa() //Agora é possivel perceber que this voltou  a apotar para o objeto certo.

/* Bind é o metodo responsavel por amarrar um determinado obj para ele ser o dono da execução do metodo, quando o metodo for chamado.*/
//No exemplo, sempre que a função falarDepessoa() for chamada, e for usado e for referenciado o this sera o obj que foi passado para a função bind. A função pessoa.falar nao foi modificada e sim o resultado do uso de bind que foi jogado para a const falarDePessoa. 