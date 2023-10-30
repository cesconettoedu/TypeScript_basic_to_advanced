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

    const coordObj:Point = {
        x: 10,
        y: 15,
        z: 20
    }

    showCoords(coordObj)
