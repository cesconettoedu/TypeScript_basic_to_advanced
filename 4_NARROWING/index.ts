// 1 - type guard
    function sum(a: number | string, b: number | string) {
        
        if(typeof a === "string" && typeof b === "string") {
            console.log(parseFloat(a) + parseFloat(b)); 
        } else if (typeof a === "number" && typeof b === "number") {
            console.log(a + b);
        } else {
            console.log("impossivel realizer a soma");
        }
    }

    sum("4", "59")
    sum(4, 59)
    sum("5", 6)



// 2 - checando se valor existe
    function operations(arr: number[], operation?: string | undefined) {
        if(operation) {
            
            if(operation === "sum") {
                const sum = arr.reduce((i, total) => i + total)   //reduce reduz o array a 1 elemento so
                console.log(sum);
            } else if(operation === "multiply") {
                const multiply = arr.reduce((i, total) => i * total)
                console.log(multiply);
            }

        } else {
            console.log("Defina uma operacao.");           
        }
    }

    operations([1, 2, 3])           //mandou sem operacao    //Defina uma operacao.
    operations([1, 2, 3], "sum")        //6
    operations([2, 4, 8], "multiply")   //64



console.log("------------------- 3 --------------");
// 3 - instance of
    class User {
        name

        constructor(name: string) {
            this.name = name
        }
    }

    class SuperUser extends User {
        constructor(name: string) {
            super(name)
        }
    }

    const jhon = new User("Jhon")
    const paul = new SuperUser("Paul")

    console.log(jhon);
    console.log(paul);

    function userGreeting(user: object) {
        if(user instanceof SuperUser) {
            console.log(`Ola ${user.name}, vc 'e super usuario com mais opcoes`);
        } else if (user instanceof User) {
            console.log(`Ola ${user.name}, usuario normal`);
        }
    }
    
    userGreeting(jhon)
    userGreeting(paul)



console.log("------------------- 4 --------------");
// 4 - operador in
    class Dog {
        name
        breed

        constructor(name: string, breed?: string) {
            this.name = name
            if(breed) {
                this.breed = breed
            }
        }
    }

    const tuca = new Dog("Turca")
    const bobs = new Dog("Bob", "Pastor Alemao")

    function showDogDetails(dog: Dog) {

        if("breed" in dog) {
            console.log(`O cachorro 'e da raca ${dog.breed}`)
        } else {
            console.log(`O cachorro 'e vira-lata`)
        }
    }

    showDogDetails(tuca)
    showDogDetails(bobs)



console.log("------------------- Desafio 3 --------------");
// exercicio
type Review = number | boolean

function userReview(review: Review) {

    if(!review) {
        console.log(`Porfavor coloque um numero`);
        return
    }

    if(typeof review === "number") {
        if(review < 0 || review > 5) {
            console.log("coloque nota entre 1 e 5");
        } else {
            console.log(`a nota do review dado foi ${review}`);
        }
    }
   
}

userReview(1)
userReview(false)
userReview(5)
userReview(6)
userReview(0)
userReview(-1)
