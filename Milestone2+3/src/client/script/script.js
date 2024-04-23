import PouchDB from "pouchdb";
import { Available } from "../utils/available";
import { User } from "../utils/user";


const test_available = [new Available("tung", "cho", 3, "Female", "cat"), new Available("Minh", "gau", 3, "Male", "cat"), new Available("Minh", "gau", 3, "Male", "cat") ]

const test_user = new User("ktle@umass.edu", "May", 3, "Male", "cat", "Heo", [], "Good cat", "eat and sleep", "I only want rich cat")



const db = new PouchDB('user');


async function saveUser(user){
    await db.put({_id: 1, user})
}




