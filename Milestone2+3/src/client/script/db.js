import PouchDB from "pouchdb";

const db = new PouchDB('user');

export async function saveUser(user){
    await db.put({_id: user.getAttr('id'), ...user})
}

export async function getUser(){
    const user = await db.get(0)
}

export async function saveAvailableProfile(available){
    for (const e of available){
        await db.put({ _id: e.getAttr('id'), ...e });
    }
}

export async function getAvailableProfile(){
    try {
        const result = await db.allDocs({ include_docs: true });
        return result.rows.map((row) => row.doc).filter(e => e._id !== 0);
    }
    catch (e) {
        console.log(e)
    }
}