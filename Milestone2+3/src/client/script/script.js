import { saveAvailableProfile, saveUser } from "./db.js";
import { Available } from "../utils/available.js";
import { User } from "../utils/user.js";


const test_available = [new Available(1, "tung", "cho", 3, "Female", ["../figures/cat_pic/cat4.jpg", "../figures/cat_pic/cat5.jpg", "../figures/cat_pic/cat6.jpg"]), new Available(2, "Minh", "gau", 3, "Male", ["../figures/cat_pic/cat1.jpg", "../figures/cat_pic/cat2.jpg", "../figures/cat_pic/cat3.jpg"]), new Available(3, "Khiem", "gau", 3, "Male", ["../figures/cat_pic/cat1.jpg", "../figures/cat_pic/cat2.jpg", "../figures/cat_pic/cat3.jpg"] ) ]
const test_user = new User(0, "ktle@umass.edu", "May", 3, "Male", "cat", "Heo", ["../figures/cat_pic/cat1.jpg", "../figures/cat_pic/cat2.jpg", "../figures/cat_pic/cat3.jpg"], "Good cat", "eat and sleep", "I only want rich cat")
await saveUser(test_user)
await saveAvailableProfile(test_available)

