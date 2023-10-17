console.log("----------1----------");
// 1 - void
    //funcao que nao tem clausula de retorno

    function withoutReturn():void {
        console.log("esta funcao nao tem retorno");
    }

    withoutReturn()



console.log("----------2----------");
// 2 - Callback como argumento
    function greeting(name: string): string {
        return `Ola ${name}`
    }

    function preGreeting(f: (name: string) => string, userName:string) {
        
        console.log("preparando a funcao");
        
        const greet = f(userName)

        console.log(greet);
        
    }

    // esta esperando uma FUNCAO e uma STRING
             preGreeting(greeting, "Eduardo") 
             preGreeting(greeting, "Lucca")



console.log("----------3----------");
// 3 - Generic Functions
                    // T significa que 'e qualquer um , generico de uma lista
    function firstElement<T>(arr: T[]): T {
        return arr[0]
    }

    console.log(firstElement([1, 2, 3]))
    console.log(firstElement(["a", "b", "c"]))
    //console.log(firstElement("teste"))      nao pode porque tem q ser um tipo de array, uma lista
    
    
    // outro exemplo, juntar obj sem saber o q vai vir neles
    function mergeObjects<U, T>(obj1: U, obj2: T) {
        return {
            ...obj1,
            ...obj2
        }
    }
    
    const newObject = mergeObjects({name: "Eduardo"}, {age: 43, job: "Programmer"})
    console.log(newObject);



console.log("----------4----------");
// 4 - Constraints nas Generic Functions    -  restringir um pouco os tipos da generic func
    function biggestNumber<T extends number | string>(a: T, b: T): T {
        let biggest: T

        if (+a > +b) {
            biggest = a 
        } else {
            biggest = b
        }

        return biggest
    }

    console.log(biggestNumber(5, 2));
    console.log(biggestNumber("12", "5"));
    //console.log(biggestNumber("12", 5));  os dois tipos tem que ser igual
    
    
    

console.log("----------5----------");
// 5 - especificar tipos  de argumento
    function mergeArrays<T>(arr1: T[], arr2: T[]) {
        return arr1.concat(arr2)
    }

    console.log(mergeArrays([1, 2, 3], [5, 6]))
    //console.log(mergeArrays([1, 2, 3], ["teste", "testando"]))    para unir tem q tipar igual abaixo
      console.log(mergeArrays<number | string>([1, 2, 3], ["teste", "testando"]))
    



console.log("----------6----------");
// 6 - Parametros opcionais
    function modernGreeting(name: string, greet?: string) {

        if(greet) {
            return `Ola ${greet} ${name}, tudo bem ?`
        }

        return `Ola ${name}, tudo bem ?`
    }

    console.log(modernGreeting("Eduardo"));
    console.log(modernGreeting("Lucca", "Dr."));
    

    


console.log("----------7----------");
// 7 - parametro default
    function somaDefault(n: number, m = 10) {
        return n + m
    }

    console.log(somaDefault(10));
    console.log(somaDefault(15, 12));  // o m esta com defaul 10, mas se colocar outro ele troca
 
    

console.log("----------8----------");
// 8 - tipo unknown
    function doSomething(x: unknown) {
        if(Array.isArray(x)) {
            console.log(x[0]);
        } else if(typeof x === "number") {
            console.log("X e um numero");            
        }
    }

    doSomething([1, 2, 3])
    doSomething(5)



console.log("----------9----------");
// 9 - tipo Never
    function showErrorMessage(msg: string): never {
        throw new Error(msg)
    }

    //showErrorMessage("Algum error")




console.log("----------10----------");
// 10 - Rest operator
    function sumAll(...n: number[]) {
        return n.reduce((number, sum) => sum + number)
    }

    console.log(sumAll(1, 2, 3, 4, 5))  
    console.log(sumAll(5, 324, 65645))   
    //console.log(sumAll("teste"))    teste nao 'e numerico
    
    
 
    
console.log("----------11----------");
// 11 - Destructuring como paramentro
    function showProductDetails({name, price}: {name: string, price: number}):string {
        return `O nome do produto 'e ${name} e ele custa R$${price}`
    }

    const shirt = {name: "Camisa", price: 49.98}

    console.log(showProductDetails(shirt));