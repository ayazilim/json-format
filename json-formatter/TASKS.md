# Görevler (TASKS)

Bu dosya, projede yapılan işleri ve planlanan görevleri takip etmek için kullanılır. Lütfen güncel tutun.

## Tamamlananlar
- [x] Tek dosyalık (`index.html`) yerel JSON biçimlendirici ve görüntüleyici oluşturuldu
- [x] Dosyadan JSON yükleme (file input ve sürükle-bırak)
- [x] Biçimlendir (pretty), Sıkıştır (minify), Doğrula eylemleri
- [x] Ağaç görünümü (genişlet/daralt hepsi)
- [x] Girinti seçimi (2, 4, sekme) ve anahtar sıralama seçeneği
- [x] Panoya kopyalama ve panodan yapıştırma
- [x] JSON kaydet (indir) özelliği
- [x] Tema (açık/koyu) ve kalıcılık (localStorage)
- [x] Hata konumunu (satır/sütun) tespit edip gösterme
- [x] Ayarlar modalı (renk paletleri, max derinlik, max boyut, son oturumu hatırla)
- [x] Çok dillilik (TR/EN) – üst çubuk ve Ayarlar'dan dil seçimi, metinlerin dinamik değişimi (localStorage ile kalıcı)
- [x] Bozuk JSON'u onarma ve biçimlendirme (yorum temizleme, trailing comma kaldırma, tek tırnak/backtick string dönüştürme, anahtarları otomatik tırnaklama vb.)
- [x] Geçersiz JSON durumunda ham görünümde (RAW) renklendirme ve renk paletlerinin uygulanması (lenient pretty/minify çıktısı `innerHTML` ile renklendirildi)
- [x] `hreflang` alternatif dil linkindeki URL düzeltildi (`?lang=en`)
 - [x] README iki dilli (EN/TR) olacak şekilde güncellendi ve genişletildi
 - [x] GitHub depo açıklaması (TR/EN) hazırlandı
 - [x] Desktop mod responsive: `header` wrap ve `.toolbar` genişlik düzeni
 - [x] A11y: görünür odak halkaları, `tablist/tabpanel` rolleri
 - [x] Hata satırına atla: doğrulama/parse hatasında ilgili satıra kaydırma ve görsel vurgu
 - [x] Tema entegrasyonu: `prefers-color-scheme` algılama ve `theme-color` meta güncelleme
 - [x] Büyük JSON performansı: Web Worker ile parse, 200KB üstünde worker kullanımı
 - [x] PWA: `serviceWorker` kaydı, `display_override` ilavesi

## Sıradaki İyileştirmeler
- [ ] Ağaç görünümünde arama/filtreleme
- [ ] Kullanıcı ayarlarını (girinti, anahtar sıralama) kalıcı yapma (kısmen: ayarlar modali kaydediyor)
- [ ] Büyük dosyalar için performans optimizasyonları (sanal listeleme)
- [ ] Klavye kısayollarını genişletme (örn. Ctrl+S kaydet)
- [ ] Erişilebilirlik (A11y) geliştirmeleri
- [ ] PWA/offline desteği (service worker)
- [ ] Birim testleri ve e2e senaryoları

## Notlar
- Uygulama tamamen istemci tarafında çalışır, ağ üzerinden veri göndermez.
- İlham alınan araç: [jsonviewer.stack.hu](https://jsonviewer.stack.hu/)

## Yapılan Son Düzenlemeler
- [x] Tam ekran modunda palet menüsünün soluna "tam ekrandan çık" butonu eklendi; i18n ve görünürlük mantığı bağlandı
- [x] Koyu temalar için 5 yeni palet eklendi (Noir, Derin Deniz, Gece Baykuşu, Gölgeler, Galaksi)
- [x] Renk paletlerine 5 yeni canlı palet eklendi (Aurora, Tropik, Magma, Elektrik, Şeker)
- [x] Footer yüksekliği düşürüldü (`--footer-h: 56px`) ve `page` konteyneri yüksekliği `calc(100vh - var(--footer-h))` ile ayarlandı; boş durumda gereksiz dikey scrollbar engellendi.
- [x] Editör highlight katmanının (`.editor-highlight`) `overflow` değeri `hidden` yapıldı; iç içe scrollbar görünümü kaldırıldı. 
- [x] Çift scrollbar sorunu: dış kaydırma kapatıldı, kaydırma `.editor` içinde toplandı; `.viewer` overflow gizlendi, textarea yatay scroll devre dışı bırakıldı.
- [x] Scrollbar temalandırma: palet rengine göre dinamik scrollbar (thumb/hover) rengi atandı; karanlık modda beyaz kalma sorunu giderildi.