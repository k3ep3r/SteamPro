import express from "express";

const app = express();
app.use(express.json());

app.get("/health", (_, res) => res.send("worker OK"));

app.listen(3000, () => {
  console.log("worker running on 3000");
});
