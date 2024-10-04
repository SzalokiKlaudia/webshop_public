import Kartya from "./Kartyacska.js";

export default class PublikusTermekek{
    #lista = []
    constructor(lista,szuloElem){
        this.#lista = lista
        this.szuloElem = szuloElem
        this.kartyakMegjelenit()
        this.kosar = $("#cart-icon")
        this.kosarFelulet = $(".kosar-termekek")
        this.kosarGombEsemeny()
        //this.menu = $(".menu")
        //this.kosarFeluletMegjelenit()
        

    }

    kartyakMegjelenit(){

        this.#lista.forEach((elem) => {
            //console.log("itt")
            new Kartya(elem,this.szuloElem)

        })
    }

    kosarGombEsemeny(){ //ha klikkelsz jelenítse meg az oldalsávot
        this.kosar.on("click",() => {
            const e = new CustomEvent("klikkKosar")
            window.dispatchEvent(e)
            //console.log("klikk")
        })
    }

    kosarFeluletMegjelenit(){
        //console.log(this.kosarFelulet)
        //this.kosarFelulet.removeClass("active")
        //this.kosarFelulet.empty()
      
        $(".aside").toggleClass("active")
       

        
        
    }

    
}