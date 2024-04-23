export class User{
    // User's attributes
    #email
    #age
    #name
    #gender
    #image
    #breed
    #last_likes
    #description
    #hobby
    #quote

    constructor(email, name, age, gender , image, breed, last_likes, description, hobby, quote){
        this.#email = email
        this.#name = name
        this.#age = age
        this.#gender = gender
        this.#image = image
        this.#breed = breed
        this.#last_likes = last_likes
        this.#description = description
        this.#hobby = hobby
        this.#quote = quote
    }
    get_info(key){
        return this[key]
    }
}