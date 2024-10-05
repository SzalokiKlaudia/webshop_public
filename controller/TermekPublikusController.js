import TermekekModel from "../model/TermekekModel.js";
import KosarModel from "../model/KosarModel.js";
import PublikusTermekek from "../view/PublikusTermekek.js";
import KosarTermekek from "../view/KosarTermekek.js";


export default class TermekPublikusController{
    constructor(){
        this.termekekModel = new TermekekModel($(".galeria"))
        this.lista = this.termekekModel.getLista()
        this.publikusTermekek = new PublikusTermekek(this.lista,$(".galeria"))
        this.kosarmodel = new KosarModel()
        this.kosarGombFigyelo()
        this.vasarolEsemenyFigyelo()
        //this.kosarTermekek = new KosarTermekek()
        this.kosarbolTorolEsemenyFigyelo()


    }

    vasarolEsemenyFigyelo(){

        $(window).on("vasarol",(event) => {
            const termek = event.detail
            //console.log(id)
            this.kosarmodel.setKosarhozAd(termek)
            let kosarTermekekLista = this.kosarmodel.getLista()
            console.log(kosarTermekekLista)
            new KosarTermekek(kosarTermekekLista,$(".kosar-termekek"))

        })
        
            

    }

    kosarGombFigyelo(){
        $(window).on("klikkKosar",(event) => {
            console.log($("#cart-icon2"))
            this.publikusTermekek.kosarFeluletMegjelenit()
        })
    }

    kosarbolTorolEsemenyFigyelo(){
        $(window).on("torolKosarbol",(event) => {
            //console.log(event.detail)
            let id = event.detail
            this.kosarmodel.listabolTorol(id)
            let ujLista = this.kosarmodel.getLista()
            new KosarTermekek(ujLista,$(".kosar-termekek"))

        })


    }


}