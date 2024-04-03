
const address_cat_pic = ["../../../figures/cat_pic/cat1.jpg", "../../../figures/cat_pic/cat2.jpg", "../../../figures/cat_pic/cat3.jpg", "../../../figures/cat_pic/cat4.jpg", "../../../figures/cat_pic/cat5.jpg", "../../../figures/cat_pic/cat6.jpg", "../../../figures/cat_pic/cat7.jpg", "../../../figures/cat_pic/cat8.jpg", "../../../figures/cat_pic/cat9.jpg", "../../../figures/cat_pic/cat10.jpg"]

let cat_button = document.getElementById("change-cat")
let random_cat_image = document.getElementById("random-cat-image")
cat_button.addEventListener("click", cat_click)

function cat_click(){
    let new_img = document.createElement("img")
    let random_index = Math.floor(Math.random()*10)
    new_img.src = address_cat_pic[random_index]
    new_img.alt = "random cat picture"
    new_img.id = "random-cat-image"
    random_cat_image.append(new_img)
}
