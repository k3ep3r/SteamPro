
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function pickWinners() {

  const active = await prisma.giveaway.findMany({

    where: { isFinished: false },

    include: { participants: true }

  });

  for (const g of active) {

    if (g.participants.length === 0) continue;

    const winner =

      g.participants[Math.floor(Math.random() * g.participants.length)];

    await prisma.giveaway.update({

      where: { id: g.id },

      data: {

        isFinished: true,

        winnerId: winner.userId

      }

    });

    console.log(`🏆 Giveaway ${g.id} winner: ${winner.userId}`);

  }

}

setInterval(pickWinners, 10000);

console.log("🚀 Worker winner system started");

