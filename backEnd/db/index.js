import pg from "pg";

const pool = new pg.Pool({
      host: signerOptions.hostname,
      port: signerOptions.port,
      user: signerOptions.username,
      database: "my-db",
      password: getPassword,
      ssl: { rejectUnauthorized: false },
});

export default function query(text, params) {
      return pool.query(text, params);
}
