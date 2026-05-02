import express from "express";

const app = express();
app.use(express.json());

app.get("/health", (_, res) => res.send("gateway OK"));

app.listen(3000, () => {
  console.log("gateway running on 3000");
});
