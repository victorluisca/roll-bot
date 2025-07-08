FROM node:18-slim

WORKDIR /roll-bot

COPY package*.json ./

RUN npm install

COPY . .

CMD ["node", "index.js"]