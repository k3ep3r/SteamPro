import express from "express";

const app = express();
app.use(express.json());

app.get("/health", (_, res) => res.send("OK"));

app.use("/auth", (req, res) => res.send("auth service"));
app.use("/users", (req, res) => res.send("user service"));
app.use("/giveaways", (req, res) => res.send("giveaway service"));
app.use("/participants", (req, res) => res.send("participant service"));

app.listen(3000, () => console.log("Gateway running"));
