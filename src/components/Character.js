class Character{
    #life
     constructor(name) {
        this.name = name 
        this.#life = 1 
        this.maxLife = 0
        this.attack = 0
        this.defense = 0
     }

     get life() {
        return this.#life
     }

     // Para enviar a nova vida do char
     // Verificação para que a vida não fique inferior a 0
     set life(newLife) {
        this.#life = newLife < 0 ? 0 : newLife
     }
}