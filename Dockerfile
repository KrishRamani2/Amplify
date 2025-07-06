# 1. Base image
FROM node:20-alpine AS deps
WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci

COPY . .
RUN npm run build

# 2. Production image
FROM node:20-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production

COPY --from=deps /app/package.json ./package.json
COPY --from=deps /app/next.config.mjs ./next.config.mjs
COPY --from=deps /app/.next ./.next
COPY --from=deps /app/node_modules ./node_modules


EXPOSE 3000
CMD ["npm", "start"]
