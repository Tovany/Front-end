const valor_produto = 50;

let forma_pagamento = "outra";

if (forma_pagamento === "Debito"){
    const desconto = valor_produto - (valor_produto * 0.10);
    console.log("O valor do produto fica:")
    console.log(desconto)


} else if( (forma_pagamento === "Dinheiro") || (forma_pagamento === "Pix")){
    const desconto = valor_produto - (valor_produto * 0.15);
    console.log("O valor do produto fica:")
    console.log(desconto)


} else if (forma_pagamento === "Credito2x"){
    const desconto = valor_produto;
    console.log("O valor do produto fica sem juros:")
    console.log(desconto)


} else{
    const desconto = valor_produto + (valor_produto * 0.10);
    console.log("O valor do produto fica com juros:")
    console.log(desconto)
}