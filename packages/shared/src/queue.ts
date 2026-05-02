import { Queue } from "bullmq";
import IORedis from "ioredis";

const connection = new IORedis({ host: "redis", port: 6379 });

export const participantQueue = new Queue("participant", { connection });
export const winnerQueue = new Queue("winner", { connection });
