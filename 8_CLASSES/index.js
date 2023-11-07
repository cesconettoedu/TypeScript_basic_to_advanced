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
