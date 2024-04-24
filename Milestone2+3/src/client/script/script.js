import PouchDB from "pouchdb";
import { Available } from "../utils/available";
import { User } from "../utils/user";


const test_available = [new Available(1, "tung", "cho", 3, "Female", ["../figures/cat_pic/cat4.jpg", "../figures/cat_pic/cat5.jpg", "../figures/cat_pic/cat6.jpg"]), new Available(2, "Minh", "gau", 3, "Male", ["../figures/cat_pic/cat1.jpg", "../figures/cat_pic/cat2.jpg", "../figures/cat_pic/cat3.jpg"]), new Available(3, "Khiem", "gau", 3, "Male", ["../figures/cat_pic/cat1.jpg", "../figures/cat_pic/cat2.jpg", "../figures/cat_pic/cat3.jpg"] ) ]

const test_user = new User(0, "ktle@umass.edu", "May", 3, "Male", "cat", "Heo", ["../figures/cat_pic/cat1.jpg", "../figures/cat_pic/cat2.jpg", "../figures/cat_pic/cat3.jpg"], "Good cat", "eat and sleep", "I only want rich cat")



const db = new PouchDB('user');

// export async function saveUser(user){
//     await db.put({_id: user.getAttr('id'), ...user})
// }

// export async function getUser(){
//     const user = await db.get(0)
// }

// export async function saveAvailableProfile(available){
//     for (const e of available){
//         await db.put({ _id: e.getAttr('id'), ...e });
//     }
// }

// export async function getAvailableProfile(){
//     const result = await db.allDocs({ include_docs: true });
//     return result.rows.map((row) => row.doc).filter(e => e._id !== 0);
// }

// saveUser(test_user)
// saveAvailableProfile(test_available)
