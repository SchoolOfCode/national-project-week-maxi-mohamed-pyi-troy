import query from "../db/index.js";

export async function getPosts() {
  const data = await query(`SELECT * FROM library`);
  return data.rows;
}
