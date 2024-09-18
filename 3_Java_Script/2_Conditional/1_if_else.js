const numero = 10001;
const division = (numero % 2);
const divisivel = (numero % 5)

let verificationDivision  = division === 0; /* O igual === verificar o valor e o tipo de dado */
let verificationDivisivel = divisivel === 0; /* O igual === verificar o valor e o tipo de dado */

console.log("O número que você forneceu é:");
console.log(numero);

if (verificationDivision){
    console.log('O número que você forneceu é: ')
    console.log("Par")
}
else{
    console.log("Impar")
}
if (verificationDivisivel) {
    console.log("O número é divisivel por 5");
} else{
    console.log("Não é divisivel por 5");
}