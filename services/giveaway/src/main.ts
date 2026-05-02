import express from "express";

const app = express();
app.use(express.json());

app.get("/health", (_, res) => res.send("giveaway OK"));

app.listen(3000, () => {
  console.log("giveaway running on 3000");
});
