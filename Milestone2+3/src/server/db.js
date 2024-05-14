import PouchDB from 'pouchdb';
import { User } from '../client/utils/user.js';

const dbUser = new PouchDB('user');
const propUser1 = new User('0', "ktle@umass.edu", "ilovecs326", "May", 3, "Male", "cat", "Heo", ["../figures/cat_pic/cat1.jpg", "../figures/cat_pic/cat2.jpg", "../figures/cat_pic/cat3.jpg"], "Good cat", "eat and sleep", "I only want rich cat")
const propUser2 = new User('1', "tungnguyen@umass.edu", "ilovecs326", "May", 3, "Male", "cat", "Heo", ["../figures/cat_pic/cat1.jpg", "../figures/cat_pic/cat2.jpg", "../figures/cat_pic/cat3.jpg"], "Good cat", "eat and sleep", "I only want rich cat")
const propUser3 = new User('2', "minhnguyen@umass.edu", "ilovecs326", "May", 3, "Male", "cat", "Heo", ["../figures/cat_pic/cat1.jpg", "../figures/cat_pic/cat2.jpg", "../figures/cat_pic/cat3.jpg"], "Good cat", "eat and sleep", "I only want rich cat")
const propUser4 = new User('3', "hcao@umass.edu", "ilovecs326", "May", 3, "Male", "cat", "Heo", ["../figures/cat_pic/cat1.jpg", "../figures/cat_pic/cat2.jpg", "../figures/cat_pic/cat3.jpg"], "Good cat", "eat and sleep", "I only want rich cat")
const propUser5 = new User('4', "@umass.edu", "ilovecs326", "May", 3, "Male", "cat", "Heo", ["../figures/cat_pic/cat1.jpg", "../figures/cat_pic/cat2.jpg", "../figures/cat_pic/cat3.jpg"], "Good cat", "eat and sleep", "I only want rich cat")
const users = [propUser1, propUser2, propUser3, propUser4, propUser5]
users.forEach(async (user) => {
    const existingUser = await findUserByEmailAndPassword(user.email, user.password);
    if (!existingUser) {
        await dbUser.put({_id: user.getId(), ...user});
    }
});

export async function findUserByEmailAndPassword(email, password) {
    return await dbUser.find({
        selector: {
            email: email,
            password: password
        }
    }).then(result => {
        if (result.docs.length > 0) {
            return result.docs[0];
        } else {
            return null;
        }
    }).catch(error => {
        console.error('Error finding user:', error);
        return null;
    });
}