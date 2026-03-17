# Stage 1: build static site
FROM node:22-slim
WORKDIR /usr/src/app
COPY package.json package-lock.json* ./
RUN npm ci
COPY . .
