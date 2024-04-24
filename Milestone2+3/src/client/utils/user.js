export class User{
    // User's attributes
    #id
    

    constructor(id, email, name, age, gender , image, breed, last_likes, description, hobby, quote){
        this.#id = id
        this.email = email
        this.name = name
        this.age = age
        this.gender = gender
        this.image = image
        this.breed = breed
        this.last_likes = last_likes
        this.description = description
        this.hobby = hobby
        this.quote = quote
    }
    getAttr(key){
        return this[key]
    }
    getId(){
        return this.#id
    }
}