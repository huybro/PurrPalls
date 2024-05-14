import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import { authenticateToken } from './authentication.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();

// Serve static files from the "client/pages" directory
app.use(express.static(path.join(__dirname, '../client')));

// Serve static files from the "client/css" directory
app.use('/css', express.static(path.join(__dirname, '../client/styles')));

// Route handler for /index
app.get('/index', authenticateToken,(req, res) => {
    res.sendFile(path.join(__dirname, '../client/pages', 'index.html'));
});

// Route handler for /login
app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/pages', 'login.html'));
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