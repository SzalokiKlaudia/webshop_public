

export default class Kartya{
    #listaElem = {}

    constructor(listaElem,szuloElem){
        this.#listaElem = listaElem
        this.szuloElem = szuloElem
        this.kartyaMegjelenit()
        this.gombVasarol = $(".btn:last")
        this.kosarEsemenyKezelo()

    }

    kartyaMegjelenit(){

        this.szuloElem.append(`
                                <div class="card kivalaszt col-lg-4 col-md-6 col-sm-12">
                                    <div class="card-body">
                                        <h3>${this.#listaElem.name}</h3>
                                        <div class="card-img-holder">
                                            <div>
                                              <img src = ${"kepek/" + this.#listaElem.picture} class="card-img-top"></img>
                                            </div>
                                             <div>
                                                <p>${this.#listaElem.description}</p>
                                            </div>
                                            <div class="kosar-elemek d-flex justify-content-between">
                                                <button class="btn">Kosárba</button>
                                                <h5 class="price">Ár: ${this.#listaElem.price} FT</h4>
                                            
                                            </div>


                                        </div>


                                      
                                    
                                    </div>
                                </div>
            
                                `)
        
    }

    kosarEsemenyKezelo(){
        this.gombVasarol.on("click",() => {
            const e = new CustomEvent("vasarol",{detail:this.#listaElem})
            window.dispatchEvent(e)
        })


    }


}