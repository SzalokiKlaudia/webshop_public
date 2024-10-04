import KosarElem from "./KosarElem.js"


export default class KosarTermekek{
    #kosarLista = []
    constructor(kosarLista,szuloElem){
        this.#kosarLista = kosarLista
        this.szuloElem = szuloElem
        this.szuloElem.empty()
        this.megjelenit()

    }

    megjelenit(){
        console.log(this.szuloElem)
       
       let szamlalo = 0
        this.#kosarLista.forEach((elem,index) => {
            
            console.log(elem)
            elem.termekId = szamlalo
            szamlalo++
            console.log(this.#kosarLista)
        
            
            new KosarElem(elem,this.szuloElem)


        })
        
    }

    
}