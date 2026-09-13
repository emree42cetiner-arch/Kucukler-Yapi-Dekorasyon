import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Calendar } from "lucide-react";
import { motion } from "framer-motion";
import blogBuilding from "@/assets/blog-building.jpg";
import blogSafety from "@/assets/blog-safety.jpg";
import blogSustainable from "@/assets/blog-sustainable.jpg";

const blogPosts: Record<string, any> = {
  "fatih-asma-tavan-catlaklari-gizli-isik": {
    title: "Fatih ve Sarayağası Evlerinde Asma Tavan Çatlakları ve Gizli Işık Çökme Tehlikesi: Küçükler Yapı Dekorasyon Kusursuz Alçıpan Rehberi",
    date: "12 Eylül 2026",
    image: "/images/blog/blog-asma-tavan-gizli-isik.jpg",
    content: `Fatih, Sarayağası veya Balat civarındaki yüksek tavanlı, eski tip evinizi yenilerken salonunuza modern bir hava katmak istediniz. Ustanız harika bir "gizli ışık bandı" ve asma tavan yaptı, spotlar takıldı, ev bir anda lüks bir otele benzedi. Ancak aradan sadece 3-4 ay geçtikten sonra, tavanın tam ortasında boydan boya uzanan o sinir bozucu kılcal çatlağı gördünüz. İşler daha da kötüye gitti; spotların etrafında dalgalanmalar başladı ve tavan yavaş yavaş aşağı doğru bel verdi (sarktı).

Eğer bu senaryoyu yaşıyorsanız, yalnız değilsiniz. Fatih bölgesindeki yapı stoğunun dinamikleri, yeni yapılan sitelerdeki binalardan çok farklıdır. Bu yorgun binalara, sıradan "ezbere" yöntemlerle asma tavan yapmak, o tavanın ailenizin üzerine çökmesiyle sonuçlanabilecek ciddi bir güvenlik riski yaratır.

Küçükler Yapı Dekorasyon olarak; alçıpan ve asma tavan işlerini sadece bir "süsleme" sanatı olarak değil, milimetrik hesaplanması gereken bir statik yük projesi olarak görüyoruz. Bu rehberde; asma tavanların neden çatladığını, piyasadaki standart ustaların malzemeden çalmak için yaptığı gizli hileleri ve tavanlarınızı Avrupa (TS EN) kalite standartlarında nasıl ömürlük inşa ettiğimizi anlatıyoruz.

## 1. Fatih'in Eski Binalarında Asma Tavanlar Neden Çabuk Çatlar?

Sorunun kaynağı genellikle kullanılan boya veya alçı değil, binanızın kendi yapısı ve ustanın bu yapıya uygun olmayan taşıyıcı iskelet (karkas) kurmasıdır.

- **Bina Titreşimleri ve Esneme:** Fatih, trafiğin ve yaşamın çok yoğun olduğu bir ilçedir. Özellikle ana caddelere veya otobüs güzergahlarına yakın binalar, ağır vasıtalar geçtikçe mikroskobik düzeyde titrer. Eski binalar bu titreşimde esner. Eğer asma tavan bu esnemeyi tolere edecek "esnek eklemlere" sahip değilse, en zayıf noktası olan alçıpan ek yerlerinden çatlar.
- **Ahşap Bağdadi Tavanlar veya Yorgun Betonlar:** Sarayağası ve çevresindeki bazı çok eski binaların tavanlarında eski ahşap karkaslar bulunur. Ahşap, neme ve sıcağa göre nefes alan, şişip daralan canlı bir malzemedir. Bu tavana doğrudan alçıpan vidalamak çatlamayı garantilemektir. Eski betonlarda ise yanlış dübel kullanımı tavanın zamanla kendini bırakmasına (sarkmasına) neden olur.

## 2. Şık Tavanların Arkasına Saklanan "Ucuza Kaçma" Hataları

Küçükler Yapı Dekorasyon ekipleri olarak, tadilata gittiğimiz evlerde daha önce yapılmış ancak sarkmış tavanları söktüğümüzde hep aynı "maliyet kısma" hatalarıyla karşılaşıyoruz:

- **Sac Profillerin İnce (0.35 mm) Olması:** Alçıpan plakalarını tutan o metal iskelet (U ve C profilleri) normalde en az 0.50 mm veya 0.60 mm kalınlığında galvaniz sac olmalıdır. Piyasada rekabet edebilmek için "teneke gibi" incecik (0.35 mm) profiller kullanılır. Bu profiller alçıpanın ağırlığını taşıyamaz ve esner.
- **Karkas Aralıklarının Geniş Tutulması:** Normal standartlarda, tavan profilleri arasında en fazla 40-50 cm mesafe olmalıdır. Usta profilden ve zamandan tasarruf etmek için bu aralığı 60-70 cm'ye çıkarırsa, iki profil arasında kalan alçıpan kendi ağırlığıyla hamak gibi aşağı sarkar.
- **Derz Bandı Yerine Sadece Alçı Çekilmesi:** Alçıpan levhaların birleştiği yerlere, esnemeyi önleyen özel cam elyafı veya delikli kağıt "derz bandı" çekilmek zorundadır. Ancak bu işlem el oyaladığı için bazı ustalar araya sadece standart saten alçı doldurup geçer. İlk sarsıntıda veya üst kat komşu zıpladığında o çizgi boydan boya çatlar.
- **Plastik Dübel Hatası (Ölümcül Hata):** Asma tavanı üstteki ana betona asmak için KESİNLİKLE çelik çekme dübel kullanılmalıdır. Plastik dübel kullanılırsa, olası bir yangında veya yaz sıcağında plastik erir/gevşer ve koca tavan içindeki tüm profillerle birlikte yere iner.

## 3. Küçükler Yapı Dekorasyon Çatlamaz Asma Tavan Protokolü

Biz evinize asma tavan yaparken, "Dışarıdan güzel görünsün yeter" mantığıyla değil; "Üzerine adam çıksa taşıyacak kadar sağlam olsun" mühendisliğiyle çalışıyoruz.

### Adım 1: Lazer Nivo ile Kot Alma ve Projelendirme

Önce odanın ortasına 360 derece dijital lazer nivo kuruyoruz. Eski binaların tavanları genellikle yamuktur; bir köşe ile diğer köşe arasında 4-5 cm kot farkı olabilir. Lazer sayesinde tavanın milimetrik olarak terazide (düz) olmasını sağlıyoruz.

### Adım 2: Çelik Dübel ve Çift İskelet (Karkas) Sistemi

Tavanı ana betona asarken sadece çelik gömlekli askı dübelleri kullanıyoruz. Taşıyıcı iskeleti kurarken "Tek Yönlü" değil, birbirine 90 derece açıyla kilitlenen "Çift Yönlü (Ana taşıyıcı ve Tali Taşıyıcı)" profil sistemi kuruyoruz. Bu sayede tavan bir çarşaf gibi değil, sağlam bir çelik ağ gibi örülüyor.

### Adım 3: Esnek Gölge Derzi (Shadow Gap) Tekniği

Tavan çatlaklarının çoğu duvar diplerinden başlar. Bunu engellemek için, asma tavanı duvara sıfıra sıfır yapıştırmıyoruz! Duvar ile asma tavan arasına özel Z profiller koyarak 1 santimetrelik bir boşluk (Gölge Derzi) bırakıyoruz.

**Nasıl Çalışır?:** Bina sarsıldığında, duvar esner ancak asma tavan bu boşluk sayesinde duvardan bağımsız olarak "yüzer" ve asla çatlamaz. Ayrıca bu boşluk tasarımsal olarak çok şık, modern bir hat oluşturur.

### Adım 4: Doğru Vidalama (Boru Tipi Borazan Vida)

Alçıpan levhaları profillere sabitlerken, vidaları ne çok derine gömüp alçıpanı patlatıyor ne de dışarıda bırakıyoruz. Standartlara uygun olarak her 20 santimetrede bir korozyona (pasa) dayanıklı siyah fosfat kaplı borazan vidalar kullanıyoruz.

### Adım 5: Q4 Kalitesinde Yüzey İşlemi (Yok Olan Ek Yerleri)

Ek yerlerine kendinden yapışkanlı cam elyaf derz bandı uyguluyor ve üzerine özel derz dolgu alçısı çekiyoruz. Kuruduktan sonra geniş spatulalarla perdahlama yapıyor, spot ışıkları yandığında bile en ufak bir dalgalanma veya pürüz görünmeyecek (Q4 Avrupa Yüzey Standardı) kusursuz pürüzsüzlükte bir tavan teslim ediyoruz.

## 4. Kullanılan Malzemelerin Teknik Standartları

Tavanınızın ağırlığını taşıyacak olan sistem, marketten alınan rastgele profillerle yapılamaz. Tavan projenizde sadece aşağıdaki TSE normlarına uygun malzemeler kullanılmaktadır.

| Kullanılan Malzeme | İlgili Kalite Standardı | Müşteri İçin Ne Anlama Geliyor? (Türkçesi) |
| --- | --- | --- |
| Metal Profiller (U ve C) | TS EN 14195 | Et kalınlığı minimum 0.50 mm olan, paslanmaya karşı galvanizle kaplanmış, eğilmez çelik iskelet. |
| Alçı Levha (Alçıpan) | TS EN 520 | A1 Sınıfı yanmaz özellikte. Islak hacimlerde neme dayanıklı Yeşil (WR), yangın riski olan yerlerde Bordo (FR) plaka kullanımı. |
| Bağlantı Elemanları | TS EN 14566 | Tavanı tutan vidaların zamanla terleme yapıp dışarıya "sarı pas lekesi" kusmasını engelleyen özel üretim fosfatlı vidalar. |
| Askı Dübeli | Çelik Çakmalı Dübel | Plastik dübel KULLANILMAZ. 100 kiloluk yükü bile tavanda milim esnemeden tutabilen çelik kilit sistemi. |

## 5. Asma Tavan İşini Teslim Alırken Dikkat Etmeniz Gerekenler (Denetim Listesi)

Evinizi bir ustaya teslim ettiğinizde, tavan tamamen alçıyla kapatılmadan önce (iskelet halindeyken) şu kontrolleri mutlaka yapın:

[ ] "Tavanı üstteki betona tuttururken plastik dübel mi kullandınız, çelik çekme dübel mi?" (Plastik dübel kullanılmışsa o işi hemen durdurun).
[ ] "Profillerin et kalınlığı nedir? 0.35 mm mi, 0.50 mm mi?" (İnce profil kullanılmışsa tavanınız 6 ay sonra aşağı sarkar).
[ ] "Alçıpan levhalarının ek yerlerine file (derz bandı) çektiniz mi?" (File çekilmemişse çatlama garanti demektir).
[ ] "Vidalar arası mesafe ne kadar?" (Her vida arası en fazla bir karış, yani 20 cm olmalıdır).
[ ] "Duvar birleşim yerlerine sıfıra sıfır mı dayadınız, esneme payı (gölge derz veya derz bandı) bıraktınız mı?"

## Tavanlarınız Başınıza Değil, Evinizin Kalitesine Taç Olsun

Fatih, Sarayağası veya Karagümrük'teki dairenizin yüksek ve ferah tavanlarını, ucuz işçilik ve yanlış malzemelerle tehlikeli bir yüke dönüştürmeyin. Asma tavan ve gizli ışık bandı; ustalık, geometri ve malzeme biliminin birleştiği hassas bir iştir.

Küçükler Yapı Dekorasyon olarak; ne ışık yandığında gözünüzü tırmalayan dalgalı yüzeyler bırakıyor ne de aylar sonra baş gösterecek çatlaklarla sizi baş başa bırakıyoruz. TSE belgeli malzemelerimiz, lazer destekli kusursuz ölçüm sistemimiz ve Q4 yüzey kalitesi garantimizle salonlarınızı baştan yaratıyoruz.

Yıllarca çatlamadan, esnemeden, ilk günkü pürüzsüzlüğünde kalacak tavan tasarımları için uzman keşif ekibimizle şimdi iletişime geçin.

## Kaynakça ve Dış Referanslar

- TSE (Türk Standardları Enstitüsü): TS EN 14195 — Alçı Levha Sistemleri İçin Metal Taşıyıcı Bileşenler - Özellikler ve Deney Yöntemleri.
- TSE (Türk Standardları Enstitüsü): TS EN 520+A1 — Alçı Levhalar - Tarifler, Gerekler ve Deney Yöntemleri.
- TSE (Türk Standardları Enstitüsü): TS EN 13963 — Alçı Levhalar İçin Derz Malzemeleri.
- Çevre, Şehircilik ve İklim Değişikliği Bakanlığı: Binaların Yangından Korunması Hakkında Yönetmelik (İç Mekan Tavan Kaplamaları Yanıcılık Sınıfları).
- Türkiye Alçı Üreticileri Derneği (ALÇIDER): Doğru Alçıpan Uygulama Kılavuzları ve Yüzey Kalite Sınıfları (Q1-Q4).`,
    relatedArticles: [
      { slug: "fatih-komple-ev-tadilati-duvar-kirimi", title: "Duvar Kırımı ve Statik Güvenlik" },
      { slug: "fatih-banyo-tadilati-su-yalitimi", title: "Banyo Tadilatı ve Su Yalıtımı" },
      { slug: "istanbul-komple-ev-tadilati", title: "Komple Ev Tadilatı Süresi" }
    ],
    externalLinks: [
      { title: "TSE - TS EN 14195 Metal Taşıyıcı Bileşenler", url: "https://www.tse.org.tr/" },
      { title: "ALÇIDER - Türkiye Alçı Üreticileri Derneği", url: "https://www.alcider.org.tr/" },
      { title: "Çevre Bakanlığı - Yangından Korunma Yönetmeliği", url: "https://www.csb.gov.tr/" },
      { title: "Fatih Belediyesi - Ruhsat ve İzinler", url: "https://www.fatih.bel.tr/" }
    ]
  },
  "fatih-komple-ev-tadilati-duvar-kirimi": {
    title: "Fatih ve Sarayağası'nda Komple Ev Tadilatı ve Duvar Kırımı: Küçükler Yapı Dekorasyon Statik Güvenlik Rehberi",
    date: "12 Eylül 2026",
    image: "/images/blog/blog-duvar-kirimi.jpg",
    content: `Fatih, Sarayağası, Karagümrük veya Balat civarında eski ve nostaljik bir daire satın aldığınızı ya da yıllardır oturduğunuz evi modernize etmek istediğinizi düşünün. Karanlık koridorlardan, küçük odalardan kurtulup; ferah bir "Amerikan Mutfak" (açık mutfak) veya devasa bir salon hayal ediyorsunuz. Ustanızı çağırıyorsunuz, eline balyozu alıyor ve "Şu aradaki duvarı yıkarsak burası saray gibi olur abi" diyor.

İşte tam o an, binanızın ve ailenizin kaderini belirleyecek saniyelerdesiniz.

Eski İstanbul dokusuna sahip Fatih bölgesindeki binalar, yeni nesil siteler gibi sadece beton kolonlarla ayakta durmaz. Çoğu yığma, yarı yığma veya eski tip karkas (betonarme) sistemle inşa edilmiştir. Bilinçsizce yıkılan tek bir duvar bile, olası bir İstanbul depreminde binanın iskambil kağıdı gibi çökmesine neden olabilir.

Küçükler Yapı Dekorasyon olarak, tadilat ve dekorasyonun sadece göze hitap eden bir "makyaj" değil, aynı zamanda mühendislik temelli bir "yapısal koruma" süreci olduğuna inanıyoruz. Bu rehberde; Fatih'teki eski binalarda duvar yıkımı ve oda birleştirme işlemlerinin tehlikelerini, taşıyıcı duvar ile bölme duvar arasındaki hayati farkları ve evinizi yenilerken binanızı nasıl ayakta tutacağınızı tüm yasal/teknik boyutlarıyla anlatıyoruz.

## 1. Fatih'in Yapı Stoğu Gerçeği: Eviniz "Yığma" mı, "Betonarme" mi?

Tadilata başlamadan önce binanızın anatomisini bilmek zorundasınız. Fatih'te 1999 öncesi yapılmış binalar genellikle iki farklı sistemden biriyle inşa edilmiştir ve her ikisinin tadilat kuralı birbirinden tamamen farklıdır:

### Yığma Binalar (Kolonsuz Binalar)

Özellikle 1960-1980 arası yapılan 3-4 katlı Sarayağası evlerinin çoğu yığmadır. Bu binalarda kolon yoktur. Binanın tüm ağırlığını (üst katları ve çatıyı) duvarların ta kendisi taşır.

**Ölümcül Hata:** Yığma bir binada "Salonla mutfağı birleştirelim" diyerek aradaki harman tuğla duvarı yıkmak, kelimenin tam anlamıyla bindiğiniz dalı kesmektir. Üst katın tüm yükü boşluğa düşer, tavan bel vermeye (çökmeye) başlar.

### Eski Tip Karkas (Betonarme) Binalar

Kolon ve kirişlerin olduğu binalardır. Ancak eski binalarda kolonlar genellikle incedir ve deniz kumu kullanılmış olabilir.

**Ölümcül Hata:** Duvarı yıkarken tavandan geçen ana kirişi "görüntüyü bozuyor" diyerek tıraşlamak veya tesisat borusu geçirmek için kolonu matkapla delmek (karot almak), binanın deprem sigortasını kendi ellerinizle iptal etmektir.

## 2. Amerikan Mutfak veya Geniş Salon Uğruna Yapılan Affedilmez Usta Hataları

Fatih bölgesinde kentsel dönüşüme girmeyen ancak iç tadilatla yenilenen dairelerde, maalesef ehliyetsiz ustaların yaptığı ve binayı sessizce yoran şu hatalarla sıkça karşılaşıyoruz:

- **"Bu Duvar İnce, Taşıyıcı Değildir" Yanılgısı:** Sadece kalınlığına bakarak duvarın taşıyıcı olup olmadığına karar verilmez. Karkas binalarda bile bazı bölme duvarlar, kolonlar arasındaki yanal deprem yükünü (kesme kuvvetini) karşılayan "dolgu duvar" görevi görür. Hepsini aynı anda yıkmak binanın esnekliğini bozar.
- **Kiriş Altı Tesisat Tıraşlaması:** Asma tavan yapmak veya elektrik/su tesisatını gizlemek için tavanın köşesindeki beton kirişi hilti ile oymak. O kirişin içindeki demir (donatı) havayla temas ettiği an korozyon (paslanma) başlar ve kiriş görevini yitirir.
- **Zemin Şapında Aşırı Yükleme:** Eski yer döşemesini kırmadan üzerine yeni şap dökmek, onun üzerine seramik koymak, metrekareye fazladan 100-150 kg ölü yük bindirir. Eski Fatih evlerinin döşeme (tabliye) betonları bu ekstra yükü taşıyacak kapasitede hesaplanmamıştır; zamanla tavanda çatlaklar oluşur.

## 3. Küçükler Yapı Dekorasyon Duvar Yıkım ve Tadilat Öncesi Keşif Protokolü

Biz evinize geldiğimizde elimize balyozu almadan önce ölçüm cihazlarını alıyoruz. Fatih'in yorgun binalarında güvenli bir "Açık Konsept" (Open Space) yaratmak için şu adımları harfiyen uyguluyoruz:

### Adım 1: Statik Proje veya Röleve (Mevcut Durum) Kontrolü

Varsa binanın belediyedeki eski statik projesine bakılır. Eğer proje yoksa, uzman ekiplerimiz duvarların konumunu, kolon ve kiriş hatlarını tespit ederek dairenin taşıyıcı haritasını (rölevesini) çıkarır.

### Adım 2: Duvar İçi Tarama (Donatı ve Tesisat Bulucu)

Gözle görünmeyen tesisatları veya gizli kolonları bulmak için Dijital Duvar Tarama Cihazları (Radar/Dedektör) kullanıyoruz. Yıkılacak duvarın içinden ana elektrik hattı, doğalgaz borusu veya ortak havalandırma (şaft) boşluğu geçip geçmediğini milimetrik olarak tespit ediyoruz.

### Adım 3: Taşıyıcı Olmayan Bölme Duvarların Yıkımı

Sadece 8.5'luk veya 13.5'luk tuğla/gazbeton ile örülmüş, binanın yanal ve dikey yük hesabına girmeyen bölme duvarları (örneğin iki küçük yatak odasını ayıran ara duvarı) kontrollü bir şekilde, tavandaki kirişe zarar vermeden (özel kesim motorlarıyla) yukarıdan aşağıya doğru yıkıyoruz.

### Adım 4: Güçlendirme Gerekirse Çelik Konstrüksiyon

Eğer mimari olarak bir duvarın mutlaka kalkması gerekiyorsa ve bu durum statik olarak risk yaratabilecek sınırdaysa, devreye çelik profiller girer. Yıkılan duvarın yükünü karşılamak için İNŞAAT MÜHENDİSİ onaylı NPI/NPU çelik profillerle lentolar veya çelik çerçeveler (çelik karkas) oluşturarak yükü güvenli bir şekilde yere aktarıyoruz.

## 4. Ev Sahibi Olarak Kendi Testinizi Yapın (Taşıyıcı Duvar Nasıl Anlaşılır?)

Tadilata karar vermeden önce, hangi duvarları yıktırabileceğinizi anlamak için evinizde şu basit ön testleri yapabilirsiniz:

- **Tık-Tık (Ses) Testi:** Elinizle duvara vurun. Eğer "kof, tok olmayan, boşluklu" bir ses geliyorsa muhtemelen standart bir bölme duvardır (tuğla, gazbeton veya alçıpan). Vurduğunuzda ses yankılanmıyor, eliniz acıyor ve taş gibi sert bir tepki alıyorsanız, o kısım betonarme perdedir; ASLA YIKILAMAZ.
- **Tavan-Kiriş Hizası:** Yıkmak istediğiniz duvarın tam üzerine (tavana) bakın. Duvar, tavandaki kalın bir kirişin (beton çıkıntının) tam altından mı geçiyor? Öyleyse o duvar kirişi destekleyen bir dolgu duvarı olabilir. Kesinlikle uzman görüşü gerekir.
- **Kolon Aralığı:** Eski karkas binalarda iki kolon arası mesafe genellikle 3-5 metredir. Duvarın iki ucunda veya ortasında kolon varsa, duvarı yıkarken kolonlara ve üstteki kirişe yarım santim bile dokunulmamalıdır.

### Müşteri İçin Ne Anlama Geliyor? (Özetle)

Evinizde balyoz sesleri yankılanmadan önce ustanıza "Bu duvar yukarıyı taşıyor mu?" diye sormakla yetinmeyin. Gerçek bir uzman, tavan kirişlerini ve yerdeki döşeme betonunu incelemeden hiçbir duvara balyoz vurmaz. Estetik için can güvenliğinizi riske atmayın.

## 5. Tadilatta Yasal Mevzuat ve Teknik Standartlar Tablosu

Eski bir apartmanda duvar kırmak, sadece sizin değil tüm apartman sakinlerinin hayatını ilgilendirdiği için yasal kurallara (Kat Mülkiyeti Kanunu) tabidir. Hatalı işlem şikayet edilirse belediye dairenizi mühürleyebilir.

| İşlem Türü | Kat Mülkiyeti Kanunu (KMK) Durumu | Teknik Zorunluluk / Yasal Süreç |
| --- | --- | --- |
| Kolon/Kiriş Kesmek, Tıraşlamak | KESİNLİKLE YASAK (Suç) | KMK Madde 19'a göre komşular dava açabilir. Bina riskli yapı ilan edilip boşaltılabilir. |
| Dış Cephe Duvarını Yıkmak / Pencere Büyütmek | İZNE TABİ (Proje Gerekir) | Binanın dış görünüşünü ve bütünlüğünü bozduğu için belediyeden tadilat ruhsatı ve tüm kat maliklerinin %80 onayı (muvafakatname) gerekir. |
| Daire İçi Basit Bölme Duvarı Yıkmak | İZNE TABİ DEĞİL (Serbest) | Statik taşıyıcı özelliği olmayan, sadece iki odayı ayıran basit (8.5'luk vb.) duvarlar belediye ruhsatı gerektirmeden yıkılabilir. |
| Eski Mozaik / Mermer Balkonu İçeri Katmak | DİKKAT EDİLMELİ | Balkon duvarını yıkıp odaya katmak ölü yükü artırabilir, KMK'ya göre ortak alan ihlali sayılabilir. Dış cephe estetiği bozulduğu için belediye onayı gerekebilir. |

## 6. Ustanızı Denetleyin: Duvar Kırma Öncesi Müşteri Kontrol Listesi

Fatih'teki mülkünüzü emanet ettiğiniz firmanın "biz hallederiz abi" sözüne güvenmek yerine, aşağıdaki kontrol listesini kullanarak işin doğru yapıldığından emin olun:

[ ] "Yıkılacak duvarın yığma duvar mı yoksa karkas dolgu duvarı mı olduğunu tespit ettiniz mi?"
[ ] "Duvarı yıkmadan önce içinde elektrik, su, doğalgaz veya internet hattı olup olmadığını dedektörle kontrol ettiniz mi?"
[ ] "Yıkım esnasında tavandaki kirişe ve yanlardaki kolonlara matkap/hilti teması olmayacağına dair garanti veriyor musunuz?"
[ ] "Çıkan molozu (hafriyatı) döşeme betonunun üzerine dağ gibi mi yığacaksınız (döşemeyi çatlatır!), yoksa anında çuvallayıp tahliye mi edeceksiniz?"
[ ] "Binanın ortak havalandırma veya asansör boşluğuna denk gelen duvarlara müdahale ediyor musunuz?" (Buralara kesinlikle dokunulmamalıdır).

## Estetiği Tasarlarken Temeli Sarsmıyoruz

Hayalinizdeki o adalı Amerikan mutfağa veya boydan boya ferah bir salona kavuşmak, Fatih'in tarihi dokusundaki eski dairenizde de mümkündür. Ancak bunun bedeli, gece yastığa başınızı koyduğunuzda duyduğunuz deprem korkusu olmamalıdır.

Küçükler Yapı Dekorasyon olarak; anahtar teslim ev tadilatı, iç mimari tasarım ve açık konsept (open space) projelerinde mühendislik disiplininden asla taviz vermiyoruz. Binanızın yorgunluğuna saygı duyuyor, taşıyıcı sisteme dokunmadan, tamamen yasal ve güvenli yöntemlerle yaşam alanlarınızı büyütüyoruz.

Fatih, Sarayağası, Karagümrük ve çevresindeki tadilat projelerinizde statik güvenlikten ödün vermeden evinizi baştan yaratmak için uzman keşif ekiplerimizle hemen iletişime geçin.

## Kaynakça ve Dış Referanslar

- T.C. Çevre, Şehircilik ve İklim Değişikliği Bakanlığı: Türkiye Bina Deprem Yönetmeliği (TBDY) — Mevcut Binaların Değerlendirilmesi ve Güçlendirilmesi.
- T.C. Adalet Bakanlığı: 634 Sayılı Kat Mülkiyeti Kanunu (KMK) Madde 19 — Kat Maliklerinin Borçları ve Ana Gayrimenkulün Korunması.
- TSE (Türk Standardları Enstitüsü): TS 500 — Betonarme Yapıların Tasarım ve Yapım Kuralları.
- TSE (Türk Standardları Enstitüsü): TS 2510 — Kagir (Yığma) Duvarlar Hesap ve Yapım Kuralları.
- İMO (İnşaat Mühendisleri Odası): Mevcut Yapılarda Tadilat ve Onarım Kılavuzları.`,
    relatedArticles: [
      { slug: "fatih-banyo-tadilati-su-yalitimi", title: "Banyo Tadilatı ve Su Yalıtımı" },
      { slug: "fatih-su-tesisati-demir-boru-yenileme", title: "Su Tesisatı ve Demir Boru Yenileme" },
      { slug: "istanbul-komple-ev-tadilati", title: "Komple Ev Tadilatı Süresi" }
    ],
    externalLinks: [
      { title: "Çevre Bakanlığı - Türkiye Bina Deprem Yönetmeliği", url: "https://www.csb.gov.tr/" },
      { title: "TSE - TS 500 Betonarme Yapı Kuralları", url: "https://www.tse.org.tr/" },
      { title: "İMO - İnşaat Mühendisleri Odası", url: "https://www.imo.org.tr/" },
      { title: "Fatih Belediyesi - Ruhsat ve İzinler", url: "https://www.fatih.bel.tr/" }
    ]
  },
  "fatih-banyo-tadilati-su-yalitimi": {
    title: "Fatih ve Sarayağası'nda Banyo Tadilatı ve Kesin Çözümlü Su Yalıtımı: Küçükler Yapı Dekorasyon Islak Hacim Rehberi",
    date: "12 Eylül 2026",
    image: "/images/blog/blog-banyo-su-yalitimi.jpg",
    content: `Fatih, Sarayağası ve Hırka-i Şerif bölgelerinde ikamet eden eski bina sahipleri için en büyük kabus, gecenin bir yarısı alt kat komşusunun "Tavandan banyoma su damlıyor, tavanım sapsarı oldu!" diyerek kapıyı çalmasıdır. Kendi banyonuzda ise durum genellikle şöyledir: Kararan ve bir türlü beyazlamayan fayans araları (derzler), kapı kasalarının eteklerinden başlayarak çürüyüp şişmesi ve banyodan yayılan o ağır nem kokusu...

Pek çok ev sahibi bu durumu çözmek için "Usta çağırıp derzleri yenileteyim" veya "Eski fayansın üstüne yeni fayans yapıştıralım, ucuza kapansın" diye düşünür. Ancak suyun şakası yoktur; bulduğu en ufak bir iğne deliğinden bile sızarak betonunuzu ve demirinizi içten içe çürütür.

Küçükler Yapı Dekorasyon olarak, Tarihi Yarımada'nın yapı stoğundaki ıslak hacim (banyo, tuvalet, mutfak) sorunlarını çok iyi biliyoruz. Bu rehberde; banyo tadilatlarında su yalıtımının (izolasyonun) neden hayati olduğunu, piyasadaki standart ustaların yaptığı geri dönüşü olmayan hataları ve Avrupa (TSE EN) standartlarında, bir daha asla alt kata su sızdırmayacak bir banyoyu nasıl inşa ettiğimizi tüm çıplaklığıyla anlatıyoruz.

## 1. Eski Fatih Evlerinde Banyo Yalıtımı Neden Bu Kadar Çabuk İflas Eder?

Fatih bölgesindeki 30-40 yıllık binalarda banyolar yapılırken günümüzdeki gibi esnek su yalıtım malzemeleri (sürme izolasyonlar) kullanılmazdı. Eskiden banyo zeminine sadece kum, çimento ve kireç karışımı bir harç atılır, üzerine seramik döşenirdi.

- **Betonun ve Binaların Esnemesi:** Her bina, sıcaklık farkları ve ufak sismik hareketler (Fatih'in işlek caddelerinden geçen ağır vasıtaların yarattığı titreşimler dahil) nedeniyle esner. Bu esneme, eski banyolardaki sert çimento harcını zamanla çatlatır.
- **Derz Dolgusu Suyu Tutmaz:** İnsanların en büyük yanılgısı, fayans aralarındaki derz dolgusunun suyu keseceğini sanmasıdır. Oysa standart derz dolguları mikroskobik düzeyde su geçirgenliğine sahiptir. Yıllar içinde temizlik malzemelerinin (çamaşır suyu, tuz ruhu) asidiyle eriyen derzlerden sızan su, doğrudan alt kattaki komşunun tavanına ulaşır.

## 2. Tadilatta Sık Karşılaştığımız "Ucuza Kaçma" Hataları

Küçükler Yapı Dekorasyon olarak Fatih'te devraldığımız yarım kalmış veya "1 yıl geçmeden patlamış" banyo projelerinde hep aynı usta hatalarını görüyoruz:

- **"Fayans Üstü Fayans" (Seramik Üzerine Seramik) Hatası:** Yıkım ve moloz maliyetinden kaçmak için eski seramiğin üzerine astar sürülüp yeni seramik döşenir. Ancak eski seramiğin altındaki mevcut yalıtım çürümüşse, yeni seramik alt kata su sızmasını ENGELLEMEZ. Ayrıca banyo zemini yükseldiği için banyo kapısı sürtmeye başlar ve eşiklerde çirkin kot farkları oluşur.
- **Pah Bandı Kullanmamak:** Su, banyoda en çok köşelerden (duvar ile zeminin birleştiği 90 derecelik çizgiden) sızar. Çoğu usta buraya sadece silikon çeker veya derz sürer. Bina esnediği an bu silikon yırtılır ve su kaçağı başlar.
- **Standart Kalekim (Fayans Yapıştırıcısı) ile Büyük Boy Seramik Döşemek:** 60x120 cm gibi günümüzün trendi olan dev ebatlı granit seramikler, eski tip standart (C1 sınıfı) yapıştırıcılarla duvara tutunamaz. Bir süre sonra banyoda duş alırken fayansların "bomba gibi" patlayarak yere düştüğüne şahit olabilirsiniz.

## 3. Küçükler Yapı Dekorasyon "Sıfır Kaçak" Banyo İzolasyon Protokolü

Banyonuzu yenilerken sadece göze hitap eden güzel seramikler seçmek yetmez; o seramiklerin altındaki görünmez altyapı her şeyden önemlidir. Biz Küçükler Yapı Dekorasyon olarak işimizi şansa bırakmıyor, TS EN normlarına uygun şu adımları izliyoruz:

### Adım 1: Tam Kırım ve Şap İşlemi (Özüne İnme)

Eski banyonuzdaki tüm fayansları, altındaki kum-çimento harcını ve çürümüş sıvaları betonarme yüzeyi görene kadar kırıyoruz (Hilti ile kazıma). Zemin temizlendikten sonra, suyun yer süzgecine (gider deliğine) doğru %1.5 - %2 oranında kusursuz akmasını sağlayacak lazer eğimli yeni bir şap (tesviye betonu) atıyoruz.

### Adım 2: Su Yalıtım Astarı (Primer)

Şap kuruduktan sonra, zemindeki tozu hapseden ve üzerine sürülecek izolasyon malzemesinin zemine kanca atmasını (yapışmasını) sağlayan özel akrilik astar uygulaması yapıyoruz. Astar sürülmeden yapılan yalıtım, bisküvi gibi ufalanıp kalkar.

### Adım 3: Esnek Pah Bandı Uygulaması (Can Damarı)

Duvar ile zeminin birleştiği tüm köşelere, duşakabin içine ve süzgeç kenarlarına Kauçuk Esaslı Pah Bandı yerleştiriyoruz. Bu bant sündürülebilir yapıdadır; bina depremde veya sıcakta esnese bile köşelerden asla yırtılmaz ve suyu sızdırmaz.

### Adım 4: Çift Komponentli Tam Elastik Sürme İzolasyon

Zemine ve suyun temas ettiği duvarlara (duşakabin alanında en az 1.80 metre yüksekliğe kadar) çimento ve sıvı polimerden oluşan "Çift Komponentli Tam Elastik Sürme Su Yalıtımı" uyguluyoruz.

- Fırça veya rulo ile birbirine dik açılarda (önce yatay, sonra dikey yönde) 2 ayrı kat halinde sürüyoruz.
- Bu malzeme kuruduğunda banyonuzun altını adeta kalın, yeşil veya gri bir lastik havuzla kaplamış gibi suyu %100 bloke eder.

### Adım 5: C2TE S1 Sınıfı Esnek Yapıştırıcı ve Seramik Döşeme

Yalıtım kuruduktan sonra sıra seramiklere gelir. Granit veya seramikleri yapıştırırken esnek yapılı, kayma yapmayan, ısı değişimlerine dirençli S1 Esneklik Sınıfına sahip (C2TE S1) yüksek performanslı yapıştırıcılar kullanıyoruz. Yapıştırıcıyı hem zemine hem de seramiğin arkasına sürerek (çift sürme tekniği) aralarda hava boşluğu kalmasını engelliyoruz.

### Adım 6: Antibakteriyel Silikonlu Derz Dolgu

En son adımda, su itici özelliğe sahip, küf ve mantar barındırmayan (CG2 WA sınıfı) silikon katkılı derz dolguları ile seramik aralarını mühürlüyoruz.

## 4. Kullanılan Yalıtım ve Yapıştırıcı Malzemelerinin Teknik Standartları

Banyonuzda kullanılan kimyasalların ambalajında yazan kodlar, o işin ömrünü belirler. Biz sadece Avrupa standartlarında onay almış malzemeleri evinizin altyapısına işliyoruz.

| Kullanılan Malzeme / Aşama | TSE / Avrupa Standardı Kodu | Müşteri İçin Ne Anlama Geliyor? (Türkçesi) |
| --- | --- | --- |
| Sürme Su Yalıtım Harcı | TS EN 14891 | Banyonuzun zemini adeta bir yüzme havuzu standartlarında yalıtılır. Alt kata bir damla bile su gitmez. |
| Seramik/Granit Yapıştırıcısı | TS EN 12004 (C2TE S1) | C2: Yüksek yapışma gücü, T: Kayma yapmaz (duvardan düşmez), E: Uzun çalışma süresi, S1: Esnektir, bina sarsıldığında seramiği kırmaz. |
| Derz Dolgu Malzemesi | TS EN 13888 (CG2 WA) | CG2: Yüksek dayanımlı çimento esaslı. W: Su itici (suyu üzerinden kaydırır). A: Aşınmaya dirençli. Kararmayan ve suyu geçirmeyen derz dolgusu. |
| Kauçuk Pah Bandı | DIN 18534 (İç Mekan Su Yalıtımı) | Duvar ve zemin köşelerinde kopmayan, elastik su tutucu emniyet kemeri. |

## 5. Banyo Tadilatı Yaptırırken Müşteri Kontrol Listesi

Evinizi bir ustaya veya firmaya emanet ettiğinizde, paranızın hakkını alıp almadığınızı şu sorularla denetleyebilirsiniz:

[ ] "Mevcut fayansları tamamen kırıp altındaki betona kadar indiniz mi?" (Kırılmadan yapılıyorsa risk alıyorsunuz demektir).
[ ] "Zemine izolasyon sürmeden önce duvar diplerine ve köşelere kauçuk 'pah bandı' döndünüz mü?" (Sadece yalıtım sıvısı sürmek köşelerde çatlama yapar).
[ ] "Duşakabin (ıslak alan) duvarlarına en az 1.5 - 2 metre yüksekliğe kadar su yalıtımı sürdünüz mü?" (Suyu sadece zemin değil, yıkanırken duvarlar da emer).
[ ] "Seçtiğim 60x120 ebatlı seramikler için standart kalekim mi kullanacaksınız, yoksa S1 sınıfı (esnek) yapıştırıcı mı?"
[ ] "Derz dolgusunu normal çimento bazlı mı, silikonlu antibakteriyel mi uyguluyorsunuz?"

## Banyonuzu Kır-Dök Stresine Değil, Yıllarca Sürecek Huzura Çevirin

Fatih, Sarayağası veya Balat'ta banyo yenilemek sıradan bir tadilat değil, binanın ömrünü ve komşuluk ilişkilerini doğrudan etkileyen bir altyapı projesidir. Yanlış yalıtılmış, ucuza kaçılmış bir banyo, size en geç 1-2 yıl içinde yeniden kırım, döküm ve binlerce liralık komşu masrafı olarak geri dönecektir.

Küçükler Yapı Dekorasyon olarak; arkamıza aldığımız teknik bilgi ve TSE belgeli malzemelerle, banyolarınızı sadece lüks ve şık göstermekle kalmıyor, su kaçağı riskini %100 ortadan kaldıracak mühendislik standartlarıyla inşa ediyoruz. "Bu kez sağlam olsun, kafam rahat etsin" diyorsanız, ücretsiz keşif ve malzeme projelendirmesi için uzman ekibimize hemen ulaşın.

## Kaynakça ve Dış Referanslar

- TSE (Türk Standardları Enstitüsü): TS EN 14891 — Seramik Karolar İçin Sıvı Halde Uygulanan Su Geçirimsizlik Ürünleri Standartları.
- TSE (Türk Standardları Enstitüsü): TS EN 12004 — Seramik Karolar İçin Yapıştırıcılar, Kurallar ve Deney Yöntemleri.
- Çevre, Şehircilik ve İklim Değişikliği Bakanlığı: Binalarda Su Yalıtımı Yönetmeliği (Resmi Gazete No: 30223).
- DIN Standartları Enstitüsü: DIN 18534 — İç Mekanlarda Su Yalıtımı (Abdichtung von Innenräumen).
- İZODER (Isı, Su, Ses ve Yangın Yalıtımcıları Derneği): Islak Hacim Su Yalıtımı Doğru Uygulama Kitapçığı.`,
    relatedArticles: [
      { slug: "fatih-su-tesisati-demir-boru-yenileme", title: "Su Tesisatı ve Demir Boru Yenileme" },
      { slug: "fatih-sarayagasi-rutubet-yalitim-cozumleri", title: "Rutubet ve Su Yalıtımı" },
      { slug: "istanbul-komple-ev-tadilati", title: "Komple Ev Tadilatı Süresi" }
    ],
    externalLinks: [
      { title: "TSE - TS EN 14891 Su Geçirimsizlik Ürünleri", url: "https://www.tse.org.tr/" },
      { title: "Çevre Bakanlığı - Binalarda Su Yalıtımı Yönetmeliği", url: "https://www.csb.gov.tr/" },
      { title: "İZODER - Isı, Su, Ses ve Yangın Yalıtımcıları Derneği", url: "https://www.izoder.org.tr/" },
      { title: "Fatih Belediyesi - Ruhsat ve İzinler", url: "https://www.fatih.bel.tr/" }
    ]
  },
  "fatih-su-tesisati-demir-boru-yenileme": {
    title: "Fatih ve Sarayağası'nda Eski Binaların Su Tesisatı (Demir Boru) Yenileme Protokolü: Küçükler Yapı Dekorasyon Tesisat Rehberi",
    date: "12 Eylül 2026",
    image: "/images/blog/blog-su-tesisati-demir-boru.jpg",
    content: `Fatih, Sarayağası, Karagümrük ve Hırka-i Şerif hattında 30-40 yaşını devirmiş bir dairede oturuyorsanız; musluktan ilk açtığınızda akan o sarı-kahverengi paslı suyu, duş alırken bir anda azalan su basıncını veya alt kat komşunuzun "Tavandan su damlıyor!" diyerek kapınıza dayanmasını muhtemelen tecrübe etmişsinizdir.

Eski binalardaki galvaniz ve demir su boruları, artık yapısal ömrünü çoktan tamamlamıştır. Ancak bu tesisatları yenilemek, "Eskisini söküp yerine plastik boru takalım" denilecek kadar basit bir işlem değildir. Yanlış yapılan bir tesisat yenilemesi; kombinizin sürekli arıza vermesine, banyonuzda dayanılmaz bir lağım kokusuna ve fayanslarınızın altında sessizce büyüyen su kaçaklarına neden olur.

Küçükler Yapı Dekorasyon olarak, Fatih bölgesinin altyapı karakteristiğini ve eski binaların hassas zemin-duvar yapılarını çok iyi biliyoruz. Bu rehberde; Google aramalarında bulamayacağınız kadar detaylı bir şekilde, evinizin damarları olan sıhhi tesisat sistemini Avrupa (TS EN) standartlarında nasıl yenilediğimizi ve paranızı acemi tesisatçılardan nasıl koruyacağınızı anlatıyoruz.

## 1. Eski Galvaniz ve Demir Borular Neden "Saatli Bomba" Gibidir?

1970'ler ile 1990'lar arasında Fatih'te inşa edilen binaların neredeyse tamamında temiz su hatları için galvanizli çelik veya demir borular kullanılmıştır. Suyun içindeki klor ve mineraller, yıllar içinde bu boruları içeriden çürütür.

- **İç Çap Daralması (Kalsifikasyon ve Pas):** 40 yıllık bir demir borunun içi, kolesterolle tıkanmış bir damar gibidir. Borunun iç çeperinde biriken kireç ve pas, suyun geçeceği alanı %70 oranında daraltır. Çamaşır veya bulaşık makinenizin sürekli filtre hatası vermesinin ya da kombinizin "Düşük Su Basıncı" arızasına geçmesinin ana sebebi budur.
- **Gizli Çürümeler ve Kılcal Kaçaklar:** Demir borular genellikle kılıfsız olarak doğrudan betonun veya asmolen döşemenin içine gömülmüştür. Paslanan boru iğne deliği kadar bir yerden sızdırmaya başladığında, su doğrudan betonun içine yayılır. Siz fark edene kadar alt katın tavanı kararır, sizin evinizde ise fayans aralarından (derzlerden) nem kusmaya başlar.

## 2. Piyasada Sık Yapılan Ölümcül Tesisat Hataları

Sıhhi tesisat, evin "görünmez" yüzüdür. İşlem bittikten ve üstü seramikle kapatıldıktan sonra hatayı düzeltmenin tek yolu her şeyi yeniden kırmaktır. Fatih'te tadilat sonrası hüsrana uğrayan müşterilerimizde en sık gördüğümüz usta hataları şunlardır:

- **Sıcak Su Hattında Standart Boru Kullanımı (Folyosuz Boru Hatası):** Sıcak su borularının içinden 60-70 derece sıcaklıkta su geçer. Isınan plastik boru esner ve uzar. Eğer usta, sıcak su hattına alüminyum veya cam elyaf takviyeli (ortası folyolu) boru yerine ucuz, düz PPRC boru takarsa, o boru zamanla yılan gibi kıvrılır, dirseklerden çatlar ve fayansı patlatır.
- **Kılıfsız (Kangal) Boru Döşeme:** Borular şapın (zeminin) altından geçirilirken çıplak olarak betona gömülmemelidir. Betonun sıcaklık farklarında çalışması (esnemesi) boruyu sıkarak patlatabilir. Ayrıca kılıfsız döşenen sıcak su borusu, ısısını betona transfer eder; kombiniz evi ısıtmak yerine zemin betonunu ısıtmaya çalışır ve fatura kabarır.
- **Pimaş (Gider) Eğim Hataları:** Atık su borularında ideal eğim %2 civarında olmalıdır. Eğimin az olması tıkanıklıklara, eğimin çok dik olması ise suyun hızla akıp katı atıkların boruda kalmasına neden olur. Göz kararı verilen eğimler, banyonuzda sürekli su birikmesine yol açar.

## 3. Küçükler Yapı Dekorasyon Sıhhi Tesisat Yenileme Protokolü

Biz tesisat yenileme işine "kır-dök" mantığıyla değil, bir mühendislik projesi gibi yaklaşıyoruz. Uzun ömürlü ve sorunsuz bir altyapı için uyguladığımız adımlar şunlardır:

### Adım 1: Hasar Tespiti ve Akustik Dinleme

Eğer sistem tamamen yenilenmeyecekse veya mevcut bir kaçak aranıyorsa, Fatih'in o güzelim eski çinilerini veya parkelerini boş yere kırmayız. Akustik dinleme cihazları ve yüksek çözünürlüklü termal kameralar kullanarak suyun nereden sızdığını santim santim tespit eder, sadece o bölgeye lokal müdahale yaparız.

### Adım 2: Lazerli Eğim ve Güzergah Belirleme

Yeni tesisat hatları döşenirken, suyun en kısa ve en az dirsekle hedefe (bataryalara veya ana gidere) ulaşması esastır. Ne kadar çok dirsek kullanılırsa, suyun basıncı o kadar düşer. Güzergahı ve Pimaş eğimlerini dijital su terazileri ve lazer nivo ile belirliyoruz.

### Adım 3: PPRC ve Kompozit Boru Teknolojisi (PN25 Standardı)

Eski demir boruları iptal ettikten sonra:

- **Soğuk Su Hattında:** 20 Bar basınca dayanıklı (PN20) TSE belgeli beyaz veya yeşil PPRC borular,
- **Sıcak Su Hattında ve Kaloriferde:** Ortasında cam elyaf veya alüminyum folyo bulunan, esnemeyi (uzama katsayısını) %75 oranında düşüren ve yüksek ısıya dayanıklı PN25 Kompozit Borular kullanıyoruz.

### Adım 4: Kılıflı Boru ve Isı İzolasyonu

Zeminden (şap altından) giden tüm temiz su hatlarını özel kırmızı/mavi kılıfların (spiral boruların) içinden geçiriyoruz. Bu sayede boru, betonun tahrip edici etkisinden korunuyor. Ayrıca boruların etrafına polietilen (PE) yalıtım kılıfları geçirerek, sıcak suyun hedefe gidene kadar soğumasını (ısı kaybını) engelliyoruz.

### Adım 5: Basınç Testi (Test Pompası ile Sızdırmazlık Onayı)

En kritik adım burasıdır. Tesisat döşendikten ve tüm kaynak işlemleri bittikten hemen sonra duvarlar KESİNLİKLE KAPATILMAZ.

- Sisteme şebeke suyunun 3 katı basınca denk gelen (yaklaşık 10-15 Bar) özel Test Pompası (Mano-metre) bağlanır.
- Sistem bu yüksek basınç altında 24 saat bekletilir.
- Eğer basınç saatinde milimetrik bir düşüş bile olmazsa, kaynakların (kaynatma maşonu vb.) kusursuz olduğu onaylanır ve sıva/seramik işlemine geçilir.

## 4. Kullanılan Malzemelerin Teknik ve Yasal Standartları

Binalarınızın görünmeyen kısımlarına gömdüğümüz malzemeler, merdiven altı üretimler değil; İstanbul Sular İdaresi (İSKİ) ve uluslararası inşaat normlarına uygun onaylı ürünlerdir.

| Kullanılan Tesisat Malzemesi | İlgili Kalite Standardı | Müşteri İçin Ne Anlama Geliyor? (Türkçesi) |
| --- | --- | --- |
| Temiz Su Borusu (PPRC) | TS EN ISO 15874 | Kanserojen madde içermez, içtiğiniz veya yemek yaptığınız suya plastik kokusu karıştırmaz. |
| Pis Su Borusu (Pimaş) | TS EN 1451-1 / DIN 4109 | Pürüzsüz iç yüzeyiyle tıkanmaları engeller. Kalın etli yapısı sayesinde üst kattan sifon çekildiğinde odanıza su sesi gelmez (Sessiz Boru Teknolojisi). |
| Pirinç Vana ve Rakorlar | TS EN 1213 | Yıllar sonra bile vanayı kapatmak istediğinizde oksitlenip kilitlenmez, elinizde kalmaz. %100 saf pirinç kullanıyoruz. |

## 5. Tesisat İşini Teslim Alırken Dikkat Etmeniz Gerekenler (Denetim Listesi)

Bir usta veya firma evinize gelip tesisatınızı yenilediğinde, paranızı ödemeden önce mutlaka şu kontrolleri yapmalısınız:

[ ] "Banyoya giden sıcak su borularında düz boru mu kullandınız, yoksa ortası gri çizgili/folyolu (kompozit) boru mu?" (Düz boru sıcak suda yamulur).
[ ] "Zeminden geçen borular çıplak mı gömülecek, kılıfa/spirale alındı mı?"
[ ] "Batarya (musluk) çıkış ağızlarını (batarya grubu) su terazisi ile dengelediniz mi?" (Dengesiz bırakılırsa, sonradan takılan musluk yamuk durur).
[ ] "Fayansları kapatmadan önce Test Pompası ile tesisata basınç verip kaçak kontrolü yaptınız mı?" (Bu testi yapmadan duvarı kapatan usta, işine güvenmeyen veya işi bilmeyen ustadır).
[ ] "Banyo süzgeci (yer gideri) kokuyu önleyen Çekvalfli (Sulu Sistem) model mi?" (Eğer standart gider takılırsa lodoslu havalarda eve ağır kanalizasyon kokusu dolar).

## Küçükler Yapı Dekorasyon: Fatih'te Güvenilir ve Garantili Altyapı

Tesisat, bir evin can damarıdır ve şakaya gelmez. Eski Fatih, Sarayağası veya Balat evinizin o tarihi dokusunu yaşarken, banyonuzun veya mutfağınızın duvarlarından sular sızması kaderiniz değildir.

Küçükler Yapı Dekorasyon olarak; su kaçağı bulma, demir boru iptali, kalorifer tesisatı yenileme ve banyo komple tadilat işlemlerinde "sözde değil, standartlarla belgelediğimiz" mühendislik kalitesini sunuyoruz. Alt komşunuzla kötü olmadan, evinizin duvarları çürümeden ücretsiz keşif ve projelendirme için bizimle iletişime geçebilirsiniz.

## Kaynakça ve Dış Referanslar

- İSKİ (İstanbul Su ve Kanalizasyon İdaresi): İç Tesisat Yönetmeliği ve Projelendirme Esasları.
- TSE (Türk Standardları Enstitüsü): TS EN ISO 15874 — Plastik Boru Sistemleri (Sıcak ve Soğuk Su İçin) Standartları.
- DIN Standartları Enstitüsü: DIN 4109 — Bina İçi Ses Yalıtımı (Sessiz Atık Su Sistemleri) Normları.
- Çevre, Şehircilik ve İklim Değişikliği Bakanlığı: Sıhhi Tesisat Genel Teknik Şartnamesi, Tesisat Proje ve Uygulama Esasları.`,
    relatedArticles: [
      { slug: "fatih-sarayagasi-rutubet-yalitim-cozumleri", title: "Rutubet ve Su Yalıtımı" },
      { slug: "fatih-yigma-binalarda-mantolama-hatalari", title: "Isı Yalıtımı ve Mantolama" },
      { slug: "istanbul-komple-ev-tadilati", title: "Komple Ev Tadilatı Süresi" }
    ],
    externalLinks: [
      { title: "İSKİ - İç Tesisat Yönetmeliği", url: "https://www.iski.istanbul/" },
      { title: "TSE - TS EN ISO 15874 Plastik Boru Standartları", url: "https://www.tse.org.tr/" },
      { title: "Çevre Bakanlığı - Sıhhi Tesisat Genel Şartnamesi", url: "https://www.csb.gov.tr/" },
      { title: "Fatih Belediyesi - Ruhsat ve İzinler", url: "https://www.fatih.bel.tr/" }
    ]
  },
  "fatih-yigma-binalarda-mantolama-hatalari": {
    title: "Fatih'teki Eski ve Yığma Binalarda Isı Yalıtımı (Mantolama) Hataları: Küçükler Yapı Dekorasyon Doğru Yalıtım Rehberi",
    date: "12 Eylül 2026",
    image: "/images/blog/blog-yigma-mantolama-hatalari.jpg",
    content: `Fatih, Sarayağası ve çevresindeki mahallelerde kış ayları geldiğinde birçok ev sahibinin ortak derdi başlar: Kombi son ayarda yanmasına rağmen ısınmayan odalar, buz gibi olan dış cephe duvarları ve her ay katlanarak gelen yüksek doğalgaz faturaları. Üstelik soğukla yetinmeyip, eşyaların arkasında veya tavan köşelerinde beliren kara küf lekeleri de cabasıdır.

Bölgedeki binaların yaş ortalaması yüksek olduğu için (çoğu yığma, karma veya eski tip betonarme), standart bir "mantolama" işlemi bu evlerde işe yaramaz. Hatta yanlış yapılan bir yalıtım, evinizi adeta havasız bir naylon torbaya çevirerek terleme ve küf sorununu daha da artırabilir.

Küçükler Yapı Dekorasyon olarak, Tarihi Yarımada'nın kendine has yapı stoğunu çok iyi tanıyoruz. Bu rehberde, Fatih'teki bitişik nizam ve eski binalarda yapılan ölümcül ısı yalıtımı hatalarını, paranızı sokağa atmadan evinizi nasıl "gerçekten" ısıtabileceğinizi ve uymanız gereken Avrupa kalite standartlarını tüm şeffaflığıyla açıklıyoruz.

## 1. Fatih'in Eski Yapı Stoğu: Neden Standart Mantolama İşe Yaramıyor?

Fatih bölgesindeki evlerin birçoğunda taşıyıcı sistem sadece beton kolonlardan oluşmaz; kalın harman tuğlalı yığma duvarlar veya deniz kumuyla yapılmış eski tip sıvalar yaygındır.

- **Isı Köprüleri (Heat Bridges):** Eski binalarda pencerelerin kenarları, balkon altları veya çıkmalar (cumbalar) dışarıyla doğrudan temas halindedir. Buralardan kaçan ısı, duvarın ortasından kaçan ısıdan çok daha fazladır.
- **Bitişik Nizam Problemi:** Fatih'teki birçok bina omuz omuza (bitişik nizam) yapılmıştır. Kör cepheler (iki bina arasındaki dar boşluklar), rüzgar tüneli etkisi yaratarak evin ısısını hızla çalar. Bu dar alanlara standart iskele kurup dıştan yalıtım yapmak genellikle imkansızdır.

## 2. İçten Yalıtım mı, Dıştan Yalıtım mı? (En Büyük İkilem)

Fatih'te bina dış cephelerine müdahale etmek, hem belediye izinleri (tarihi doku koruma kuralları) hem de bitişik nizam zorlukları nedeniyle her zaman mümkün olmaz. Bu durumda ev sahipleri "İçten Yalıtım" (odaların içinden mantolama) yaptırmak zorunda kalır. Ancak en büyük facialar da burada başlar.

### İçten Yalıtımda "Terleme" (Kondenzasyon) Tehlikesi

Dışarıdan gelen soğuk hava ile içerideki sıcak hava, yalıtım malzemesinin arkasında (duvar ile strafor arasında) karşılaşır. Çarpışan bu iki hava, su damlacıklarına (terlemeye) dönüşür. Eğer ustanız yanlış malzeme kullandıysa, bu su zamanla siyah küfe dönüşür ve odanın içine ağır bir rutubet kokusu yayılır.

### Müşteri İçin Ne Anlama Geliyor?

Eğer dış cepheden yalıtım yaptırma şansınız yoksa ve mecburen odanın içinden yalıtım yaptıracaksanız, ustaya "Duvarın nefes almasını nasıl sağlayacaksın?" diye sormalısınız. Aksi takdirde eviniz ısınır ama havasızlıktan ve küften yaşanmaz hale gelir.

## 3. Paranızı Çöpe Attıran Isı Yalıtım (Mantolama) Hataları

Küçükler Yapı Dekorasyon ekipleri olarak tadilata girdiğimiz evlerde, daha önce yapılmış ancak hiçbir işe yaramayan şu klasik usta hatalarını düzeltmekle uğraşıyoruz:

- **Yanlış Strafor (Köpük) Seçimi (EPS vs XPS Karmaşası):** İçten yalıtımda genellikle ucuz olduğu için beyaz renkli (düşük yoğunluklu) EPS köpükler kullanılır. Oysa iç yalıtımda buhar kesici özelliği olan, yüksek yoğunluklu (en az 28-30 dansite) XPS veya özel taşyünü levhalar kullanılmalıdır.
- **Levhalar Arası Boşluk Bırakmak (Şaşırtmalı Döşememe):** Yalıtım levhaları duvara yapıştırılırken aralarında milimetrik boşluklar kalırsa, o boşluklardan sızan soğuk hava tüm sistemin verimini %40 düşürür. Tıpkı kışın kabanınızın önünü açık bırakmak gibidir.
- **Pencere Merkezlerini (Denizlik Altlarını) Unutmak:** Duvarlara 5 cm kalınlığında yalıtım yapıp, pencerenin mermer altını veya yan kasalarını yalıtımsız bırakmak, ısı köprüsü oluşturur. Evin tüm sıcağı bu zayıf noktalardan dışarı kaçar.

## 4. Küçükler Yapı Dekorasyon Doğru Isı Yalıtım Protokolü

Biz, Fatih'teki projelerimizde ısı yalıtımını sadece "duvara köpük yapıştırmak" olarak görmüyoruz. İşlemi, TS 825 Binalarda Isı Yalıtımı Kuralları'na göre şu adımlarla uyguluyoruz:

### Adım 1: Yüzey Hazırlığı ve Isıl Kamera Tespiti

İşe başlamadan önce, termal kameralar (kızılötesi ısı ölçerler) ile evinizin hangi köşelerinden ısı kaybettiğini tespit ediyoruz. Duvar yüzeyindeki dökülen eski boyalar ve kabarmış sıvalar tamamen kazınarak sağlam zemine ulaşılır.

### Adım 2: Çerçeve (Bordür) Yöntemiyle Yapıştırma

Yalıtım levhalarını duvara yapıştırırken, piyasadaki klasik "ortasına üç öbek harç atıp yapıştırma" hatasını yapmıyoruz. Yapıştırıcı harcı, levhanın dört etrafına kesintisiz bir çerçeve (bordür) şeklinde ve ortasına noktasal olarak sürüyoruz.

**Neden Önemli?:** Bu yöntem, levhanın arkasına hava girmesini (baca etkisi yaratmasını) ve yangın anında alevlerin levha arkasından yürümesini engeller.

### Adım 3: Isı Köprüsü Kesici (Poliüretan Köpük) Uygulaması

Levhalar duvara "tuğla dizilimi" (şaşırtmalı) şeklinde sıfıra sıfır yerleştirilir. Arada kalan en ufak milimetrik çatlaklar bile harçla değil, esnek Poliüretan (PU) Yalıtım Köpüğü ile sıkılarak kapatılır.

### Adım 4: Mekanik Sabitleme (Doğru Dübel Kullanımı)

Özellikle eski yığma binaların duvarları kırılgandır. Standart plastik dübeller bu duvarları tutmaz. Fatih'in eski tuğla duvarlarına uygun, geniş başlıklı ve çelik çivili özel ısı yalıtım dübelleri (metrekareye en az 6 adet) kullanarak sistemi duvara kilitliyoruz.

### Adım 5: Donatı Filesi ve Son Kat Nefes Alan Boya

Yalıtımın üzerine çekilen ilk kat sıvanın içine, çatlamaları önleyen alkali dayanımlı cam elyaf sıva filesi (en az 160 gr/m²) gömülür. İşlem bittikten sonra, içerideki buharı dışarı atabilen, silikon veya silikat katkılı, buhar geçirgenliği yüksek boyalarla yüzey tamamlanır.

## 5. Kullandığımız Malzemelerin Teknik Standartları

Küçükler Yapı Dekorasyon güvencesiyle kullandığımız tüm sistemler, enerji tasarrufunuzu maksimize edecek yasal standartlara (TSE) tabidir.

| Kullanılan Malzeme | Teknik Standart (TSE / DIN) | Müşteri İçin Ne Anlama Geliyor? (Türkçesi) |
| --- | --- | --- |
| Isı Yalıtım Levhası | TS EN 13163 (EPS) / TS EN 13164 (XPS) | Kışın evinizin sıcaklığını içeride tutan, yazın ise dışarıdaki kavurucu sıcağı engelleyen, yoğunluğu yüksek ana kalkanımız. |
| Cam Elyaf Donatı Filesi | TS 13041 (Min 160 gr/m²) | Duvarınızın esnemelerden, darbelerden ve ufak sarsıntılardan dolayı çatlamasını engelleyen koruyucu zırh ağı. |
| Isı Yalıtım Yapıştırıcısı | TS EN 13499 | Levhaları duvara beton gibi sabitleyen, zamanla dökülme yapmayan özel polimer katkılı harç. |
| Son Kat Kaplama (Dekoratif) | TS EN 15824 | Yalıtımı güneşin UV ışınlarından, yağmurdan ve kuşlardan koruyan, dışarıdan şık görünen mineral kaplama. |

## 6. İş Tesliminde Müşteri Kontrol Listesi (Ustanızı Denetleyin)

Evinizin yalıtımını yaparken ustanızın işi doğru yapıp yapmadığını anlamak sizin en doğal hakkınızdır. Çalışma sırasında şu maddeleri mutlaka kontrol edin:

[ ] "Levhaları yapıştırırken harcı sadece ortaya mı sürdünüz, yoksa etrafına tam çerçeve (bordür) yaptınız mı?" (Ortaya sürülen harç, rüzgarın levha arkasında gezmesine neden olur).
[ ] "Levhaların arasındaki boşlukları sıva harcıyla mı doldurdunuz, yalıtım köpüğüyle mi?" (Harçla doldurulursa o noktalar "soğuk köprüsü" olur ve ısı kaçırır).
[ ] "Metrekareye kaç adet dübel attınız?" (Sağlam bir tutuş için metrekarede standart olarak en az 6 adet dübel kullanılmalıdır).
[ ] "Pencere kenarlarına ve denizlik altlarına yalıtım döndünüz mü?"

## Fatih'te Doğalgaz Faturanıza Değil, Evinize Yatırım Yapın

Eski bir binada oturmak, kışları üşümek ve yüksek faturalar ödemek zorunda olduğunuz anlamına gelmez. Doğru teşhis, kaliteli malzeme ve mühendislik standartlarına uygun bir işçilikle; evinizin ısınma maliyetlerini %40 ila %60 arasında düşürmek mümkündür.

Küçükler Yapı Dekorasyon olarak; Fatih, Sarayağası ve çevresindeki komşularımıza, kışı sımsıcak geçirebilecekleri, küften ve nemden uzak yaşam alanları sunuyoruz. Paranızı ucuza kaçan yanlış uygulamalarla israf etmeyin. Ücretsiz keşif ve termal analiz hizmetimizle tanışmak için uzman ekiplerimizle hemen iletişime geçebilirsiniz.

## Kaynakça ve Dış Referanslar

- TSE (Türk Standardları Enstitüsü): TS 825 — Binalarda Isı Yalıtımı Kuralları ve Standartları.
- Çevre, Şehircilik ve İklim Değişikliği Bakanlığı: Binalarda Enerji Performansı Yönetmeliği (BEP).
- İZODER (Isı, Su, Ses ve Yangın Yalıtımcıları Derneği): Doğru Mantolama Uygulama Kılavuzu ve Teknik Şartnameleri.
- DIN Standartları Enstitüsü: DIN 4108 — Yapılarda Isı Yalıtımı ve Enerji Tasarrufu Standartları.`,
    relatedArticles: [
      { slug: "fatih-sarayagasi-rutubet-yalitim-cozumleri", title: "Rutubet ve Su Yalıtımı" },
      { slug: "istanbul-komple-ev-tadilati", title: "Komple Ev Tadilatı Süresi" },
      { slug: "fatih-banyo-tadilati-dikkat", title: "Banyo Tadilatında Su Yalıtımı" }
    ],
    externalLinks: [
      { title: "TSE - TS 825 Binalarda Isı Yalıtımı Kuralları", url: "https://www.tse.org.tr/" },
      { title: "Çevre Bakanlığı - Enerji Performans Yönetmeliği (BEP)", url: "https://www.csb.gov.tr/" },
      { title: "İZODER - Isı, Su, Ses ve Yangın Yalıtımcıları Derneği", url: "https://www.izoder.org.tr/" },
      { title: "Fatih Belediyesi - Ruhsat ve İzinler", url: "https://www.fatih.bel.tr/" }
    ]
  },
  "fatih-sarayagasi-rutubet-yalitim-cozumleri": {
    title: "Fatih Sarayağası'nda Zemin ve Bodrum Kat Rutubet Çözümleri: Küçükler Yapı Dekorasyon Kalıcı Yalıtım Rehberi",
    date: "12 Eylül 2026",
    image: "/images/blog/blog-rutubet-cozumleri.jpg",
    content: `İstanbul'un kalbi Tarihi Yarımada'da, özellikle Fatih Sarayağası, Sarıgüzel ve Hırka-i Şerif bölgelerinde mülk sahibiyseniz, zemin veya bodrum kat dairelerde yaşanan o ağır rutubet kokusunu ve sürekli kabaran duvar boyalarını çok iyi bilirsiniz. Yıllardır bitmeyen bu sorun, sadece evinizin görselliğini bozmakla kalmaz; çocuklarınızın solunum sağlığını tehdit eder ve en önemlisi binanızın taşıyıcı kolonlarını içten içe çürütür.

Küçükler Yapı Dekorasyon olarak yıllardır Fatih sokaklarındaki yapıların dilinden anlıyoruz. Karşılaştığımız en büyük problem; ev sahiplerinin "rutubet önleyici" adı altında satılan ucuz boyalara veya duvarı alçıpanla kapatan geçici çözümlere binlerce lira harcayarak paralarını çöpe atmasıdır.

Bu detaylı rehberde, Fatih bölgesindeki yapı stoğunun neden bu kadar çok nem aldığını, piyasada yapılan klasik usta hatalarını ve Küçükler Yapı Dekorasyon olarak evinizi çürümekten nasıl kalıcı olarak kurtardığımızı, Avrupa kalite standartları (TS EN) çerçevesinde tüm şeffaflığıyla anlatıyoruz.

## 1. Fatih ve Sarayağası'nın Zemin Yapısı: Eviniz Neden Sürekli Su Alıyor?

Fatih bölgesindeki yapıların birçoğu 1970 - 1990 yılları arasında, günümüz yalıtım teknolojilerinin ve yönetmeliklerinin olmadığı dönemlerde inşa edilmiştir. Sarayağası mevkii, Haliç ve Marmara Denizi'ne inen eğimli yeraltı su yollarının üzerindedir.

Bölgedeki evlerin kronik su alma sebepleri şunlardır:

- Temel Bohçalama Eksikliği: Eski binaların temelinde, binayı topraktan ayıran kauçuk veya membran bir kalkan (bohçalama) yoktur. Bina doğrudan ıslak toprağın üzerine oturur.
- Bitişik Nizam Yapılaşma: Sarayağası'nda binalar omuz omuzadır. Binanın dışından temele inip dışarıdan yalıtım (pozitif yalıtım) yapmak fiziksel olarak imkansızdır. Arka bahçelerden veya iki bina arasındaki dar boşluklardan sızan yağmur suları, doğrudan bodrum kat duvarlarınıza basınç yapar.

## 2. Kılcal Nem (Duvardan Yükselen Su) Nedir?

Halk arasında "rutubet" olarak bilinen sorunun mühendislikteki adı Kılcal Yükselme (Rising Damp)'dir.

Temelinde yalıtım olmayan bir bina, tıpkı çaya batırılmış bir küp şeker gibi topraktaki suyu emer. Betonun ve tuğlanın içindeki mikroskobik kanallardan yukarı tırmanan su, zemin katlarda duvardan 1.5 - 2 metre yüksekliğe kadar çıkabilir.

### Tuz Kusması (Duvardaki Beyaz Pamukçuklar)

Topraktan yükselen su saf değildir; içinde sülfat ve nitrat tuzları barındırır. Bu su, dairenizin sıcak ortamını bulduğunda buharlaşır ve uçar. Ancak içindeki tuzlar duvarın içinde kalır. Bu tuzlar zamanla kristalleşip genleşerek (şişerek) en kaliteli boyayı bile patlatır, sıvanın toz halinde dökülmesine neden olur.

### Müşteri İçin Ne Anlama Geliyor?

Eğer duvarınızda beyaz, pamuk gibi kabarmalar görüyorsanız, sorun içerideki havalandırma eksikliği değil, binanızın temelinden yukarıya doğru su çekmesidir. Dışarıdan gelen bu suyu içeriden standart boyalarla durduramazsınız.

## 3. Nem ve Su Hasarının Taşıyıcı Sisteme (Kolonlara) Gizli Zararı

Nem, sadece kötü bir görüntü ve koku değildir. İstanbul gibi deprem gerçeğiyle yaşayan bir şehirde, nem doğrudan bir güvenlik sorunudur.

| Etkilenen Bölge | Nemin Yaptığı Tahribat | Sonuç (Neden Tehlikeli?) |
| --- | --- | --- |
| Kolon İçindeki Demirler (Donatı) | Su ve oksijenle temas eden demir paslanır (korozyon). | Paslanan demir hacim olarak genişler ve betonu patlatır. Taşıma kapasitesi %30'a kadar düşer. |
| Betonarme Yüzey | Sülfat asitleri betonun iç yapısını bozar. | Beton kum gibi ufalanmaya başlar (karbonatlaşma), deprem anında direnç gösteremez. |
| Tuğla ve Duvarlar | Sürekli ıslak kalan harç bağlayıcılığını yitirir. | Duvarın stabilitesi kaybolur, çatlaklar hızla büyür. |

## 4. Paranızı Çöpe Attıran "Klasik Usta Hataları"

Fatih'te birçok daire sahibi, yıllar içinde farklı ustalara farklı yöntemler denetmiş ancak hüsrana uğramıştır. Küçükler Yapı Dekorasyon olarak sahada en sık karşılaştığımız hatalı müdahaleler şunlardır:

- **Nemli Duvarı Alçıpan veya Lambiri ile Kapatmak:** En tehlikeli yöntemdir. Suyu durdurmaz, sadece gözden saklar. Alçıpanın arkasında kalan karanlık ve ıslak boşluk, siyah küf (Stachybotrys chartarum) üretme fabrikasına dönüşür. Birkaç ay içinde eve zehirli sporlar ve dayanılmaz bir koku yayılır.
- **Sorunlu Yere Saten Alçı Çekip Silikonlu Boya Sürmek:** Alçı, suyu sünger gibi çeken bir malzemedir. Arkadan gelen su basıncı karşısında en pahalı, en kaliteli silikonlu boya bile en fazla 6 ay dayanabilir. Sonrasında tekrar balon gibi şişer ve patlar.
- **Dış Yalıtım Malzemesini İçeriye Sürmek:** Zemin suyu dışarıdan içeriye doğru itme kuvveti (negatif basınç) uygular. Çatıya veya dış cepheye sürülen malzemeler içeriye sürüldüğünde, bu basınca dayanamaz ve duvardan levha halinde ayrılır.

## 5. Küçükler Yapı Dekorasyon Kalıcı Yalıtım Protokolü (Adım Adım Çözüm)

Bitişik nizam yapıların yoğun olduğu Fatih bölgesinde dışarıdan kazı yapılamıyorsa, tek bilimsel çözüm Negatif Basınç İzolasyonu ve Yatay Kimyasal Bariyer uygulamasıdır. Biz bu süreci şu adımlarla yönetiyoruz:

### Adım 1: Hasarlı Bölgenin Tespiti ve Soyulması

İşe makyaj yapmadan, sorunun köküne inerek başlıyoruz. Nemli duvarlardaki sıva, zemin kotundan itibaren ıslaklığın bittiği noktanın 50 cm üzerine kadar (genelde 1 - 1.5 metre) tamamen tuğla veya beton yüzeyi görene kadar kırılır. Duvar nefes almaya bırakılır.

### Adım 2: Duvar-Zemin Birleşimine "Pah" Uygulaması

Suyun en çok sızdığı yer, duvar ile zeminin birleştiği 90 derecelik köşelerdir. Bu köşelere özel kırıcılarla "U" şeklinde kanal açılır. Bu kanalın içi, suyla temas ettiğinde şişen özel pah bantları ve rötre yapmayan (büzülmeyen) su geçirmez tamir harçlarıyla doldurularak köşe yuvarlatılır.

### Adım 3: Yatay Kimyasal Enjeksiyon (Suyun Damarını Kesmek)

Topraktan yükselen suyu kesmek için duvarın en alt hizasına, 10-12 cm aralıklarla matkapla delikler açılır. Bu deliklerin içine özel bir enjeksiyon pompasıyla Silan/Siloksan esaslı sıvı kimyasallar enjekte edilir.

Nasıl Çalışır?: Bu kimyasal, duvarın içindeki gözeneklere yayılarak kurur ve su itici (hidrofobik) bir katman oluşturur. Topraktan gelen su bu katmana çarpar ve yukarıya (evinizin içine) tırmanamaz.

### Adım 4: Negatif Basınca Dayanıklı Kristalize İzolasyon

Dışarıdan gelen suyu içeriden durdurmak için duvara 2 kat Kristalize Su Yalıtım Harcı sürülür.

Nasıl Çalışır?: Bu harç, betonun içindeki nemle birleştiğinde betonun kalbine doğru ilerleyen iğne şeklinde kristaller üretir. Su geldikçe kristaller büyür ve betonun nefes almasına izin verirken su damlacıklarının geçişini %100 engeller.

### Adım 5: Sanierputz (Nem / Restorasyon Sıvası) Uygulaması

İzolasyon bittikten sonra normal sıva KULLANILMAZ. Sadece tarihi binalarda ve ağır rutubetli yerlerde kullanılan özel Restorasyon Sıvası (Sanierputz) çekilir. Bu sıvanın içinde hava kabarcıkları vardır. Duvarın içinde kalan son tuzları bu kabarcıklara hapseder ve dışarıya kusmasını engeller.

### Adım 6: Doğru Boya Seçimi

Son katman olarak, kesinlikle plastik veya silikonlu (naylon bazlı) boyalar kullanılmaz. Duvarın nemi dışarı atabilmesi için Silikat Esaslı (nefes alan) boyalar ile işlem tamamlanır.

## 6. Kullandığımız Malzemelerin Teknik Standartları

Uygulamalarımızın kalıcılığı, ustalık kadar kullanılan kimyasalların Avrupa standartlarına (TS EN) uygunluğuna bağlıdır. Merdiven altı hiçbir malzeme kullanmıyoruz.

| Kullanılan Katman | Teknik Standart / Malzeme | Müşteri İçin Ne Anlama Geliyor? (Türkçesi) |
| --- | --- | --- |
| Duvar İçi Enjeksiyon | Silan / Siloksan Emülsiyon (TS EN 1504-2) | Duvarın içine, suyu dışarıda bırakan şeffaf bir şemsiye açıyoruz. |
| Köşe Tamir Harcı | R4 Sınıfı Yapısal Onarım Harcı (TS EN 1504-3) | Çatlamayan, beton kadar sağlam, taşıyıcı gücü yüksek özel dolgu harcı. |
| Su Yalıtım Sürülmesi | 5 Bar Dayanımlı Kristalize Harç (TS EN 14891) | Dışarıdan 50 metre yüksekliğinde bir su sütununun yapacağı basınca dayanıklı kalkan. |
| Tuz Kusan Duvar Sıvası | WTA Onaylı Sanierputz (TS EN 998-1) | Avrupa'daki tarihi kalelerde ve müzelerde kullanılan, tuzu hapseden özel hava delikli sıva. |

## 7. Yalıtım İşini Teslim Alırken Nelere Dikkat Etmelisiniz? (Kontrol Listesi)

Küçükler Yapı Dekorasyon olarak şeffaflığa inanıyoruz. İster bizimle, ister Fatih'te başka bir firma ile çalışın, işin doğru yapıldığını anlamak için ustalarınıza şu soruları sormalı ve denetlemelisiniz:

[ ] "Eski, çürük sıvayı tamamen kazıdınız mı, yoksa sadece üstünü mü kazıdınız?" (Tuğlayı görmeden yalıtım yapılmaz).
[ ] "Duvar ve zemin birleşim yerlerine (köşelere) ovalleştirme (pah kırma) yaptınız mı?"
[ ] "Duvara sürdüğünüz malzeme pozitif mi, negatif basınca mı dayanıklı?" (İçeriden yapılan yalıtımda kesinlikle Negatif Basınç malzemesi istenmelidir).
[ ] "Son kat sıva olarak normal alçı mı kullandınız, restorasyon sıvası mı?" (Alçı kullanıldıysa o boya 6 ay sonra tekrar dökülecektir).

## Fatih'in Yapılarını Geleceğe Taşıyoruz

Fatih, Sarayağası ve Hırka-i Şerif bölgelerindeki binalar eski olabilir, ancak çürümeye mahkum değildir. Evinizdeki rutubet problemi, üstü örtülecek estetik bir kusur değil; profesyonel kimyasallar ve doğru mühendislik yaklaşımıyla çözülmesi gereken yapısal bir sorundur.

Küçükler Yapı Dekorasyon olarak, yılların getirdiği yerel tecrübemizi, modern yapı kimyasalları teknolojisiyle birleştiriyoruz. Paranızı geçici çözümlere harcamak yerine, evinizi sağlığına kavuşturacak kalıcı yalıtım protokolümüzle tanışmak için bizimle iletişime geçebilirsiniz.

## Kaynakça ve Dış Referanslar

- TSE (Türk Standardları Enstitüsü): TS EN 1504 Serisi — Beton yapıların korunması ve onarımı için mamuller ve sistemler standartları.
- WTA (Uluslararası Yapı Koruma ve Anıt Bakımı Birliği): WTA Merkblatt 2-9-04/D — Sanierputzsysteme (Restorasyon Sıva Sistemleri Şartnamesi).
- Çevre, Şehircilik ve İklim Değişikliği Bakanlığı: Binalarda Su Yalıtımı Yönetmeliği, Resmî Gazete İlgili Mevzuatı.
- İTÜ (İstanbul Teknik Üniversitesi): İnşaat Fakültesi Yapı Malzemeleri Laboratuvarı, Kılcal Nem ve Korozyon Hasarları Raporları.
- DIN Standartları Enstitüsü: DIN 18533 — Toprakla Temas Eden Yapı Elemanlarında Su Yalıtım Kuralları.`,
    relatedArticles: [
      { slug: "istanbul-komple-ev-tadilati", title: "Komple Ev Tadilatı Süresi" },
      { slug: "fatih-banyo-tadilati-dikkat", title: "Banyo Tadilatında Su Yalıtımı" },
      { slug: "anahtar-teslim-tadilat-firma-secimi", title: "Güvenilir Firma Seçimi" }
    ],
    externalLinks: [
      { title: "TSE - TS EN 1504 Beton Onarım Standartları", url: "https://www.tse.org.tr/" },
      { title: "Çevre Bakanlığı - Binalarda Su Yalıtımı Yönetmeliği", url: "https://www.csb.gov.tr/" },
      { title: "İstanbul Teknik Üniversitesi - İnşaat Mühendisliği", url: "https://insaat.itu.edu.tr/" },
      { title: "Fatih Belediyesi - Ruhsat ve İzinler", url: "https://www.fatih.bel.tr/" }
    ]
  },
  "istanbul-komple-ev-tadilati": {
    title: "İstanbul'da Komple Ev Tadilatı Ne Kadar Sürer?",
    date: "12 Ocak 2026",
    image: blogBuilding,
    content: `İstanbul'da komple ev tadilatı ne kadar sürer?" sorusunun tek bir cevabı yoktur. Süre; dairenin metrekaresine, evin boş veya eşyalı olmasına, tesisatın yenilenip yenilenmeyeceğine ve seçilen ürünlerin hazır bulunmasına göre değişir. Planı tamamlanmış, malzemeleri önceden belirlenmiş bir projede 1+1 daire yaklaşık 15–25 iş günü, 2+1 daire 20–35 iş günü, 3+1 ve daha büyük daireler ise 30–45 iş günü içinde tamamlanabilir. Kapsamlı tesisat değişikliği, özel üretim mutfak dolabı, mantolama, çatı tamiri veya ruhsat gerektiren işlemler bu süreyi uzatabilir.

Komple ev tadilatı genellikle keşif ve ölçülendirmeyle başlar. Ardından kırım-söküm, moloz tahliyesi, elektrik ve su tesisatı, banyo su yalıtımı, sıva-alçı, boya badana, seramik, parke, kapı ve dolap montajı gelir. İşlerin doğru sırada ilerlememesi, bitmiş yüzeylerin yeniden kırılmasına ve teslim tarihinin gecikmesine yol açar. Bu nedenle "80 m² ev tadilatı kaç gün sürer?" diye araştırırken yalnızca ekip sayısına değil, firmanın iş programına da bakılmalıdır. Mutfak dolabı, kapı ve özel ölçü mobilyalar daha kırım başlamadan siparişe bağlanırsa bekleme kaynaklı boş günler azaltılabilir.

Fatih'te komple ev tadilatı planlayanlar için bina yaşı ayrıca önemlidir. Eski yapılarda duvar açıldığında yıpranmış temiz su hattı, gider eğimi veya elektrik kabloları görülebilir. Bu riskler keşif sırasında olasılık olarak bütçeye ve takvime eklenmelidir. Güncel İstanbul taleplerinde banyo, mutfak, boya, parke, kapı-pencere, tesisat ve yalıtım işlerinin aynı projede toplandığı görülüyor; bu nedenle net süre ancak kalem kalem keşiften sonra verilebilir.

Fatih merkezli yapı dekorasyon ekibimiz, komple ev tadilatını tek ustaya bağlı ilerleyen dağınık bir süreç yerine, günlük iş planı ve aşamalı kontrol sistemiyle yönetir. Teslim tarihi kadar önemli olan; su yalıtımının bekleme süresine uymak, tesisatı kapatmadan test etmek ve son kontrolde eksik bırakmamaktır.`,
    relatedArticles: [
      { slug: "fatih-banyo-tadilati-dikkat", title: "Banyo Tadilatında Su Yalıtımı" },
      { slug: "anahtar-teslim-tadilat-firma-secimi", title: "Firma Seçim ve Sözleşme" }
    ],
    externalLinks: [
      { title: "Çevre Bakanlığı - İnşaat Atıkları Yönetimi", url: "https://www.csb.gov.tr/" },
      { title: "Fatih Belediyesi - Ruhsat ve İzinler", url: "https://www.fatih.bel.tr/" },
      { title: "İstanbul Teknik Üniversitesi - İnşaat Mühendisliği", url: "https://insaat.itu.edu.tr/" }
    ]
  },
  "fatih-banyo-tadilati-dikkat": {
    title: "Fatih'te Banyo Tadilatı Yaptırırken Nelere Dikkat Edilmeli?",
    date: "5 Ocak 2026",
    image: blogSafety,
    content: `"Fatih'te banyo tadilatı yaptırırken nelere dikkat edilmeli?" sorusunun cevabı yalnızca seramik ve dolap seçiminden ibaret değildir. Özellikle yaşı yüksek binalarda önce temiz su boruları, gider hattı, zemin eğimi ve havalandırma kontrol edilmelidir. Güzel görünen fakat altyapısı yenilenmeyen bir banyo, kısa sürede kaçak, kötü koku veya alt kata su sızması gibi sorunlar çıkarabilir.

Komple banyo tadilatında doğru sıra; ölçü ve yerleşim planı, kırım-söküm, tesisat yenileme, elektrik hazırlığı, zemin düzenleme, su yalıtımı, seramik, tavan, dolap ve vitrifiye montajıdır. "Banyo su yalıtımı nasıl yapılır?" diye araştıranların dikkat etmesi gereken nokta, yalıtımın yalnızca duşakabin altına sürülmemesidir. Islak hacim zemini, duvar birleşimleri, süzgeç çevresi ve boru geçişleri birlikte ele alınmalıdır. Çevre, Şehircilik ve İklim Değişikliği Bakanlığının teknik şartnamesinde ıslak hacim döşemesinde suyun tahliyeye yönlenmesi için en az yüzde 1,5 eğim ve sistem bileşenlerinin birbiriyle uyumlu olması öngörülür.

Küçük banyo tadilatı planlanırken büyük ebat seramik her zaman en iyi seçenek değildir. Kesim miktarı, süzgeç konumu ve duvar kaçıklıkları hesaba katılmadan yapılan seçimler görüntüyü bozabilir. Gömme rezervuar, niş, çamaşır makinesi dolabı veya duş alanı değişecekse ölçüler kırımdan önce netleşmelidir. Banyo ve tuvaletlerde baca ya da mekanik havalandırma bulunması da hem nem hem koku kontrolü açısından önemlidir. Planlı Alanlar İmar Yönetmeliği'nde banyo ve benzeri alanların havalandırma bacası veya mekanik sistemle havalandırılması öngörülmektedir.

"Komple banyo tadilatı kaç gün sürer?" sorusuna çoğu proje için 7–15 iş günü aralığıyla cevap verilebilir; ancak tesisatın tamamen değişmesi, özel ölçü duşakabin ve dolap üretimi süreyi uzatabilir. Teklif alırken su yalıtımının markası, kaç kat uygulanacağı, seramik işçiliği, moloz taşıma, vitrifiye montajı ve teslim sonrası garanti ayrı ayrı yazılmalıdır.

Fatih merkezli ekibimiz; banyo tadilatı, su yalıtımı, tesisat yenileme, seramik ve boya işlerini tek plan altında yöneterek sonradan ortaya çıkan sürprizleri azaltmayı hedefler.`,
    relatedArticles: [
      { slug: "istanbul-komple-ev-tadilati", title: "Komple Ev Tadilatı Süresi" },
      { slug: "anahtar-teslim-tadilat-firma-secimi", title: "Güvenilir Firma Seçimi" }
    ],
    externalLinks: [
      { title: "TS 5447 - Su Yalıtımı Standartları", url: "https://www.tse.org.tr/" },
      { title: "Çevre Bakanlığı - İnşaat Teknik Şartnamesi", url: "https://www.csb.gov.tr/" },
      { title: "Türk Tesisat Mühendisleri Derneği", url: "https://www.ttmd.org.tr/" }
    ]
  },
  "anahtar-teslim-tadilat-firma-secimi": {
    title: "Anahtar Teslim Tadilatta Doğru Firma Nasıl Seçilir?",
    date: "28 Aralık 2025",
    image: blogSustainable,
    content: `"Anahtar teslim tadilatta doğru firma nasıl seçilir?" sorusunun cevabı, en düşük fiyatı veren firmayı bulmak değildir. Doğru firma; keşif yapan, işleri yazılı hale getiren, malzeme sınıfını açıkça belirten ve süreci tek sorumlu üzerinden yöneten firmadır. "Fatih anahtar teslim tadilat firması" aramasındaki teklifleri toplam rakama göre değil, kapsamlarına göre karşılaştırın.

İyi hazırlanmış bir tadilat sözleşmesinde kırım-söküm, moloz tahliyesi, elektrik ve su tesisatı, banyo, mutfak, boya badana, parke, kapı, su yalıtımı, mantolama veya çatı tamiri ayrı ayrı yazılmalıdır. Ürünlerin marka-serisi, metrajı, işçilik kapsamı, başlangıç ve bitiş tarihi, ödeme aşamaları ve ilave işler için onay yöntemi belirtilmelidir. "Anahtar teslim ev tadilatı fiyatı neleri kapsar?" sorusunun cevabı sözleşmede yoksa, başlangıçta uygun görünen teklif sonradan pahalı hale gelebilir.

Referans kontrolünde yalnızca bitmiş fotoğraflara bakmayın. Mümkünse devam eden bir şantiyeyi görün; köşe dönüşlerini, seramik derzlerini, boya yüzeyini ve çalışma düzenini inceleyin. Firmanın ustaları nasıl koordine ettiğini, günlük sorumlunun kim olduğunu ve gecikmede nasıl bilgi verdiğini sorun. Teklifte molozun nasıl uzaklaştırılacağı da yer almalıdır; İstanbul'da inşaat ve yıkıntı atıkları izinli taşıma ve bertaraf süreçlerine tabidir.

Fatih'te duvar kaldırma, cepheye müdahale, çatı değişikliği veya planı etkileyen işler yapılacaksa işe başlamadan önce belediye ve apartman yönetimi açısından gerekli izinler kontrol edilmelidir. Fatih Belediyesinin faaliyet raporlarında "dahili tadilat ruhsatı" ayrı bir işlem olarak izlenmektedir; bu nedenle "içeride yapılıyor, izin gerekmez" varsayımıyla hareket etmek doğru değildir.

Fatih merkezli yapı dekorasyon ekibimiz, keşiften teslimata kadar tek muhatap, yazılı iş programı ve aşama kontrolüyle çalışır. Güvenilir anahtar teslim tadilat; güzel bir sonuç kadar, bütçenin ve teslim tarihinin baştan yönetilmesidir.`,
    relatedArticles: [
      { slug: "istanbul-komple-ev-tadilati", title: "Komple Ev Tadilatı Süresi" },
      { slug: "fatih-banyo-tadilati-dikkat", title: "Banyo Tadilatında Dikkat Edilecekler" }
    ],
    externalLinks: [
      { title: "Fatih Belediyesi - Ruhsat ve İzinler", url: "https://www.fatih.bel.tr/" },
      { title: "Çevre Bakanlığı - İnşaat Atıkları Yönetimi", url: "https://www.csb.gov.tr/" },
      { title: "Tüketici Hakları Derneği", url: "https://www.tuhder.org.tr/" },
      { title: "Ticaret Odası - Müşteri Hakları", url: "https://www.itob.org.tr/" }
    ]
  }
};

