//Arreglos en JavaScript

const array = ['table', 'chair','notebook','keyboard'];

array.push('lcd screen');

console.log(array);

array.forEach(array => {
    console.log(array)
});

for(const a of array){
    console.log(a)
}

for (let index = 0; index < array.length; index++) {
    const element = array[index];
    console.log(element);
}