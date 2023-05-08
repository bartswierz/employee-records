//CONNECTS TO OUR MONGODB DATABASE & CREATE NEW COLLECTIONS(I.E. conn.db("new_colleciton"))
import { MongoClient } from "mongodb";

// We ge the mongodb uri from our '.env' file
const connectionString = process.env.ATLAS_URI || "";

const client = new MongoClient(connectionString);

let conn;
try {
  // console.log("trying to connect to db...");
  conn = await client.connect();
} catch (e) {
  // FAILED CONNECTING TO MONGODB
  console.error(e);
}

/* Name of the COLLECTION in MONGODB ATLAS - 
IF WE WANT TO CREATE A NEW COLLECTION, CHANGE THE NAME AND ADD AT LEAST ONE ENTRY, MONGODB WILL DISPLAY NEW COLLECTION
-WE CAN TEST THE TWO BELOW COLLECTIONS IN OUR DATABASE
-MUST RESET SERVER FOR CHANGE TO TAKE EFFECT
*/
// let db = conn.db("sample_training");

// CONNECTING TO DATABASE NAMED 'employee_records' IN MONGODB
let db = conn.db("employee_records");

console.log("db: ", db);
export default db;
