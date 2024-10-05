

export default class KosarModel{
    #lista = []

    constructor(){
       this.#lista = []
       this.kosarElem = {}
       
    
    }

    setKosarhozAd(termek){//itt kellene hozzáadni új id-t
        console.log(termek)


     

      
        this.#lista.push(termek)
     
       
    }

    getLista(){
        console.log(this.#lista)

     

        return this.#lista
    }

    listabolTorol(id){
        // this.#lista = this.#lista.filter(listaElem => listaElem.id != id)
       this.#lista.splice(id,1)
        return this.#lista
    }



    
}