const db = new PouchDB('user');

export async function saveUser(user){
    try{
        await db.put({_id: user.getId(), ...user})
        console.log("save user succesfully")
    }catch(e){
        console.log(e)
    }
    
}

export async function getUser(){
    const user = await db.get(0)
}

export async function saveAvailableProfile(available){
    try {
        for (const e of available){
            await db.put({ _id: e.getId(), ...e });
        }
        console.log("save profile successfully")
    }catch(e){
        console.log(e)
    }
}

export async function getAvailableProfile(){
    try {
        const result = await db.allDocs({ include_docs: true });
        console.log("get data sucessful")
        return result.rows.map((row) => row.doc).filter(e => e._id !== '0');
    }
    catch (e) {
        console.log(e)
    }
}