import express from 'express';
import path from 'path';
import cors from 'cors';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import { authenticateToken, checkCredentials, generateToken } from './authentication.js';
import {getAvailableProfiles} from './db.js'
import { updateProfileInfo, deleteProfileInfo, createNewProfile } from './db.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();

app.use(cors())

app.use(express.json());
// Serve static files from the "client/pages" directory
app.use(express.static(path.join(__dirname, '../client')));

// Serve static files from the "client/css" directory
app.use('/css', express.static(path.join(__dirname, '../client/styles')));

/**
 * Route handler for /index
 * @name GET/index
 * @function
 * @memberof module:server
 * @inner
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 */
app.get('/index',(req, res) => {
    res.sendFile(path.join(__dirname, '../client/pages', 'index.html'));
});

/**
 * Route handler for fetching available profiles data
 * @name GET/index/data
 * @function
 * @memberof module:server
 * @inner
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 */
app.get('/index/data', async (req, res) => {
    try {
        const availableProfiles = await getAvailableProfiles();
        res.json(availableProfiles);
    } catch (error) {
        console.error('Error fetching available profiles:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

/**
 * Route handler for /login (GET)
 * @name GET/login
 * @function
 * @memberof module:server
 * @inner
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 */
app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/pages', 'login.html'));
});

/**
 * Route handler for /login (POST)
 * @name POST/login
 * @function
 * @memberof module:server
 * @inner
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 */
app.post('/login', async (req, res) => {
    const { email, password } = req.body;
    const user = await checkCredentials(email, password);
    if (!user) {
        return res.status(401).json({ message: 'Invalid email or password' });
    }
    res.status(200).json({ user });
});

/**
 * Route handler for /signup (POST)
 * @name POST/signup
 * @function
 * @memberof module:server
 * @inner
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 */
app.post('/signup', async (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) {
        return res.status(400).json({ message: 'Please enter email and password' });
    }
    await createNewProfile({ email, password });
    res.sendFile(path.join(__dirname, '../client/pages', 'login.html'));
});

/**
 * Route handler for /signup (GET)
 * @name GET/signup
 * @function
 * @memberof module:server
 * @inner
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 */
app.get('/signup', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/pages', 'signup.html'));
});

/**
 * Route handler for /setting (GET)
 * @name GET/setting
 * @function
 * @memberof module:server
 * @inner
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 */
app.get('/setting', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/pages', 'settings.html'));
});

/**
 * Route handler for updating profile information (PUT)
 * @name PUT/setting
 * @function
 * @memberof module:server
 * @inner
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 */
app.put('/setting', async (req, res) => {
    // Extract the updated information from the request body
    const { user } = req.body;
    console.log("user",user);
    await updateProfileInfo(user._id, user);

    // Send a success response
    res.status(200).json({ message: 'Profile information updated successfully' });
});

/**
 * Route handler for deleting a user profile
 * @name DELETE/deleteProfile/:id
 * @function
 * @memberof module:server
 * @inner
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 */
app.delete('/deleteProfile/:id', async (req, res) => {
    // Extract the updated information from the request body
    const id = req.params.id;
    console.log("id",id);
    await deleteProfileInfo(id);

    // Send a success response
    res.status(200).json({ message: 'Delete User successfully' });
});


// Start the server
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});