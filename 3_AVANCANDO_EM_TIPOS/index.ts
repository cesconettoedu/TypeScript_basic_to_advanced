// 1 - arrays
let numbers: number[] = [1, 2, 3]
console.log(numbers);

numbers.push(6)
console.log(numbers);

    //numbers = "teste"       error

const nomes: string[] = ["Edu", "Lucca"]
console.log(nomes);

    // nomes.push(4)  error



// 2 - outra mais antiga sintax array
const nums: Array<number> = [100, 200]
console.log(nums);

nums.push(300)
console.log(nums);
console.log(nums[0]);




// 3 - any
const arr1: any = [1, "teste", true, [], {nome: "Edu"}]
console.log(arr1);

arr1.push([1, 2, 3])
console.log(arr1);





// 4 - parametros tipados
function soma(a: number, b: number) {
    console.log(a + b);    
}

soma(1, 2)
    // soma('a', 'b')  error




// 5 - retorno da funcao
                                //aqui 'e o que ela retorna, depois do parenteses
function greeting(name: string): string {
    return `ola ${name}`
}

console.log(greeting('Eduardo'));
    //console.log(greeting(1));  error





// 6 - funcoes anonimas
setTimeout(function() {
    
    const sallary: number = 1000

    //console.log(parseFloat(sallary));    error , 'e metodo para string
    console.log((sallary));

}, 2000);





// 7 - tipos de objeto
function passCoordinates(coord: {x: number, y: number}) {
    console.log("X coordinates: " + coord.x);
    console.log("X coordinates: " + coord.y);
    
}

const objCoord  = {x: 329, y: 84.2}

passCoordinates(objCoord)
passCoordinates({x: 2, y: 3})





// 8 - props opcionais
function showNumbers(a: number, b: number, c?: number) {
    console.log("A: " + a);
    console.log("B: " + b);
    if(c){
        console.log("C: " + c);   
    }
}

showNumbers(1, 2, 3)
showNumbers(1, 2)  // tem que colocar a ? na hora de declarar o tipo na funcao, se a props for opcional





// 9 - validando argumento opcional

function advancedGreeting (firstName: string, lastName?: string) {
    if(lastName !== undefined) {
        return(`ola, ${firstName} ${lastName}, tudo bem?`);      
    }

    return `Ola, ${firstName}, tudo bem?`
    
}

console.log(advancedGreeting("Eduardo", "Cesconetto"));
console.log(advancedGreeting("Eduardo"));




// 10 - uniun type
        // definir melhor que usar ANY , pode definir como mais de um tipo 
function showBalance(balance: string | number) {
    console.log(`O saldo da conta 'e R$${balance}`);
}

showBalance(100);
showBalance("500");



// 11 - avancando em union types
function showUserRole(role: boolean | string) {
    if(typeof role === 'boolean') {
        return "Usuario nao aprovado"
    }

    return `A funcao do usuario 'e: ${role}`
}

console.log(showUserRole(false));
console.log(showUserRole("Admin"));



// 12 - Type alias
        // reduzir a sintax 
    type ID = string | number

    function showId(id: ID) {
    console.log(`O ID e: ${id}`);
    }

    showId(1)
    showId("200")



// 13 - Interface
    interface Point {
        x: number
        y: number
        z: number
    }

    function showCoords(obj: Point){
        console.log(`X: ${obj.x} Y: ${obj.y} Z: ${obj.z}`);
    }

    const coordObj:Point = {
        x: 10,
        y: 15,
        z: 20
    }

    showCoords(coordObj)



// 14 - interface x type alias
      // inteface voce pode adicionar propriedades depois o Type nao pode (type seria uma const e a interface um let exemplo)

    interface Person {
        name: string
    }

    interface Person {
        age: number
    }

    const somePerson: Person = {name: "Eduardo", age: 30}
    console.log(somePerson);



// 15 - Literal  types
    let test: "testando"

    test = "testando"

    console.log(test);


    function showDirection(direction: "left" | "right" | "center") {
        console.log(`A direcao 'e: ${direction}`);
    }

    showDirection("left")

        //showDirection("top")   so aceita os valores colocados a cima



// 16 - non null assertion operators
    const p = document.getElementById("some-p")

    console.log(p!.innerText);



// 17 - bigint
    let n: bigint

    //n = 1    (noa pode pq 'e numero pequeno) 
    n = 1000n

    console.log(n);
    console.log(typeof n);




// 18 - symbol
    //criar valor unico
    let symbolA:symbol = Symbol("a")
    let symbolB = Symbol("a")

    console.log(symbolA == symbolB);
    console.log(symbolA === symbolB);
        