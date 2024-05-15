import jwt from 'jsonwebtoken';
import { findUserByEmailAndPassword } from './db.js';
// Function to check if email and password exist and match
export async function checkCredentials(email, password) {
    if (!email || !password) {
        return null;
    }
    const user = await findUserByEmailAndPassword(email, password);
    if (!user) {
        return null;
    }
    return user;
}

// Function to generate a JWT token
export function generateToken(user) {
    const payload = {
        id: user.id,
        email: user.email,
        // Add any other user data you want to include in the token
    };

    const options = {
        expiresIn: '100h', // Set the token expiration time
    };

    // Generate the token using the payload, secret key, and options
    const token = jwt.sign(payload, 'ilovecs326', options);

    return token;
}

// Middleware function to authenticate JWT token
export function authenticateToken(req, res, next) {
    const token = req.headers.authorization;

    jwt.verify(token, 'ilovecs326', (err, decoded) => {
        console.log('Token:', token);
        if (err) {
            console.log(err);
            return res.status(403).json({ message: 'Invalid token' });
        }
        // Store the decoded token in the request object for future use
        console.log('Token verified successfully:', decoded);
        req.user = decoded;
        next();
    });
}
