function sumar (a,b){
    return a+ b;
}
const sumar2 = (a,b) =>{
    return a+b;
}

console.log(sumar(10,20));

console.log(sumar2(10,20));

function saludar (nombre){
    return `Hola ${nombre}`
}

const saludar2 = nombre => `Hola ${nombre}`

console.log(saludar('Fernando'));
console.log(saludar2('Fer'));