export class Available {
    // Available's attribute to display in main index
    #name
    #breed
    #age
    #sex
    #images

    constructor(name, breed, age, sex, images){
        this.#age = age
        this.#breed = breed
        this.#images = images
        this.#name = name
        this.#sex = sex
    }

    getAttr(key){
        return this[key]
    }
}