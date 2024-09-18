/* Um objeto é uma coleção de dados organizados em chave e valor.
   Para fazer, basta usar um cochetes.
*/ 

const Pessoa = {
    nome : "Tovany",
    idade : 22
};

(function main(){
    console.log(Pessoa.nome)
    console.log(Pessoa.idade)
    console.log(Pessoa)
    
    /*Para editar um objeto,seja incrementar ou excluir, basta usar os métodos*/
    Pessoa.altura = 1.69;
    console.log(Pessoa)

    delete Pessoa.altura;
    console.log(Pessoa);
}())