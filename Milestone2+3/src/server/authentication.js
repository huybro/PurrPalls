import jwt from 'jsonwebtoken';
import { findUserByEmailAndPassword } from './db.js';

/**
 * Check if the provided email and password exist and match in the database.
 * @async
 * @function checkCredentials
 * @param {string} email - The user's email address.
 * @param {string} password - The user's password.
 * @returns {Promise<Object|null>} Returns the user object if the credentials are valid, otherwise returns null.
 */
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

/**
 * Generate a JSON Web Token (JWT) for the given user.
 * @function generateToken
 * @param {Object} user - The user object containing user data.
 * @param {number} user.id - The user's ID.
 * @param {string} user.email - The user's email address.
 * @returns {string} The generated JWT token.
 */
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

/**
 * Middleware function to authenticate a JSON Web Token (JWT).
 * @function authenticateToken
 * @param {Object} req - The Express request object.
 * @param {Object} res - The Express response object.
 * @param {Function} next - The next middleware function in the chain.
 * @returns {void}
 */
export function authenticateToken(req, res, next) {
    const token = req.headers.authorization

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
