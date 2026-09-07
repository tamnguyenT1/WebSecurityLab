// db.js
import Database from "better-sqlite3";
import path from "path";
import { fileURLToPath } from "url";
import fs from "fs";

// Giải quyết path trong ES Module
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Tạo hoặc kết nối đến file cơ sở dữ liệu sqlite
const db = new Database(path.join(__dirname, "data.db"));
db.pragma("journal_mode = WAL");

// Đọc và chạy file SQL
const schemaPath = path.join(__dirname, "schema.sql");
const schema = fs.readFileSync(schemaPath, "utf8");
db.exec(schema);

export default db;
