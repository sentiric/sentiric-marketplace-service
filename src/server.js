// sentiric-marketplace-service/src/server.js
const fastify = require('fastify');
const config = require('./config');
const marketplaceRoutes = require('./routes/marketplace');

const logger = fastify({
    logger: {
        level: config.LOG_LEVEL,
        transport: config.ENV === 'development' ? { target: 'pino-pretty' } : undefined,
        serializers: {
            req: (req) => ({
                method: req.method,
                url: req.url,
                hostname: req.hostname,
                remoteAddress: req.ip,
            }),
            res: (res) => ({
                statusCode: res.statusCode
            }),
        }
    }
});

const server = fastify({ logger: logger });

// Yönlendirme tanımlamalarını yükle
server.register(marketplaceRoutes);

const start = async () => {
    try {
        await server.listen({ host: config.HOST, port: config.PORT });
        server.log.info(`🚀 ${config.PROJECT_NAME} listening on http://${config.HOST}:${config.PORT}`);
    } catch (err) {
        server.log.error(err);
        process.exit(1);
    }
};

start();