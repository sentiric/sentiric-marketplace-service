// sentiric-marketplace-service/src/config/index.js
require('dotenv').config({ path: require('path').resolve(__dirname, '../../.env') });

const config = {
    ENV: process.env.ENV || 'development',
    HOST: '0.0.0.0',
    PORT: process.env.MARKETPLACE_SERVICE_HTTP_PORT || 11310,
    LOG_LEVEL: process.env.LOG_LEVEL || 'info',
    SERVICE_VERSION: process.env.SERVICE_VERSION || '0.1.0',

    // Bağımlılıklar (API Gateway ve Agent Service'e yazma yetkisi)
    API_GATEWAY_URL: process.env.API_GATEWAY_URL || 'api-gateway:18010',
    AGENT_SERVICE_URL: process.env.AGENT_SERVICE_URL || 'agent-service:12031',

    // Kubernetes/Docker Registry ayarları
    DOCKER_REGISTRY: process.env.DOCKER_REGISTRY || 'ghcr.io/sentiric',
};

module.exports = config;