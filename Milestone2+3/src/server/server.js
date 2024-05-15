import express from 'express';
import path from 'path';
import cors from 'cors';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import { authenticateToken, checkCredentials, generateToken } from './authentication.js';
import {getAvailableProfiles} from './db.js'
import { updateProfileInfo } from './db.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();

app.use(cors())

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
    const user = await checkCredentials(email, password);
    if (!user) {
        return res.status(401).json({ message: 'Invalid email or password' });
    }
    res.status(200).json({ user });
});

// Route handler for /signup
app.get('/signup', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/pages', 'signup.html'));
});

// Route handler for /profile
app.get('/setting', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/pages', 'settings.html'));
});

// Route handler for updating profile information
app.put('/setting', async (req, res) => {
    // Extract the updated information from the request body
    const { user } = req.body;

    await updateProfileInfo(user.id, ...user);

    // Send a success response
    res.status(200).json({ message: 'Profile information updated successfully' });
});

app.delete('/deleteProfile', async (req, res) => {
    // Extract the updated information from the request body
    const { id } = req.body;

    await deleteProfileInfo(id);

    // Send a success response
    res.status(200).json({ message: 'Delete User successfully' });
});


// Start the server
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});