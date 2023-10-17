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




console.log("----------3----------");
// 3 - Readonly
    interface Car {
        brand: string
        readonly wheels: number
    }

    const fusca:Car = {
        brand: "VW",
        wheels: 4
    }

    console.log(fusca);
    

    // fusca.wheels = 5     nao pode trocar o valor apos criado




console.log("----------4----------");
// 4 - index signature
    interface CoordObject {
        [index: string]: number
    }

    let coords: CoordObject = {
        //propriedade como string e valor como number
        x: 10
    }

    coords.y = 15

    console.log(coords);



console.log("----------5----------");
// 5 - Extending interfaces
    interface Human {
        name: string
        age: number
    }

                //tera propriedade do Human mais algumas
    interface SuperHuman extends Human {
        superpowers: string[]
    }

    const edu: Human = {
        name: "Eduardo",
        age: 43       
    }

    console.log(edu);
    

    const goku: SuperHuman = {
        name: "Goku",
        age: 50,
        superpowers: ["Kamehameha", "Genki Dama"]
    }

    console.log(goku);
    console.log(goku.superpowers);




console.log("----------6----------");
// 6 - interserction types      juntar as interfaces
    interface Character {
        name: string
    }

    interface Gun {
        type: string
        caliber: number
    }


    type HumanWithGun = Character & Gun     // serve pra unir duas interfaces

    const arnold: HumanWithGun = {
        name: "Arnold",
        type: "Shotgun",
        caliber: 12
    }

    console.log(arnold);
    console.log(arnold.caliber);
    


console.log("----------7----------");
// 7 - ReadOnlyArray      limita a quantidade de elementos do array , mas pode modifica-los
    let myArray: ReadonlyArray<string> = ["Maca", "Laranja", "Banana"]

    //myArray[3] = "Mamao"      nao pode adiciona
    console.log(myArray);
    

    myArray.forEach((item) => {
        console.log("Fruta: " + item);  
    })
            // apenas e possivel modificar atraves de metodo
    myArray = myArray.map((item) => {
        return `Fruta: ${item}`
    })

    console.log(myArray);



console.log("----------8----------");
// 8 - Tuplas       
    type fiveNumbers = [ number, number, number, number, number,]

    const myNumbersArray: fiveNumbers = [1, 2, 3, 4 , 5]    
    //const myNumbersArray2: fiveNumbers = [1, 2, 3, 4 , 5, 6]   tem q ter o mesmo tanto de numeros
    //const mixedArray: fiveNumbers = [1, true, "teste", 4, 5]   tem que ser mesmo tipo
    console.log(myNumbersArray);

    
    type nameAndAge = [string, number]

    const anotherUser: nameAndAge = [ "Edu", 43]
    console.log(anotherUser[0]);

    anotherUser[0] = "Lucca"
    console.log(anotherUser);
    



console.log("----------9----------");
// 9 - Tupa com readonly         
            //uma funcao so de exibicao
    function showNumbers(numbers: readonly [number, number]) {

        //numbers[0] = 10    nao pode modificar
        console.log(numbers[0])
        console.log(numbers[1])     +   
    }

    showNumbers([1, 2])
    