//funciones anonimas
const sayHello = (nameState) => {
    return nameState;
}

const add = (a,b) => a + b;

console.log(sayHello('Hola'))

const r = add(1,4);
console.log(typeof(r), r)