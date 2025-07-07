# Stage 1: Build dependencies
FROM node:20-alpine AS deps

# Enable more memory for node
ENV NODE_OPTIONS=--max_old_space_size=2048

WORKDIR /app

# Install dependencies
COPY package.json package-lock.json ./
RUN npm ci

# Copy all files (after installing deps to use Docker cache better)
COPY . .

# Build Next.js app
RUN npm run build

# Stage 2: Production image
FROM node:20-alpine AS runner

WORKDIR /app

# Copy only what's needed for production
COPY --from=deps /app/.next ./.next
COPY --from=deps /app/package.json ./package.json
COPY --from=deps /app/node_modules ./node_modules

EXPOSE 3000

CMD ["npm", "start"]
