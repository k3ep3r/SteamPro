
FROM node:20-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install

RUN npm install @prisma/client prisma

COPY . .

EXPOSE 3000

CMD ["node", "apps/gateway/src/index.js"]

