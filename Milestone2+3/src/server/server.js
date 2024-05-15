import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import { authenticateToken, checkCredentials, generateToken } from './authentication.js';
import {getAvailableProfiles} from './db.js'

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();

app.use(express.json());
// Serve static files from the "client/pages" directory
app.use(express.static(path.join(__dirname, '../client')));

// Serve static files from the "client/css" directory
app.use('/css', express.static(path.join(__dirname, '../client/styles')));


// Route handler for /index
app.get('/index',(req, res) => {
    res.sendFile(path.join(__dirname, '../client/pages', 'index.html'));
});

app.get('/index/data', async (req, res) => {
    try {
        const availableProfiles = await getAvailableProfiles();
        res.json(availableProfiles);
    } catch (error) {
        console.error('Error fetching available profiles:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});
// Route handler for /login, get the page
app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/pages', 'login.html'));
});

app.post('/login', async (req, res) => {
    const { email, password } = req.body;
    const user = checkCredentials(email, password);
    if (!user) {
        return res.status(401).json({ message: 'Invalid email or password' });
    }
    const token = generateToken(user);
    res.status(200).json({ token });
});

// Route handler for /signup
app.get('/signup', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/pages', 'signup.html'));
});

// Route handler for /profile
app.get('/profile', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/pages', 'settings.html'));
});


// Start the server
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});