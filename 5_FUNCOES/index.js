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
console.log("----------6----------");
// 6 - Parametros opcionais
function modernGreeting(name, greet) {
    if (greet) {
        return `Ola ${greet} ${name}, tudo bem ?`;
    }
    return `Ola ${name}, tudo bem ?`;
}
console.log(modernGreeting("Eduardo"));
console.log(modernGreeting("Lucca", "Dr."));
console.log("----------7----------");
// 7 - parametro default
function somaDefault(n, m = 10) {
    return n + m;
}
console.log(somaDefault(10));
console.log(somaDefault(15, 12)); // o m esta com defaul 10, mas se colocar outro ele troca
console.log("----------8----------");
// 8 - tipo unknown
function doSomething(x) {
    if (Array.isArray(x)) {
        console.log(x[0]);
    }
    else if (typeof x === "number") {
        console.log("X e um numero");
    }
}
doSomething([1, 2, 3]);
doSomething(5);
console.log("----------9----------");
// 9 - tipo Never
function showErrorMessage(msg) {
    throw new Error(msg);
}
//showErrorMessage("Algum error")
console.log("----------10----------");
// 10 - Rest operator
function sumAll(...n) {
    return n.reduce((number, sum) => sum + number);
}
console.log(sumAll(1, 2, 3, 4, 5));
console.log(sumAll(5, 324, 65645));
//console.log(sumAll("teste"))    teste nao 'e numerico
console.log("----------11----------");
// 11 - Destructuring como paramentro
function showProductDetails({ name, price }) {
    return `O nome do produto 'e ${name} e ele custa R$${price}`;
}
const shirt = { name: "Camisa", price: 49.98 };
console.log(showProductDetails(shirt));
