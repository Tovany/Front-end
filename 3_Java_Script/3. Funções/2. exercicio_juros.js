function Calcular_juros(forma_pagamento,valor_produto){

  /*
    Dinheiro_pix = 1;
    debito = 2;
    credito2x = 3;    
   */  
    if (forma_pagamento == 1) {

    const desconto = valor_produto - (valor_produto * (0.15));
    console.log("O valor do produto fica:")
    console.log(desconto)

    } else if (forma_pagamento == 2){
        const desconto = valor_produto - (valor_produto * 0.10);
        console.log("O valor do produto fica:")
        console.log(desconto)
    
    
    } else if (forma_pagamento == 3){
        const desconto = valor_produto;
        console.log("O valor do produto fica sem juros:")
        console.log(desconto)
    
    
    } else{
        const desconto = valor_produto + (valor_produto * 0.10 );
        console.log("O valor do produto fica com juros:")
        console.log(desconto)
    }
    
}


(function main(){
    const valor = 50;
    Calcular_juros(4, valor);

}())