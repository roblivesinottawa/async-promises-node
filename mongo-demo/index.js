// const mongoose = require('mongoose')
const { MongoClient } = require('mongodb')

// connect to mongodb
async function main() {
	const uri = "mongodb+srv://tech-rob:NcS9wQnvGXh6X6jP@cluster0.cgebv.mongodb.net/test?authSource=admin&replicaSet=atlas-o7earo-shard-0&readPreference=primary&appname=MongoDB%20Compass&ssl=true";
    const client = new MongoClient(uri)
    try {
        await client.connect();
        await listDatabases(client);
    } catch (error) {
        console.error(error);
    } finally {
        await client.close()
    }

    }

main().catch(console.error)

async function listDatabases(client){
    databasesList = await client.db().admin().listDatabases();
    
    console.log("Databases:");
    databasesList.databases.forEach(db => console.log(` - ${db.name}`));
};

// mongoose.connect('mongodb://localhost/playground')
//     .then(() => console.log('Connected to MongoDB...'))
//     .catch((err) => console.error('Could not connect to MongoDB', err))