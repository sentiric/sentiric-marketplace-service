// sentiric-marketplace-service/src/routes/marketplace.js

const MarketplaceRoutes = async (fastify, opts) => {
    // Liste endpoint'i: Mevcut tüm recipe'leri listeler
    fastify.get('/api/v1/recipes', async (request, reply) => {
        // Placeholder: Gerçek veri veritabanından çekilecektir
        const recipes = [
            { id: 'RECIPE_HEALTH_SCHED', name: 'Sağlık Randevu Asistanı', category: 'Health', status: 'Available' },
            { id: 'CONNECTOR_SALESFORCE', name: 'Salesforce Bağlayıcısı', category: 'Integration', status: 'Available' },
        ];
        return { recipes };
    });

    // Kurulum endpoint'i: Bir recipe'i tetikler ve dağıtır
    fastify.post('/api/v1/recipes/install/:recipeId', async (request, reply) => {
        const { recipeId } = request.params;
        // TODO: PostgreSQL'de recipe metadata'sını kontrol et
        // TODO: `sentiric-agent-service`'e yeni bir agent şablonu dağıtması için RPC çağrısı yap
        
        return { 
            success: true, 
            recipe_id: recipeId, 
            status: 'Installation Initiated',
            details: 'Dağıtım asenkron olarak başladı. Agent Service kontrol edilmeli.'
        };
    });

    fastify.get('/health', async (request, reply) => {
        return { status: 'ok', uptime: process.uptime() };
    });
};

module.exports = MarketplaceRoutes;