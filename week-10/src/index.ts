import { Client } from "pg";

// const client = new Client({
//   connectionString : "postgresql://postgres:mysecretpassword@localhost:5432/postgres?sslmode=disable"
// });


console.log("running ..")
async function createUsersTable() {
    // client.connect();
//     const res = await client.query(`CREATE TABLE users (
//             id SERIAL PRIMARY KEY,
//             username VARCHAR(50) UNIQUE NOT NULL,
//             email VARCHAR(255) UNIQUE NOT NULL,
//             password VARCHAR(255) NOT NULL,
//             created_at TIMESTAMP WITH TIMEZONE  DEFAULT CURRENT_TIMESTAMP
//         )`)
//   console.log(res)
//   return res;
}

createUsersTable()