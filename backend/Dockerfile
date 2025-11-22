FROM node:lts
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3000 
# Gera o client e depois inicia
CMD ["sh", "-c", "npx prisma generate && npm start"]
