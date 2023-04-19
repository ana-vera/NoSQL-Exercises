import {MongoClient} from "mongodb"

export async function connect(){

try {
    //MongoClient es una funcion asincrona, asi que dsps de ponerle async, podemos ponerle await a esta funcion
    const client = await MongoClient.connect('mongodb://localhost:27017/', {useNewUrlParser: true}) //me conecto a la instancia
    const db = client.db('DevF-DB') //me conecto a la base 
    console.log("Database connected")
    return db
} catch (error) {
    console.log("Something went wrong "+error)
}
}

