function EscrevaNome(nome){
    console.log('Meu nome é: '+ nome)
}

function VerficarIdade(idade){
  
    if (idade < 18){
        console.log("Você não é maior de idade");
    }
    else{
        console.log("Você é maior de idade")
    }
}

(function main(){
    const Nome  = "João";
    const idade = 17; 

    EscrevaNome(Nome)
    VerficarIdade(idade)
    
})();