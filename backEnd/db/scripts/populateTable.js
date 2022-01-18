import query from "../index.js";
import libraryData from "../../libraryData.js";

async function populateTable() {
      for (let i = 0; i < libraryData.length; i++) {
            const { week, day, topic, link } = libraryData[i];
            const res = await query(
                  `INSERT INTO library (week, day, topic, link) VALUES ($1, $2, $3, $4) RETURNING library`,
                  [week, day, topic, link]
            );
            console.log(res);
      }
}

populateTable();
