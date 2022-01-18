import query from "../index.js";

const sqlString = `CREATE TABLE IF NOT EXISTS library (id SERIAL PRIMARY KEY, week INTEGER, day INTEGER, topic TEXT, link TEXT)`;

async function createLibraryTable() {
  const res = await query(sqlString);
}

createLibraryTable();
