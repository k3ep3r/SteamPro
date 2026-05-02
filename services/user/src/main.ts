import express from "express";

const app = express();
app.use(express.json());

app.get("/health", (_, res) => res.send("user OK"));

app.listen(3000, () => {
  console.log("user running on 3000");
});
