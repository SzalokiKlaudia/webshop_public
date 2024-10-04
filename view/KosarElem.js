

export default class KosarElem{
    #elem = {}
    constructor(elem,szuloElem){
        this.#elem = elem
        console.log(this.#elem)
        this.szuloElem = szuloElem
       
        console.log(this.szuloElem)
        this.megjelenitTermekek()
        this.torolGomb = $(".btn-torol")
        this.kosarbolTorolEsemenyKezelo()

    }

    megjelenitTermekek(){
        //console.log(this.#elem)
       

        this.szuloElem.append(`
                                 <div class="card vasaroltam col-lg-4 col-md-3 col-sm-12 ms-2 mb-1">
                                    <div class="card-body">
                                        <h3>${this.#elem.name}</h3>
                                        <div class="card-img-holder">
                                            <div>
                                              <img src = ${"kepek/" + this.#elem.picture} class="card-img-top"></img>
                                            </div>
                                             <div>
                                                <p>${this.#elem.description}</p>
                                            </div>
                                            <div class="kosar d-flex">
                                                <button class="btn-torol w-100">Töröl</button>
                                            
                                            </div>


                                        </div>


                                      
                                    
                                    </div>
                                </div>
                                `)
    }

    kosarbolTorolEsemenyKezelo(){
        this.torolGomb.on("click",() => {
            console.log("klikk")

            const e = new CustomEvent("torolKosarbol",{detail:this.#elem} )
            window.dispatchEvent(e)

        })


    }

    
}