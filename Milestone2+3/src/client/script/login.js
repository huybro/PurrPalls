const URL = "http://127.0.0.1:3000/";
const email = document.getElementById('email').value;
const password = document.getElementById('password').value;
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
    console.log(email)
    console.log(password)
    const { token } = await authenticate(email, password); 
    console.log(token);
    localStorage.setItem('token', token);

});