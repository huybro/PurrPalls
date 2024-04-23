function renderProfileInfo(profileData) {
    const profileContainer = document.getElementById('profile-container');
    const imgContainer = document.getElementById('image-container')

    profileContainer.innerHTML = '';
    imgContainer.innerHTML = '';

    const profileInfo = document.createElement('div');
    profileInfo.className = 'profile-info';

    const name = document.createElement('h1');
    name.textContent = profileData.name;

    const breed = document.createElement('p');
    breed.textContent = profileData.breed;

    const age = document.createElement('p');
    age.textContent = `${profileData.age} years`;

    const gender = document.createElement('p');
    gender.textContent = profileData.gender;

    profileInfo.appendChild(name);
    profileInfo.appendChild(breed);
    profileInfo.appendChild(age);
    profileInfo.appendChild(gender);
    profileContainer.appendChild(profileInfo);

    const img = document.createElement('img')
    img.src = profileData.image;
    img.className = 'profile-image'
    imgContainer.appendChild(img)
}

let currentIndex = 0;

const availableProfiles = [
    { name: 'May', breed: 'Domestic Long Hair', age: 4, gender: 'Female', image: '../../../../Milestone1/figures/cat_pic/pexels-evg-kowalievska-1170986.jpg'},
    { name: 'Buddy', breed: 'Siamese', age: 2, gender: 'Male', image: '../../../../Milestone1/figures/cat_pic/pexels-cats-coming-1543793.jpg' },
    { name: 'Luna', breed: 'Persian', age: 5, gender: 'Female', image: '../../../../Milestone1/figures/cat_pic/pexels-pixabay-45201.jpg' },
  ];

function swipe(direction) {
    if (direction === 'left') {
      currentIndex = (currentIndex - 1 + availableProfiles.length) % availableProfiles.length;
    } else if (direction === 'right') {
      currentIndex = (currentIndex + 1) % availableProfiles.length;
    }

    renderProfileInfo(availableProfiles[currentIndex]);
  }

  const swipeLeft = document.getElementById('left');
  const swipeRight = document.getElementById('right');

  swipeLeft.addEventListener('click', () => swipe('left'));
  swipeRight.addEventListener('click', () => swipe('right'));

  renderProfileInfo(availableProfiles[currentIndex]);


