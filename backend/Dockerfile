FROM node:20-alpine

WORKDIR /app

# Instalar dependências para Prisma
RUN apk add --no-cache openssl

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy prisma schema
COPY prisma ./prisma/

# Generate Prisma Client for Alpine
RUN npx prisma generate

# Copy source code
COPY src ./src/

# Create non-root user
RUN addgroup -g 1001 -S nodejs
RUN adduser -S nodejs -u 1001
RUN chown -R nodejs:nodejs /app
USER nodejs

EXPOSE 3000

CMD ["sh", "-c", "npx prisma db push && npm start"]