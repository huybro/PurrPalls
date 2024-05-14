const dbUser = new PouchDB('user');


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