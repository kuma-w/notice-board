// app.ts

import cors from "cors";
import express from "express";
import pkg from "pg";

const { Pool } = pkg;
const app = express();

app.set("port", process.env.PORT || 4000);

// PostgreSQL 클라이언트 설정 (환경 변수나 하드코딩된 값을 사용할 수 있음)
const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "mydb",
  password: "0423",
  port: 5432, // PostgreSQL의 기본 포트
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
    console.log(result);
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
    console.log(result);
    res.json(result.rows); // 쿼리 결과를 JSON 형식으로 응답
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Database query error" });
  }
});

app.listen(app.get("port"), () => {
  console.log(app.get("port"), "번에서 대기중");
});
