// app.ts

import cors from "cors";
import express from "express";
import pkg from "pg";

const { Pool } = pkg;
const app = express();

app.set("port", process.env.PORT || 4000);

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "mydb",
  password: "0423",
  port: 5432,
});

app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

// PostgreSQL 데이터 가져오기
app.get("/users", async (req, res) => {
  try {
    // 쿼리 실행
    const result = await pool.query("SELECT * FROM users");
    res.json(result.rows); // 쿼리 결과를 JSON 형식으로 응답
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Database query error" });
  }
});

// PostgreSQL 데이터 가져오기
app.get("/board", async (req, res) => {
  try {
    // 쿼리 실행
    const result = await pool.query("SELECT * FROM board");
    res.json(result.rows); // 쿼리 결과를 JSON 형식으로 응답
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Database query error" });
  }
});

app.get("/board/write/:id", async (req, res) => {
  const { id } = req.params; // URL에서 id를 추출

  try {
    // 인덱스(id)가 일치하는 로우 하나 가져오기
    const result = await pool.query("SELECT * FROM board WHERE idx = $1", [id]);

    // 결과가 존재하는지 확인
    if (result.rows.length === 0) {
      return res
        .status(404)
        .json({ error: "No data found for the provided ID" });
    }

    res.json(result.rows[0]); // 쿼리 결과를 JSON 형식으로 응답
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Database query error" });
  }
});

app.listen(app.get("port"), () => {
  console.log(app.get("port"), "번에서 대기중");
});
