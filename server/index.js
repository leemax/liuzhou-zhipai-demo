import express from "express";
import pkg from "pg";
import { createClient } from "redis";

const { Pool } = pkg;

const PORT = 4000;
const app  = express();

app.get("/api/health", (_, res) => res.json({ ok: true, ts: Date.now() }));

/* ===== 测试数据库连通性 ===== */
const pool  = new Pool({ connectionString: process.env.DATABASE_URL });
const redis = createClient({ url: process.env.REDIS_URL });

app.get("/api/check", async (_, res) => {
  try {
    const pgRes = await pool.query("SELECT NOW()");
    await redis.connect();
    const pong  = await redis.ping();
    await redis.quit();
    res.json({ postgres: pgRes.rows[0].now, redis: pong });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

app.listen(PORT, () => console.log(`API ready on :${PORT}`));