const renderInline = (text: string, keyPrefix: string) => {
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return parts.map((part, idx) => {
    if (part.startsWith("**") && part.endsWith("**") && part.length > 4) {
      return (
        <strong key={`${keyPrefix}-${idx}`} className="font-semibold text-foreground">
          {part.slice(2, -2)}
        </strong>
      );
    }
    return part;
  });
};

const renderContent = (content: string) => {
  const blocks = content.split(/\n\s*\n/);
  const sections: any[] = [];

  blocks.forEach((block, blockIdx) => {
    const lines = block.split("\n");

    if (lines.every((line) => /^\s*(#+)\s/.test(line))) {
      lines.forEach((line) => {
        const match = line.match(/^\s*(#{1,3})\s+(.*)$/);
        if (!match) return;
        const level = match[1].length;
        if (level === 1) {
          sections.push(
            <h2 key={`${blockIdx}-${line}`} className="text-3xl font-bold text-foreground mt-12 mb-6">
              {renderInline(match[2], `${blockIdx}-h2`)}
            </h2>
          );
        } else if (level === 2) {
          sections.push(
            <h3 key={`${blockIdx}-${line}`} className="text-2xl font-bold text-foreground mt-10 mb-5">
              {renderInline(match[2], `${blockIdx}-h3`)}
            </h3>
          );
        } else {
          sections.push(
            <h4 key={`${blockIdx}-${line}`} className="text-xl font-bold text-foreground mt-8 mb-4">
              {renderInline(match[2], `${blockIdx}-h4`)}
            </h4>
          );
        }
      });
      return;
    }

    if (lines.length > 1 && lines.every((line) => line.includes("|"))) {
      const tableLines = lines.filter((line) => line.trim() !== "");
      const headerMatch = tableLines[0]?.trim().match(/^\|([\s\S]*)\|$/);
      if (!headerMatch) return;
      const headerCells = headerMatch[1].split("|").map((c) => c.trim());
      const bodyLines = tableLines.filter((line, i) => i !== 1 && line.trim() !== "");
      sections.push(
        <div key={blockIdx} className="overflow-x-auto my-8">
          <table className="w-full text-sm border-collapse min-w-[560px]">
            <thead>
              <tr>
                {headerCells.map((cell, idx) => (
                  <th
                    key={idx}
                    className="text-left font-bold text-white bg-navy px-4 py-3 border border-navy first:rounded-l-lg last:rounded-r-lg"
                  >
                    {cell}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {bodyLines.map((line, rowIdx) => {
                const cells = line.trim().match(/^\|([\s\S]*)\|$/);
                const rowCells = cells ? cells[1].split("|").map((c) => c.trim()) : [];
                return (
                  <tr key={rowIdx}>
                    {rowCells.map((cell, colIdx) => (
                      <td
                        key={colIdx}
                        className="px-4 py-3 border border-border bg-white align-top"
                      >
                        {renderInline(cell, `${blockIdx}-${rowIdx}-${colIdx}`)}
                      </td>
                    ))}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      );
      return;
    }

    if (lines.every((line) => /^\s*[-•]\s/.test(line))) {
      sections.push(
        <ul key={blockIdx} className="space-y-3 my-8">
          {lines.map((line, idx) => (
            <li key={idx} className="flex gap-3 text-lg text-muted-foreground leading-relaxed text-justify">
              <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
              <span>{renderInline(line.replace(/^\s*[-•]\s/, ""), `${blockIdx}-${idx}`)}</span>
            </li>
          ))}
        </ul>
      );
      return;
    }

    if (lines.every((line) => /^\s*\[\s?\]\s/.test(line))) {
      sections.push(
        <ul key={blockIdx} className="space-y-4 my-8">
          {lines.map((line, idx) => (
            <li
              key={idx}
              className="flex gap-3 p-4 bg-concrete rounded-lg border border-border text-lg text-muted-foreground leading-relaxed"
            >
              <span className="mt-1 h-5 w-5 shrink-0 rounded border-2 border-accent flex items-center justify-center text-transparent">
                ✓
              </span>
              <span>{renderInline(line.replace(/^\s*\[\s?\]\s/, ""), `${blockIdx}-${idx}`)}</span>
            </li>
          ))}
        </ul>
      );
      return;
    }

    sections.push(
      <p
        key={blockIdx}
        className="text-lg text-muted-foreground leading-relaxed mb-6 text-justify"
      >
        {renderInline(block, `${blockIdx}-p`)}
      </p>
    );
  });

  return sections;
};

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? blogPosts[slug] : null;

  if (!post) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-foreground mb-4">Yazı Bulunamadı</h1>
          <p className="text-muted-foreground mb-8">Aradığınız blog yazısı mevcut değil.</p>
          <Link to="/" className="inline-flex items-center gap-2 text-accent hover:text-accent/80">
            <ArrowLeft className="h-4 w-4" />
            Ana Sayfaya Dön
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="relative h-96 md:h-[500px] overflow-hidden"
      >
        {post.image ? (
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-navy-dark via-navy to-anthracite relative">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(212,84,38,0.2),transparent_50%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(255,255,255,0.08),transparent_50%)]" />
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
      </motion.div>

      {/* Content */}
      <div className="container-custom py-12 md:py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-3xl mx-auto"
        >
          {/* Back Button */}
          <Link
            to="/#blog"
            className="inline-flex items-center gap-2 text-accent hover:text-accent/80 mb-6 transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Blog'a Dön
          </Link>

          {/* Meta */}
          <div className="flex items-center gap-2 text-muted-foreground mb-4">
            <Calendar className="h-4 w-4" />
            <span className="text-sm">{post.date}</span>
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-8 leading-tight">
            {post.title}
          </h1>

          {/* Divider */}
          <div className="h-1 w-16 bg-accent rounded-full mb-8" />

          {/* Content */}
          <div className="max-w-none">{renderContent(post.content)}</div>

          {/* Related Articles Section */}
          {post.relatedArticles && post.relatedArticles.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-12 p-8 bg-concrete rounded-lg border border-border"
            >
              <h3 className="text-2xl font-bold text-foreground mb-6">İlgili Yazılar</h3>
              <div className="space-y-3">
                {post.relatedArticles.map((article: any, idx: number) => (
                  <Link
                    key={idx}
                    to={`/blog/${article.slug}`}
                    className="flex items-center gap-2 text-accent hover:text-accent/80 transition-colors group"
                  >
                    <span className="text-lg">→</span>
                    <span className="group-hover:underline">{article.title}</span>
                  </Link>
                ))}
              </div>
            </motion.div>
          )}

          {/* External Resources Section */}
          {post.externalLinks && post.externalLinks.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-8 p-8 bg-background border border-border rounded-lg"
            >
              <h3 className="text-2xl font-bold text-foreground mb-6">Otoriter Kaynaklar</h3>
              <div className="space-y-3">
                {post.externalLinks.map((link: any, idx: number) => (
                  <a
                    key={idx}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-accent hover:text-accent/80 transition-colors group"
                  >
                    <span className="text-lg">↗</span>
                    <span className="group-hover:underline">{link.title}</span>
                  </a>
                ))}
              </div>
            </motion.div>
          )}

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 p-8 bg-concrete rounded-lg border border-border"
          >
            <h3 className="text-2xl font-bold text-foreground mb-3">
              Hizmetlerimiz Hakkında Bilgi Almak İster misiniz?
            </h3>
            <p className="text-muted-foreground mb-6">
              Fatih'te tadilat, dekorasyon ve yapı işleri konusunda profesyonel danışmanlık ve uygulama hizmetleri sunuyoruz.
            </p>
            <a
              href="tel:+905325549292"
              className="inline-block px-6 py-3 bg-accent hover:bg-accent/90 text-white rounded-lg font-semibold transition-colors"
            >
              İletişime Geç
            </a>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default BlogPost;
