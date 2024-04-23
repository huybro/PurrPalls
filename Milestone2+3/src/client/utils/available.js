export class Available {
    // Available's attribute to display in main index
    #name
    #breed
    #age
    #gender
    #images

    constructor(name, breed, age, gender, images){
        this.#age = age
        this.#breed = breed
        this.#images = images
        this.#name = name
        this.#gender = gender
    }

    getAttr(key){
        return this[key]
    }
}