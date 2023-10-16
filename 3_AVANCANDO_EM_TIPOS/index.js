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
