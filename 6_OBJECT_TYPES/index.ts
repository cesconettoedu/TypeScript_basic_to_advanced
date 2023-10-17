console.log("----------1----------");
// 1 - Tipo de objeto para funcao com interface
    interface Product {
        name: string
        price: number
        isAvailable: boolean
    }

    function showProductDetails(product: Product) {
        console.log(`O nome do produto 'e ${product.name} e seu preco 'e R$${product.price}`)
        if(product.isAvailable) {
            console.log("O produto esta disponivel");
        } else {
            console.log("O produto NAO esta disponivel");
        }
        
    }

    const shirt: Product = {
        name: "Camisa",
        price: 19.99,
        isAvailable: true
    }

    showProductDetails(shirt)
    showProductDetails({name: "Tenis", price: 129.99, isAvailable: false})




console.log("----------2----------");
// 2 - propriedades opcional em interface
    interface User {
        email: string,
        role?: string
    }

    function showUserDetails(user: User) {
        console.log(`O usuario tem o email: ${user.email}`)

        if(user.role) {
            console.log(`A funcao do usuario 'e: ${user.role}`);
        } 
    }

    const user1: User = {email: "edu@email.com", role: "Admin"}
    const user2: User = {email: "luc@email.com"}

    showUserDetails(user1)
    showUserDetails(user2)