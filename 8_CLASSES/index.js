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
