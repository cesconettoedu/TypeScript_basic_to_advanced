// 1 - generics
    function showData<T>(arg: T): string {
        return `O dado 'e: ${arg}`
    }

    console.log(showData(5));
    console.log(showData('Teste'));
    console.log(showData(true));
    
    

console.log("------------2--------------");
// 2 - constraint em generic
    function showProductName<T extends {name: string}>(obj: T) {
        return `O nome do produto e: ${obj.name}`
    }

    const myObj = {name: "Porta", cor: "Branca"}
    const otherProd = {name: "carro", wheels: 4, engine: 1.0}
    const thirdObj = {price: 20.9}   //Precisa ter propriedade NAME , a outras nao importa

    console.log(showProductName(myObj));
    console.log(showProductName(otherProd));
    //console.log(showProductName(thirdObj));    Precisa ter propriedade NAME , a outras nao importa
    


    console.log("------------3--------------");
// 3 - generic com interface      T e U nomeclaturas usadas para generics
    interface MyObject<T, U, Q> {
        name: string
        wheels: T
        engine: U
        color: Q
    }

    type Car = MyObject<number, number, string>
    type Pen = MyObject<boolean, boolean, string>

    const myCar: Car = {name: "Fusca", wheels: 4, engine: 1.0, color: "Branco"}
    const myPen: Pen = {name: "Caneta", wheels: false, engine: false, color: "Azul"}

    console.log(myCar);
    console.log(myPen);
    
    

console.log("------------4--------------");
// 4 - Type parameters
    function getSomeKey<T, K extends keyof T>(obj: T, key: K) {
        return `A chave ${key} esta presente no objeto e tem o valor de ${obj[key]}`
    }

    const server = {
        hd: '2TB',
        ram: '32GB'
    }

    console.log(getSomeKey(server, 'ram'));
    //console.log(getSomeKey(server, 'teste'));
    
    


console.log("------------5--------------");
// 5 - keyof Type Operator
    