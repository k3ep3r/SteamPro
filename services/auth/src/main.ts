import express from "express";

const app = express();
app.use(express.json());

app.get("/health", (_, res) => res.send("auth OK"));

app.listen(3000, () => {
  console.log("auth running on 3000");
});
