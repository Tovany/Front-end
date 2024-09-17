const preco_combustivel = 6;

let combustivel_por_litro = 15.5;

let distancia   = 100;

gasto_medio_combustivel = distancia/ combustivel_por_litro;
gasto_money = gasto_medio_combustivel * preco_combustivel;

console.log('O valor médio de gasolina gasto em uma viagem de 100 km é:');
console.log(gasto_medio_combustivel.toFixed(2));
console.log('O gasto em dinheiro é:');
console.log(gasto_money.toFixed(2));