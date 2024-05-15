export class User{
    // User's attributes
    constructor(id, email,password, name, age, gender , image, breed, matches=null){
        this.id = id
        this.email = email
        this.password = password
        this.name = name
        this.age = age
        this.gender = gender
        this.image = image
        this.breed = breed
        this.matches = (matches) ? matches : []
    }

    getId(){
        return this.id
    }
}