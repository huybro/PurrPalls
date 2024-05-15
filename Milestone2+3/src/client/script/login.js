const URL = "http://127.0.0.1:3000/";
const loginButton = document.getElementById('login-button');
async function authenticate(email, password){
    if (!email || !password) {
        alert('Please enter email and password');
        return null;
    }
    const response = await fetch(URL + 'login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password })
    });
    return response.json();
}

loginButton.addEventListener('click', async () => {
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    const { token } = await authenticate(email, password); 
    if (!token) {
        alert('Invalid email or password');
        return;
    }
    localStorage.setItem('token', token);
    fetch(URL + 'index', {  
        method: 'GET',
        headers: { Authorization: `${token}` } 
    }).then(response => { 
        if (response.status === 200) {
            window.location.href = '/index';
        }
    }); 
});