function CalcularImc(peso, altura){
    const imc = ((peso / Math.pow(altura,2))).toFixed(2);
    console.log("Seu peso é: " + peso)
    console.log("Seu imc é: " + imc)
    return imc;
}
function ClassImc(imc){
    
    if (imc < 18.5){
        return("Abaixo do peso");
    } else if (imc >= 18.5 && imc < 25){
        return("Peso normal");
    } else if (imc >= 25 && imc < 30){
        return("Acima do peso");
    } else if (imc >= 30 && imc < 40){
        return("Obeso");
    } else{
        return("Obsidade grave");
    }

}

(function main(){
    const peso = 75;
    const altura = 1.75;

    const imc = CalcularImc(peso, altura);
    const Classification = ClassImc(imc);
    console.log(Classification)
})();
/* Ou para criar uma função anonima */


(function (){
    const peso = 75;
    const altura = 1.75;

    const imc = CalcularImc(peso, altura);
    const Classification = ClassImc(imc);
    console.log(Classification)
})();