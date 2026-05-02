
const express = require("express");

const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

const app = express();

app.use(express.json());

// REAL Telegram auth (stored in DB)

app.post("/auth/telegram", async (req, res) => {

  try {

    const { tgId, username } = req.body;

    if (!tgId) {

      return res.status(400).json({ error: "tgId required" });

    }

    const user = await prisma.user.upsert({

      where: { tgId },

      update: { username },

      create: { tgId, username }

    });

    res.json({

      success: true,

      user

    });

  } catch (e) {

    console.error(e);

    res.status(500).json({ error: "internal error" });

  }

});

// join giveaway

app.post("/join/:id", async (req, res) => {

  const { tgId } = req.body;

  if (!tgId) {

    return res.status(400).json({ error: "auth required" });

  }

  const user = await prisma.user.findUnique({ where: { tgId } });

  res.json({

    success: true,

    user,

    giveawayId: req.params.id

  });

});

app.get("/health", (_, res) => {

  res.json({ ok: true });

});

app.listen(3000, "0.0.0.0", () => {

  console.log("🚀 REAL SAAS GATEWAY RUNNING");

});

