import { Pool } from "pg";

const pool = new Pool({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

export async function query({ query, values = [] }) {
  try {
    const client = await pool.connect();
    const { rows } = await client.query(query, values);
    client.release();
    return rows;
  } catch (error) {
    return { error };
  }
}
