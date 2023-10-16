"use strict";
// 1 - arrays
let numbers = [1, 2, 3];
console.log(numbers);
numbers.push(6);
console.log(numbers);
//numbers = "teste"       error
const nomes = ["Edu", "Lucca"];
console.log(nomes);
// nomes.push(4)  error
// 2 - outra mais antiga sintax array
const nums = [100, 200];
console.log(nums);
nums.push(300);
console.log(nums);
console.log(nums[0]);
// 3 - any
const arr1 = [1, "teste", true, [], { nome: "Edu" }];
console.log(arr1);
arr1.push([1, 2, 3]);
console.log(arr1);
// 4 - parametros tipados
function soma(a, b) {
    console.log(a + b);
}
soma(1, 2);
// soma('a', 'b')  error
// 5 - retorno da funcao
//aqui 'e o que ela retorna, depois do parenteses
function greeting(name) {
    return `ola ${name}`;
}
console.log(greeting('Eduardo'));
//console.log(greeting(1));  error
// 6 - funcoes anonimas
setTimeout(function () {
    const sallary = 1000;
    //console.log(parseFloat(sallary));    error , 'e metodo para string
    console.log((sallary));
}, 2000);
// 7 - tipos de objeto
function passCoordinates(coord) {
    console.log("X coordinates: " + coord.x);
    console.log("X coordinates: " + coord.y);
}
const objCoord = { x: 329, y: 84.2 };
passCoordinates(objCoord);
passCoordinates({ x: 2, y: 3 });
// 8 - props opcionais
function showNumbers(a, b, c) {
    console.log("A: " + a);
    console.log("B: " + b);
    if (c) {
        console.log("C: " + c);
    }
}
showNumbers(1, 2, 3);
showNumbers(1, 2); // tem que colocar a ? na hora de declarar o tipo na funcao, se a props for opcional
// 9 - validando argumento opcional
function advancedGreeting(firstName, lastName) {
    if (lastName !== undefined) {
        return (`ola, ${firstName} ${lastName}, tudo bem?`);
    }
    return `Ola, ${firstName}, tudo bem?`;
}
console.log(advancedGreeting("Eduardo", "Cesconetto"));
console.log(advancedGreeting("Eduardo"));
// 10 - uniun type
// definir melhor que usar ANY , pode definir como mais de um tipo 
function showBalance(balance) {
    console.log(`O saldo da conta 'e R$${balance}`);
}
showBalance(100);
showBalance("500");
// 11 - avancando em union types
function showUserRole(role) {
    if (typeof role === 'boolean') {
        return "Usuario nao aprovado";
    }
    return `A funcao do usuario 'e: ${role}`;
}
console.log(showUserRole(false));
console.log(showUserRole("Admin"));
function showId(id) {
    console.log(`O ID e: ${id}`);
}
showId(1);
showId("200");
function showCoords(obj) {
    console.log(`X: ${obj.x} Y: ${obj.y} Z: ${obj.z}`);
}
const coordObj = {
    x: 10,
    y: 15,
    z: 20
};
showCoords(coordObj);
const somePerson = { name: "Eduardo", age: 30 };
console.log(somePerson);
// 15 - Literal  types
let test;
test = "testando";
console.log(test);
function showDirection(direction) {
    console.log(`A direcao 'e: ${direction}`);
}
showDirection("left");
//showDirection("top")   so aceita os valores colocados a cima
// 16 - non null assertion operators
const p = document.getElementById("some-p");
console.log(p.innerText);
