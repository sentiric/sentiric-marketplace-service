# 🛒 Sentiric Marketplace Service

[![Status](https://img.shields.io/badge/status-vision-lightgrey.svg)]()

**Sentiric Marketplace Service**, Sentiric ekosistemi içindeki ajanların, konektörlerin ve diğer eklentilerin keşfedilmesi, dağıtılması ve potansiyel olarak paraya çevrilmesi için bir platform hizmetidir.

**Bu servis, projenin uzun vadeli vizyonunun bir parçasıdır ve şu anda aktif geliştirme aşamasında değildir.**

## 🎯 Temel Sorumluluklar (Vizyon)

*   **Eklenti Listeleme:** Geliştiricilerin ve Sentiric'in oluşturduğu eklentileri (örn: "Sağlık Sektörü için Randevu Agent'ı", "Salesforce Konektörü") listeler.
*   **Tek Tıkla Dağıtım:** Yöneticilerin, `dashboard-ui` üzerinden bir eklentiyi seçip kendi Sentiric kurulumlarına anında dağıtmasını sağlar.
*   **Sürüm Yönetimi:** Eklentilerin sürümlerini takip eder ve güncelleme bildirimleri sunar.
*   **Monetizasyon (Gelecek):** Üçüncü parti geliştiricilerin kendi eklentilerini satabileceği bir pazar yeri altyapısı sunar.

## 🛠️ Teknoloji Yığını (Planlanan)

*   **Dil:** Node.js veya Go
*   **Veritabanı:** PostgreSQL

## 🔌 API Etkileşimleri (Planlanan)

*   **Gelen (Sunucu):**
    *   `sentiric-dashboard-ui` (REST/JSON): Eklentileri listelemek ve kurmak için.
*   **Giden (İstemci):**
    *   `sentiric-agent-service`: Yeni bir agent şablonu dağıtmak için.
    *   `sentiric-connectors-service`: Yeni bir konektör yapılandırması dağıtmak için.

## 🤝 Katkıda Bulunma

Bu servis henüz geliştirme aşamasında olmasa da, fikirlerinizi ve önerilerinizi `sentiric-governance` reposunda bir `Issue` açarak paylaşabilirsiniz.

---
## 🏛️ Anayasal Konum

Bu servis, [Sentiric Anayasası'nın (v11.0)](https://github.com/sentiric/sentiric-governance/blob/main/docs/blueprint/Architecture-Overview.md) **Zeka & Orkestrasyon Katmanı**'nda yer alan merkezi bir bileşendir.