# Stage 1: build static site
FROM node:22-slim AS builder
# git нужен quartz v5 install-plugins (community-плагины)
RUN apt-get update && apt-get install -y --no-install-recommends git && rm -rf /var/lib/apt/lists/*
# host lockfile записан npm 11; штатный npm образа спотыкается на npm ci
RUN npm install -g npm@11
WORKDIR /usr/src/app
COPY package.json package-lock.json ./
# npm install (не ci): EUSAGE на npm-11 lockfile внутри build-контекста
RUN npm install --no-audit --no-fund
COPY . .
# прямой вызов: npx резолвит чужой npm-пакет quartz вместо репозиторного bin
RUN node ./quartz/bootstrap-cli.mjs build

# Stage 2: serve with nginx
FROM nginx:alpine
COPY --from=builder /usr/src/app/public /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
