import PouchDB from 'pouchdb';
import { User } from '../client/utils/user.js';

const dbUser = new PouchDB('user');
const propUser1 = new User('0', "ktle@umass.edu", "ilovecs326", "Khiem", 3, "Male", ["../figures/cat_pic/cat1.jpg", "../figures/cat_pic/cat2.jpg", "../figures/cat_pic/cat3.jpg"], "Meo Lon")
const propUser2 = new User('1', "tungnguyen@umass.edu", "ilovecs326", "Tung", 3, "Male", ["../figures/cat_pic/cat4.jpg", "../figures/cat_pic/cat5.jpg", "../figures/cat_pic/cat6.jpg"], "Meo Cho")
const propUser3 = new User('2', "minhnguyen@umass.edu", "ilovecs326", "Minh", 3, "Male", ["../figures/cat_pic/cat9.jpg", "../figures/cat_pic/cat8.jpg", "../figures/cat_pic/cat7.jpg"], "Meo Ngu")
const propUser4 = new User('3', "hcao@umass.edu", "ilovecs326", "Huy", 3, "Male", ["../figures/cat_pic/cat10.jpg", "../figures/cat_pic/cat11.jpg", "../figures/cat_pic/cat12.jpg"], "Meo Dan")
const propUser5 = new User('4', "bede@umass.edu", "ilovecs326", "May", 3, "Male", ["../figures/cat_pic/cat10.jpg", "../figures/cat_pic/cat11.jpg", "../figures/cat_pic/cat12.jpg"], "Meo Ngu")
const users = [propUser1, propUser2, propUser3, propUser4, propUser5]
const availableId = ['0', '1', '2', '3', '4'];
users.forEach(async (user) => {
    const existingUser = await findUserByEmailAndPassword(user.email, user.password);
    if (!existingUser) {
        await dbUser.put({_id: user.getId(), ...user});
    }
});

export async function findUserByEmailAndPassword(email, password) {
    for (const id of availableId) {
      try {
        const user = await dbUser.get(id);
        if (user.email === email && user.password === password) {
          return user;
        }
      } catch (error) {
        if (error.status === 404) {
          continue;
        } else {
          throw error;
        }
      }
    }
    return null;
  }