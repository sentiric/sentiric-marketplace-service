### 📄 File: `TASKS.md` | 🏷️ Markdown

```markdown
# 🛒 Sentiric Marketplace Service - Görev Listesi

Bu servisin mevcut ve gelecekteki tüm geliştirme görevleri, platformun merkezi görev yönetimi reposu olan **`sentiric-tasks`**'ta yönetilmektedir.

➡️ **[Aktif Görev Panosuna Git](https://github.com/sentiric/sentiric-tasks/blob/main/TASKS.md)**

---
Bu belge, servise özel, çok küçük ve acil görevler için geçici bir not defteri olarak kullanılabilir.

## Faz 1: Minimal İşlevsellik (INFRA-02)
- [x] Temel Node.js projesi ve Fastify iskeleti oluşturuldu.
- [x] REST API endpoint'leri (`/recipes`, `/install`) eklendi.
- [ ] PostgreSQL bağlantısı ile Recipe listesini dinamik olarak sunma. (CONTROL-MP-01)
- [ ] Agent Service'e gRPC istemcisi ekleme ve `DeployAgentRecipe` RPC'sini çağırma mantığı. (CONTROL-MP-02)