let Tipo_combustivel = "Gasolina";

let combustivel_por_litro = 10;

const EtanolValue = 5.79;
const GasolinaValue = 6.66;

let distancia   = 100;
const gasto_medio_combustivel = distancia/ combustivel_por_litro; /* valor gasto do carro */

if (Tipo_combustivel === "Etanol"){
    const gasto_money = gasto_medio_combustivel * EtanolValue;
    
    console.log('O valor médio de Etanol gasto em uma viagem de 100 km é:')
    console.log(gasto_medio_combustivel.toFixed(2))
    console.log('O gasto em dinheiro é:')
    console.log(gasto_money.toFixed(2))
} else{
    
    const gasto_money = gasto_medio_combustivel * GasolinaValue;
    console.log('O valor médio de gasolina gasto em uma viagem de 100 km é:')
    console.log(gasto_medio_combustivel.toFixed(2))
    console.log('O gasto em dinheiro é:')
    console.log(gasto_money.toFixed(2))
}
