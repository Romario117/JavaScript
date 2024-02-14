function sayHello(){
    console.log("Hola Mundo");
}

function sayHelloV(){
    const greeting = 'Hola Mundo';
    return greeting;
}

function sayHelloByParams(name){
    return name;
}

sayHello();

console.log(sayHelloV());

console.log(sayHelloByParams('Hoola desde la funcion'));