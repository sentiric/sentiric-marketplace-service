# --- STAGE 1: Builder ---
FROM node:20-slim AS builder

ARG GIT_COMMIT="unknown"
ARG BUILD_DATE="unknown"
ARG SERVICE_VERSION="0.0.0"

WORKDIR /app

# Package dosyalarını kopyala
COPY package.json package-lock.json ./

# Bağımlılıkları kur
RUN npm ci

# Kaynak kodunu kopyala
COPY src ./src
COPY README.md LOGIC.md ./

# --- STAGE 2: Production ---
FROM node:20-slim

WORKDIR /app

# Gerekli sistem bağımlılıkları (Health check için netcat/curl genellikle gerekmez, sadece node runtime)
RUN apt-get update && apt-get install -y --no-install-recommends \
    curl \
    && rm -rf /var/lib/apt/lists/*

# Builder'dan bağımlılıkları ve kodu kopyala
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/src ./src

# YENİ: Build argümanlarını environment değişkenlerine ata
ARG GIT_COMMIT
ARG BUILD_DATE
ARG SERVICE_VERSION
ENV GIT_COMMIT=${GIT_COMMIT}
ENV BUILD_DATE=${BUILD_DATE}
ENV SERVICE_VERSION=${SERVICE_VERSION}

# Node.js uygulamaları genellikle root olmayan kullanıcıyla çalıştırılır
RUN useradd -m -u 1001 appuser
USER appuser

EXPOSE 11310

CMD ["node", "src/server.js"]