//Operador Spread ...

const invoice = {
    id:1,
    depto:2
};

const invoice2 = invoice;
invoice2.id = 2;

console.log('Invoice 2' , invoice);

const invoice3 = {...invoice}
invoice3.id = 3;

console.log('Invoice Original', invoice)
console.log('Invoice 3', invoice3)