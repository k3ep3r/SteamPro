
import express from "express";

const app = express();

app.get("/health", (_, res) => {

  res.json({ ok: true });

});

app.get("/", (_, res) => {

  res.send("🚀 GATEWAY STABLE OK");

});

app.listen(3000, "0.0.0.0", () => {

  console.log("Gateway listening on 3000");

});

