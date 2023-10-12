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
//console.log(greeting(1));
