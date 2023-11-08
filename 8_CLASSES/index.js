"use strict";
console.log("------------1--------------");
// 1 - Campos em Classe
// o simbolo    !    fala que vai iniciar a propriedade sem valores
class User {
}
const eduardo = new User();
console.log(eduardo);
eduardo.name = "Eduardo";
//eduardo.job = "atoa"   tem que ter a propriedade no User
console.log(eduardo);
console.log("------------2--------------");
// 2 - Constructor
class NewUser {
    // deixa criar o objeto com valores no seus campos que terao que ser preenchidos
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
const joao = new NewUser("Joao", 22); // tem que ter os argumentos que estao no constructor
console.log(joao);
console.log("------------3--------------");
// 3 - Campo readonly
class Car {
    constructor(name) {
        this.wheels = 4; // wheels vai ser sempre esse nao pode trocar
        this.name = name;
    }
}
const fusca = new Car("Fusca");
console.log(fusca);
console.log(fusca.wheels);
fusca.name = "Fusca Turbo";
console.log(fusca);
//fusca.wheels = 5      nao pode alterar
console.log("------------4--------------");
// 4 - heranca e super
class Machine {
    constructor(name) {
        this.name = name;
    }
}
const trator = new Machine("Trator");
class KillerMachine extends Machine {
    constructor(name, guns) {
        super(name); // para se referir ao name da class MAchine
        this.guns = guns;
    }
}
const destroyer = new KillerMachine("Destroyer", 4);
console.log(trator);
console.log(destroyer);
console.log("------------5--------------");
// 5 - Metodos
class Dwarf {
    constructor(name) {
        this.name = name;
    }
    greeting() {
        console.log("Hey Stranger!");
    }
}
const jimy = new Dwarf("Jimmy");
console.log(jimy.name);
jimy.greeting();
console.log(jimy);
console.log("------------6--------------");
// 6 - this
class Truck {
    constructor(model, hp) {
        this.model = model;
        this.hp = hp;
    }
    showDetails() {
        console.log(`Caminhao do modelo: ${this.model}, que tem ${this.hp} cavalos de potencia.`);
    }
}
const volvo = new Truck("Volvo", 400);
const scania = new Truck("Scania", 500);
volvo.showDetails();
scania.showDetails();
console.log("------------7--------------");
// 7 - getters      
class Person {
    constructor(name, surname) {
        this.name = name;
        this.surname = surname;
    }
    get fullName() {
        return this.name + " " + this.surname; // os getters precisam retornar valores
    }
}
const eduardoCesconetto = new Person("Eduardo", "Cesconetto");
console.log(eduardoCesconetto.name);
console.log(eduardoCesconetto.fullName);
console.log("------------8--------------");
// 8 - Setters
class Coords {
    set fillX(x) {
        if (x == 0) {
            return;
        }
        this.x = x;
        console.log("X inserido com sucesso");
    }
    set fillY(y) {
        if (y == 0) {
            return;
        }
        this.y = y;
        console.log("Y inserido com sucesso");
    }
    get getCoords() {
        return `X: ${this.x} e Y: ${this.y}`;
    }
}
const myCoords = new Coords();
myCoords.fillX = 15;
//myCoords.fillY = 0      se for 0 ele retorna , para no if
myCoords.fillY = 10;
console.log(myCoords);
console.log(myCoords.getCoords);
console.log("------------9--------------");
class blogPost {
    constructor(title) {
        this.title = title;
    }
    itemTitle() {
        return `O Titulo do post e: ${this.title}`;
    }
}
const myPost = new blogPost("Hello World");
console.log(myPost.itemTitle());
// se tivesse outra classe aproveitaria a interface
class TestingInteface {
    constructor(title) {
        this.title = title;
    }
    itemTitle() {
        return `O Titulo e: ${this.title}`;
    }
}
console.log("------------10--------------");
// 10 - Override de metodos
class Base {
    someMethod() {
        console.log("Alguma coisa");
    }
}
class Nova extends Base {
    someMethod() {
        console.log("Testando outra coisa"); //vai substituir o metodo da class pai
    }
}
const myObject = new Nova();
myObject.someMethod();
console.log("------------11--------------");
// 11 - Public
class C {
    constructor() {
        this.x = 10; //public 'e o modo default nao muda nada
    }
}
const cInstace = new C();
console.log(cInstace.x);
console.log("------------12--------------");
// 12 - Protected
class E {
    constructor() {
        this.x = 10;
    }
}
class F extends E {
    showX() {
        console.log("X: " + this.x);
    }
}
const fInstance = new F();
fInstance.showX();
console.log("------------13--------------");
// 13 - Private
class PrivateClass {
    constructor() {
        this.name = "Private";
    }
    showName() {
        return this.name;
    }
    privateMethod() {
        console.log("Metodo Privado");
    }
}
const pObj = new PrivateClass();
console.log(pObj.showName()); //so pode ser acessado pelo metodo
// exemplo: tentando acessar o metodo privado.
// class TestingPrivate extends PrivateClass {
//     myMethod() {
//       this.privateMethod()
//     }
// }
console.log("------------14--------------");
// 14 - static members
class StaticMembers {
    static straticMethod() {
        console.log("Este e um metodo estatico");
    }
}
StaticMembers.prop = "Teste Static"; //coloca o static para ter acesso a ela
console.log(StaticMembers.prop);
StaticMembers.straticMethod();
console.log("------------15--------------");
// 15 - generic class
class Item {
    constructor(first, second) {
        this.first = first;
        this.second = second;
    }
    get showFirst() {
        return `O first e: ${this.first}`;
    }
}
const newItem = new Item("caixa", "surpresa");
console.log(newItem);
console.log(newItem.showFirst);
console.log(typeof newItem.first);
const secondItem = new Item(12, true);
console.log(secondItem);
console.log(secondItem.showFirst);
console.log(typeof secondItem.first);
console.log("------------16--------------");
// 16 - parameter properties
//resumindo a sintax colocando no constructor
class ParameterProperties {
    constructor(name, qty, price) {
        this.name = name;
        this.qty = qty;
        this.price = price;
        this.name = name;
        this.qty = qty;
        this.price = price;
    }
    get showQty() {
        return `Qtd total: ${this.qty}`;
    }
    get showPrice() {
        return `Qtd total: ${this.price}`;
    }
}
const newShirt = new ParameterProperties("Camisa", 5, 19.99);
console.log(newShirt.name);
//console.log(newShirt.price);  so pode ser acessa via metodo
console.log(newShirt.showQty);
console.log(newShirt.showPrice);
console.log("------------17--------------");
// 17 - class expressions
const myClass = class {
    constructor(name) {
        this.name = name;
    }
};
const pessoa = new myClass("Jones");
console.log(pessoa);
console.log(pessoa.name);
console.log("------------18--------------");
// 18 - abstract class
class AbstractClass {
}
//const newObj = new AbstractClass();     nao pode criar uma instancia de uma class abstrata
class AbstractExample extends AbstractClass {
    constructor(name) {
        super();
        this.name = name;
    }
    showName() {
        console.log(`O nome e: ${this.name}`);
    }
}
const newAbstractObject = new AbstractExample("Josias");
newAbstractObject.showName();
console.log("------------19--------------");
// 19 - relacoes entre classes
class Dog {
}
class Cat {
}
const doguinho = new Cat();
console.log(doguinho);
