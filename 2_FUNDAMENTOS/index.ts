// 1 - numbers
let x:number = 10

console.log(x);

x = 16

console.log(typeof x);

const y:number = 15.123465

console.log(y.toPrecision(4));  // utiliza metodos de numeros somente

// 2 - string
const firstName: string = "Eduardo"

console.log(firstName.toUpperCase());  // utiliza metodos de string somente

let fullName: string

const lastName: string = "Cesconetto"

fullName = firstName + " " + lastName

console.log(fullName);
console.log(typeof fullName);


// 3 - boolean
let a: boolean = false

console.log(a);
console.log(typeof a);

a = true

console.log(a);


// 4 - inference e annotation
let ann: string = "Teste"

let inf = "Teste"

    // ann = 1
    // inf = 1

// tsc -w      no terminal ele fica compilando automatico assim que salvar

console.log("testando");

//exercicio  -mudar variavel numero par string

let nX: number = 1980

let numString = nX.toString()

const printNumber: string = `Vai imprimir o ${numString}`

console.log(printNumber);

