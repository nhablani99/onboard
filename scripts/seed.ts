import Database from "better-sqlite3";
import bcrypt from "bcryptjs";
import path from "path";

const dbPath = path.join(process.cwd(), "onboard.db");
const db = new Database(dbPath);

db.exec(`
  CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    email TEXT UNIQUE NOT NULL,
    password TEXT NOT NULL,
    created_at TEXT DEFAULT (datetime('now'))
  )
`);

const email = "hablaniniranjan@gmail.com";
const existing = db.prepare("SELECT id FROM users WHERE email = ?").get(email);

if (!existing) {
  const hash = bcrypt.hashSync("password123", 10);
  db.prepare("INSERT INTO users (name, email, password) VALUES (?, ?, ?)").run("Niranjan", email, hash);
  console.log("Seeded user: hablaniniranjan@gmail.com / password123");
} else {
  console.log("User already exists, skipping seed.");
}

db.close();
