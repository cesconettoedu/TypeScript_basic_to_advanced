console.log("------------1--------------");
// 1 - Campos em Classe
                 // o simbolo    !    fala que vai iniciar a propriedade sem valores
  class User {
    name!: string
    age!: number
  }

  const eduardo = new User()
  console.log(eduardo);
  
  eduardo.name = "Eduardo"
  //eduardo.job = "atoa"   tem que ter a propriedade no User
  console.log(eduardo);



console.log("------------2--------------");
// 2 - Constructor
  class NewUser {
    name
    age
                                            // deixa criar o objeto com valores no seus campos que terao que ser preenchidos
    constructor(name: string, age:number) {
      this.name = name
      this.age = age
    }
  }


  const joao = new NewUser("Joao", 22)   // tem que ter os argumentos que estao no constructor
  console.log(joao);
  

  

console.log("------------3--------------");
// 3 - Campo readonly
  class Car {
    name
    readonly wheels = 4     // wheels vai ser sempre esse nao pode trocar

    constructor(name: string) {
      this.name = name
    }

  }

  const fusca = new Car("Fusca")
  console.log(fusca);

  console.log(fusca.wheels);

  fusca.name = "Fusca Turbo"
  console.log(fusca);

  //fusca.wheels = 5      nao pode alterar
  
  

  
console.log("------------4--------------");
// 4 - heranca e super
  
  class Machine {
    name

    constructor(name: string) {
      this.name = name
    }
  }

  const trator = new Machine("Trator")


  class KillerMachine extends Machine {
    guns

    constructor(name: string, guns: number) {
      super(name)             // para se referir ao name da class MAchine
      this.guns = guns
    }
  }

  const destroyer = new KillerMachine("Destroyer", 4)

  console.log(trator);
  console.log(destroyer);
  
  


  console.log("------------5--------------");
  // 5 - Metodos