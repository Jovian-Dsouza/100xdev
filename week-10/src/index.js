const { Client } = require("pg");

const client = new Client({
  connectionString:
    "postgresql://Jovian-Dsouza:iMu4DUONrtw8@ep-sweet-brook-a1mazod1.ap-southeast-1.aws.neon.tech",
});

console.log("running ..");
async function createUsersTable() {
  await client.connect();
      const res = await client.query(`
              CREATE TABLE users (
              id SERIAL PRIMARY KEY,
              username VARCHAR(50) UNIQUE NOT NULL,
              email VARCHAR(255) UNIQUE NOT NULL,
              password VARCHAR(255) NOT NULL,
              created_at TIMESTAMP WITH TIMEZONE DEFAULT CURRENT_TIMESTAMP
          )`)
    console.log(res)
    return res;
}

createUsersTable();
