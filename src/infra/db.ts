import Database from "better-sqlite3";

export const db = new Database("tarefas.db");

db.exec(`
  CREATE TABLE IF NOT EXISTS appointments (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    start_datetime TEXT,
    end_datetime TEXT,
    description TEXT
  )
`);
