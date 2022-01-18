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
