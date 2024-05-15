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
gender.value = user.gender.toLowerCase();

for (let i = 0; i < user.image.length; i++) {
    const imgContainer = document.getElementById(`settings-photo-${i+1}`);
    const img = document.createElement('img');
    img.src = user.image[i];
    img.className = 'profile-image';
    img.style.width = imgContainer.offsetWidth + "px"; // Set image width to container width
    img.style.height = imgContainer.offsetHeight + "px"; // Set image height to container height
    imgContainer.appendChild(img);
}

const saveButton = document.getElementById('save-button');


