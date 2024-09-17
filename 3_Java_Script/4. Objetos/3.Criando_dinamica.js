/*Para alterar valores de um objeto, podemos fazer isso de forma dinâmica.*/ 

const Pessoa = {
    nome : "Tovany",
    idade : 22,

    /* Para adicionar um método, você pode utilizar o método this(reconhece o contexto que está. No caso é o contexto é o objeto pessoa). */

    descrever_pessoa: function(){
        console.log(`Meu nome é ${this.nome} e minha idade é: ${this.idade}`);
    }

};

(function main(){

    /*Para alterar, basta usar o nome do objeto e o nome da chave, só que na forma de string entre colchetes*/

    console.log(Pessoa['nome'])
    console.log(Pessoa['idade'])

    Pessoa.altura = 1.69;
    console.log(Pessoa['altura'])
    Pessoa.descrever_pessoa();

    /*Para alterar um valor, pode-se usar a mesma forma*/
    Pessoa['nome'] = "Gustavo";

    /*Utilizando outro método*/

    Pessoa.idade = 18;
    console.log(`O novo nome da pessoa é ${Pessoa.nome}`);
    Pessoa.descrever_pessoa();
    
}())