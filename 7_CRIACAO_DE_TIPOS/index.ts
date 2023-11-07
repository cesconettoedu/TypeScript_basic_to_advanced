// 1 - generics
    function showData<T>(arg: T): string {
        return `O dado 'e: ${arg}`
    }

    console.log(showData(5));
    console.log(showData('Teste'));
    console.log(showData(true));
    console.log(showData(["true"]));
    
    

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
        return `A chave ${[key]} esta presente no objeto e tem o valor de ${obj[key]}`
    }

    const server = {
        hd: '2TB',
        ram: '32GB'
    }

    console.log(getSomeKey(server, 'ram'));
    //console.log(getSomeKey(server, 'teste'));
    
    


console.log("------------5--------------");
// 5 - keyof Type Operator
    type Character = {name: string, age: number, hasDriveLicense: boolean}

    type C = keyof Character

    function showCharName(obj: Character, key: C): string {
        return `${obj[key]}`
    }

    const myChar: Character = {
        name: "Eduardo",
        age: 30,
        hasDriveLicense: true
    }

    console.log(showCharName(myChar, 'name'));
    console.log(showCharName(myChar, 'age'));
    


console.log("------------6--------------");
// 6 - type of type operator
    const userName: string = "Eduardo"

    const userName2: typeof userName = "Joao"    //tipou como string como userName

    // const userName3: typeof userName = 14

    type x = typeof userName

    const userName4: x = "Lucca"




console.log("------------7--------------");
// 7 - indexed acess type
    type Truck = {km: number, kg: number, description: string}

    type km = Truck['km']

    const newTruck: Truck = {
        km: 10000,
        kg: 5000,
        description: "Caminhao para pouca carga"
    }

    function showKm(km: km) {
        console.log(`O veiculo tem a km de: ${km}`);
    }

    showKm(newTruck.km)

    const newCar = {
        km: 5000,
        kg: 1000
    }

    showKm(newCar.km)




console.log("------------8--------------");
// 8 - conditional types
    interface A {}

    interface B extends A {}

    interface Teste {
        showName(): string
    }

    type myType = B extends A ? number : string

    const someVar:myType = 5

    type myTypeB = Teste extends {showNumber(): number} ? string : boolean




console.log("------------9--------------");
// 9 - template literals type
    type testA = "text"

    type CustomType = `some ${testA}`
    
    const testing: CustomType = 'some text'


    type a1 = "Testando"
    type a2 = "Union"

    type a3 = `${a1}` | `${a2}`