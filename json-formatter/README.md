# JSON Formatter & Viewer

Tarayıcı içinde, veriyi dışarı göndermeden çalışan tek dosyalık JSON biçimlendirici ve görüntüleyici. İlham alınan araç: [jsonviewer.stack.hu](https://jsonviewer.stack.hu/).

## Özellikler
- Biçimlendir (pretty) ve Sıkıştır (minify)
- Ağaç görünümü (genişlet/daralt hepsi)
- Doğrulama ve hata satır/sütun bilgisi
- Girinti seçimi (2, 4, sekme) ve anahtar sıralama
- Dosyadan yükle, sürükle-bırak, indir, kopyala, yapıştır
- Tema (açık/koyu), kısayol: Ctrl+Enter → Biçimlendir
- Ayarlar modalı: renk paletleri, maksimum derinlik ve maksimum boyut sınırları, son oturumu hatırlama
- Çok dillilik: Türkçe/İngilizce dil seçimi (üst araç çubuğu ve Ayarlar)

## Kullanım
1. `index.html` dosyasını çift tıklayarak açın (veya herhangi bir tarayıcıda dosyayı açın).
2. Sol panele JSON metninizi yapıştırın veya bir dosya yükleyin.
3. "Biçimlendir" ile düzenlenmiş çıktıyı alın; sağ panelde ağaç ve ham görünüm arasında geçiş yapın.
4. Üst araç çubuğundan "Ayarlar" ile palet ve limitleri yapılandırın. Limit aşılırsa işlem güvenli şekilde durdurulur.
5. Dil seçimi için üstteki "Dil" menüsünü veya Ayarlar diyalogundaki "Dil" seçimini kullanın. Seçim tarayıcıda kaydedilir.

## Güvenlik
Tüm işlemler tarayıcınızda gerçekleşir, veriniz ağ üzerinden gönderilmez. Ayrıntılar için `SECURITY.md` dosyasına bakın.

## Teşekkür
- İlham: [jsonviewer.stack.hu](https://jsonviewer.stack.hu/)
