"use strict";
console.log("----------1----------");
function showProductDetails(product) {
    console.log(`O nome do produto 'e ${product.name} e seu preco 'e R$${product.price}`);
    if (product.isAvailable) {
        console.log("O produto esta disponivel");
    }
    else {
        console.log("O produto NAO esta disponivel");
    }
}
const shirt = {
    name: "Camisa",
    price: 19.99,
    isAvailable: true
};
showProductDetails(shirt);
showProductDetails({ name: "Tenis", price: 129.99, isAvailable: false });
console.log("----------2----------");
function showUserDetails(user) {
    console.log(`O usuario tem o email: ${user.email}`);
    if (user.role) {
        console.log(`A funcao do usuario 'e: ${user.role}`);
    }
}
const user1 = { email: "edu@email.com", role: "Admin" };
const user2 = { email: "luc@email.com" };
showUserDetails(user1);
showUserDetails(user2);
console.log("----------3----------");
const fusca = {
    brand: "VW",
    wheels: 4
};
console.log(fusca);
// fusca.wheels = 5     nao pode trocar o valor apos criado
console.log("----------4----------");
let coords = {
    //propriedade como string e valor como number
    x: 10
};
coords.y = 15;
console.log(coords);
console.log("----------5----------");
const edu = {
    name: "Eduardo",
    age: 43
};
console.log(edu);
const goku = {
    name: "Goku",
    age: 50,
    superpowers: ["Kamehameha", "Genki Dama"]
};
console.log(goku);
console.log(goku.superpowers);
console.log("----------6----------");
const arnold = {
    name: "Arnold",
    type: "Shotgun",
    caliber: 12
};
console.log(arnold);
console.log(arnold.caliber);
console.log("----------7----------");
// 7 - ReadOnlyArray      limita a quantidade de elementos do array , mas pode modifica-los
let myArray = ["Maca", "Laranja", "Banana"];
//myArray[3] = "Mamao"      nao pode adiciona
console.log(myArray);
myArray.forEach((item) => {
    console.log("Fruta: " + item);
});
// apenas e possivel modificar atraves de metodo
myArray = myArray.map((item) => {
    return `Fruta: ${item}`;
});
console.log(myArray);
console.log("----------8----------");
const myNumbersArray = [1, 2, 3, 4, 5];
//const myNumbersArray2: fiveNumbers = [1, 2, 3, 4 , 5, 6]   tem q ter o mesmo tanto de numeros
//const mixedArray: fiveNumbers = [1, true, "teste", 4, 5]   tem que ser mesmo tipo
console.log(myNumbersArray);
const anotherUser = ["Edu", 43];
console.log(anotherUser[0]);
anotherUser[0] = "Lucca";
console.log(anotherUser);
console.log("----------9----------");
// 9 - Tupa com readonly         
//uma funcao so de exibicao
function showNumbers(numbers) {
    //numbers[0] = 10    nao pode modificar
    console.log(numbers[0]);
    console.log(numbers[1]) +
    ;
}
showNumbers([1, 2]);
