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
        const user = await db.allDocs()
        console.log(user)
        console.log(user.rows)
        return user.rows[0].doc
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
