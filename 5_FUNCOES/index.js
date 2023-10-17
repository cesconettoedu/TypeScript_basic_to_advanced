"use strict";
console.log("----------1----------");
// 1 - void
//funcao que nao tem clausula de retorno
function withoutReturn() {
    console.log("esta funcao nao tem retorno");
}
withoutReturn();
console.log("----------2----------");
// 2 - Callback como argumento
function greeting(name) {
    return `Ola ${name}`;
}
function preGreeting(f, userName) {
    console.log("preparando a funcao");
    const greet = f(userName);
    console.log(greet);
}
// esta esperando uma FUNCAO e uma STRING
preGreeting(greeting, "Eduardo");
preGreeting(greeting, "Lucca");
console.log("----------3----------");
// 3 - Generic Functions
// T significa que 'e qualquer um , generico de uma lista
function firstElement(arr) {
    return arr[0];
}
console.log(firstElement([1, 2, 3]));
console.log(firstElement(["a", "b", "c"]));
//console.log(firstElement("teste"))      nao pode porque tem q ser um tipo de array, uma lista
// outro exemplo, juntar obj sem saber o q vai vir neles
function mergeObjects(obj1, obj2) {
    return {
        ...obj1,
        ...obj2
    };
}
const newObject = mergeObjects({ name: "Eduardo" }, { age: 43, job: "Programmer" });
console.log(newObject);
console.log("----------4----------");
// 4 - Constraints nas Generic Functions    -  restringir um pouco os tipos da generic func
function biggestNumber(a, b) {
    let biggest;
    if (+a > +b) {
        biggest = a;
    }
    else {
        biggest = b;
    }
    return biggest;
}
console.log(biggestNumber(5, 2));
console.log(biggestNumber("12", "5"));
//console.log(biggestNumber("12", 5));  os dois tipos tem que ser igual
console.log("----------5----------");
// 5 - especificar tipos  de argumento
function mergeArrays(arr1, arr2) {
    return arr1.concat(arr2);
}
console.log(mergeArrays([1, 2, 3], [5, 6]));
//console.log(mergeArrays([1, 2, 3], ["teste", "testando"]))    para unir tem q tipar igual abaixo
console.log(mergeArrays([1, 2, 3], ["teste", "testando"]));
