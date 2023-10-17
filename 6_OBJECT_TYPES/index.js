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
