import express from "express";

const app = express();
app.use(express.json());

app.get("/health", (_, res) => res.send("participant OK"));

app.listen(3000, () => {
  console.log("participant running on 3000");
});
