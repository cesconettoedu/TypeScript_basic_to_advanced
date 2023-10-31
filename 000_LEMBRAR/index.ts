// Type alias ////////////////////////
        // reduzir a sintax  voce define o que a funcao vai receber com o type, para poder usar em mais casos e nao repetir sempre no corpo da funcao
    
    type ID = string | number

    function showId(id: ID) {
      console.log(`O ID e: ${id}`);
    }

    showId(1)
    showId("200")


// Interface ////////////////////////  
      // mais parecido como um objeto
    interface Point {
      x: number
      y: number
      z: number
    }

    function showCoords(obj: Point){
      console.log(`X: ${obj.x} Y: ${obj.y} Z: ${obj.z}`);
    }

        //cria um obj tipa ele com a interface ai tem q colocar as propriedades baseada na interface
    const coordObj:Point = {
        x: 10,
        y: 15,
        z: 20
    }

    showCoords(coordObj)

//Na INTERFACE (mais usado) podemos add ou mudar as propriedades depois, no TYPE ALIAS nao
            //  https://www.udemy.com/course/typescript-do-basico-ao-avancado-c-react-express/learn/lecture/30001262#overview





// Narrowing
    // para checar que tipo de dado vem para nos, exemplo quando consome um API as vezes nao se sabe o que ela esta enviando




//PAREI A REVISAO AQUI

https://www.udemy.com/course/typescript-do-basico-ao-avancado-c-react-express/learn/lecture/30032254#overview