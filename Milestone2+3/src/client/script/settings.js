const URL = "http://127.0.0.1:3000/";

const user = JSON.parse(localStorage.getItem('user'));
console.log("index dep trai",user);

const email = document.getElementById('email');
email.value = user.email;

const password = document.getElementById('password');
password.value = user.password;

const name = document.getElementById('name');
name.value = user.name;

const age = document.getElementById('age');
age.value = user.age;

const breed = document.getElementById('breed');
breed.value = user.breed;

const gender = document.getElementById('gender');
if(user.gender) {gender.value = user.gender.toLowerCase();}

if(user.image) {for (let i = 0; i < user.image.length; i++) {
    const imgContainer = document.getElementById(`settings-photo-${i+1}`);
    const img = document.createElement('img');
    img.src = user.image[i];
    img.className = 'profile-image';
    img.style.width = imgContainer.offsetWidth + "px"; // Set image width to container width
    img.style.height = imgContainer.offsetHeight + "px"; // Set image height to container height
    imgContainer.appendChild(img);
}}

const deleteButton = document.getElementById('delete-button');
deleteButton.addEventListener('click', async () => {
    if (window.confirm('Are you sure you want to delete your account?')) {
        const id = user._id;
        console.log(URL+'deleteProfile/'+id)
        const response = await fetch(URL+'deleteProfile/'+id, {
            method: 'DELETE'
        });
    }
    localStorage.removeItem('user');
    window.location.href = '/login';
});

const saveButton = document.getElementById('save-button');
// saveButton.addEventListener('click', async () => {



