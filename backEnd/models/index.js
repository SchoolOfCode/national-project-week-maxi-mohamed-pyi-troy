import query from "../db/index.js";

export async function getPosts() {
  const data = await query(`SELECT * FROM library;`);
  return data.rows;
}

export async function createPost(week, day, topic, link) {
  const data = await query(
    `INSERT INTO library (week, day, topic, link) VALUES ($1, $2, $3, $4) RETURNING *`,
    [week, day, topic, link]
  );
  return data.rows;
}

export async function deletePost(id) {
  const data = await query(`DELETE FROM library WHERE id = $1`, [id]);
  return data.rows;
}

export async function updatePost(id, week, day, topic, link) {
  const data = await query(
    `UPDATE library SET week = $1, day = $2, topic = $3, link = $4 WHERE id = $5`,
    [week, day, topic, link, id]
  );
  return data.rows;
}
