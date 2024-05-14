export class User{
    // User's attributes
    constructor(id, email,password, name, age, gender , image, breed, last_likes, description, hobby, quote){
        this.id = id
        this.email = email
        this.password = password
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

    getId(){
        return this.id
    }
}