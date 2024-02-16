//Arreglos con Operador Spread en JavaScript

let array = ['table', 'chair','notebook','keyboard'];

array.push('lcd screen');

const fruits = ['apple', 'watermelon', 'pineapple'];

const market = [...fruits,...array];

market.push('can');

array = array.concat('tv');

console.log(array);

console.log(market);