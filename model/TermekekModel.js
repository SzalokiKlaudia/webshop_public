import {products} from "./adatok.js"
export default class TermekekModel{
    #lista = []

    constructor(szuloElem){
        this.szuloElem = szuloElem
        //console.log(this.szuloElem)
        this.#lista = products
        //console.log(this.#lista)


    }

    getLista(){
        return this.#lista
    }



    
}


