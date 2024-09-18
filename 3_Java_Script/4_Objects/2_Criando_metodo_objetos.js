/* Utilizandos os métodos */ 

const Pessoa = {
    nome : "Tovany",
    idade : 22,

    /* Para adicionar um método, você pode utilizar o método this(reconhece o contexto que está. No caso é o contexto é o objeto pessoa). */

    descrever_pessoa: function(){
        console.log(`Meu nome é ${this.nome} e minha idade é: ${this.idade}`);
    }

};

(function main(){
    console.log(Pessoa.nome)
    console.log(Pessoa.idade)
    
    
    /*Para editar um objeto,seja incrementar ou excluir, basta usar os métodos*/
    Pessoa.altura = 1.69;
    console.log(`A altura de ${Pessoa.nome} é de ${Pessoa.altura}`)
    
    /*Utilizando o método */
    Pessoa.descrever_pessoa();
    
    delete Pessoa.altura;
    console.log(Pessoa)

}())