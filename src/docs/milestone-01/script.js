
const address_cat_pic = []

let cat_button = document.getElementById("change-cat")
let random_cat_image = document.getElementById("random-cat-image")
cat_button.addEventListener("click", cat_click)

function cat_click(){
    let new_img = document.createElement("img")
    let random_index = Math.floor(Math.random()*10)
    new_img.src = address_cat_pic[random_index]
    new_img.alt = "random cat picture"
    random_cat_image.append(new_img)
}
