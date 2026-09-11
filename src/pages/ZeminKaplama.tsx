import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Phone,
  MessageCircle,
  ArrowRight,
  ChevronRight,
  CheckCircle2,
  Info,
  Layers,
  Ruler,
  Droplets,
} from "lucide-react";
import TopBar from "@/components/TopBar";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  zeminKaplamaSEO,
  zeminKaplamaH1,
  zeminKaplamaIntro,
  malzemeSecimMatrisi,
  laminatKullanimSinifi,
  laminaSinifDegerleri,
  vinilAilesi,
  epoksiZemin,
  epoksiKontrolEslikleri,
  epoksiUygulamaAdimlari,
  seramikBolumu,
  altZeminKontrolListesi,
  ticariAramaFirsati,
  fiyatBolumu,
  fiyat8Kalem,
  kaliteStandardi,
  zeminSSS,
  ilgiliHizmetler,
} from "@/data/zeminKaplamaData";

const SITE = "https://kucukleryapi.com.tr";

const ZeminKaplama = () => {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Zemin Kaplama",
    provider: {
      "@type": "LocalBusiness",
      name: "Küçükler Yapı Dekorasyon",
      telephone: "+905325549292",
      areaServed: "İstanbul",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Fatih",
        addressRegion: "İstanbul",
        addressCountry: "TR",
      },
    },
    areaServed: [
      "Fatih",
      "Saraçhane",
      "Eminönü",
      "Balat",
      "Fındıkzade",
      "Aksaray",
      "Beyazıt",
      "Laleli",
      "Zeytinburnu",
      "Eyüpsultan",
      "Beyoğlu",
      "Bakırköy",
      "Bahçelievler",
      "Başakşehir",
      "Esenler",
    ],
    description: zeminKaplamaSEO.description,
    url: zeminKaplamaSEO.url,
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Ana Sayfa", item: SITE + "/" },
      {
        "@type": "ListItem",
        position: 2,
        name: "Hizmetler",
        item: SITE + "/#hizmetlerimiz",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Zemin Kaplama",
        item: zeminKaplamaSEO.url,
      },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: zeminSSS.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>{zeminKaplamaSEO.title}</title>
        <meta name="description" content={zeminKaplamaSEO.description} />
        <link rel="canonical" href={zeminKaplamaSEO.url} />
        <meta property="og:title" content={zeminKaplamaSEO.title} />
        <meta
          property="og:description"
          content={zeminKaplamaSEO.description}
        />
        <meta property="og:url" content={zeminKaplamaSEO.url} />
        <meta property="og:type" content="article" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={zeminKaplamaSEO.title} />
        <meta
          name="twitter:description"
          content={zeminKaplamaSEO.description}
        />
        <script type="application/ld+json">
          {JSON.stringify(serviceSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
      </Helmet>

      <TopBar />
      <Navigation />

      <main>
        {/* Hero */}
        <section className="bg-navy-dark text-white py-16 md:py-24">
          <div className="container-custom">
            <nav
              aria-label="Breadcrumb"
              className="mb-6 text-sm text-white/60 flex items-center gap-2 flex-wrap"
            >
              <Link to="/" className="hover:text-white">
                Ana Sayfa
              </Link>
              <ChevronRight className="h-3 w-3" />
              <Link to="/#hizmetlerimiz" className="hover:text-white">
                Hizmetler
              </Link>
              <ChevronRight className="h-3 w-3" />
              <span className="text-white">Zemin Kaplama</span>
            </nav>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-3xl md:text-5xl lg:text-6xl font-black leading-tight max-w-4xl"
            >
              {zeminKaplamaH1}
            </motion.h1>

            <p className="mt-6 text-lg text-white/70 max-w-3xl leading-relaxed">
              Fatih ve Saraçhane çevresinde laminat parke, seramik, vinil ve
              epoksi zemin. Kullanım yoğunluğuna uygun malzeme seçimi, doğru
              alt zemin hazırlığı ve temiz montaj.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="https://wa.me/905325549292"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20b558] text-white px-6 py-4 font-semibold uppercase tracking-wide text-sm transition"
              >
                <MessageCircle className="h-4 w-4" /> WhatsApp
              </a>
              <a
                href="tel:+905325549292"
                className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white px-6 py-4 font-semibold uppercase tracking-wide text-sm transition"
              >
                <Phone className="h-4 w-4" /> Hemen Ara
              </a>
              <Link
                to="/#iletisim"
                className="inline-flex items-center gap-2 bg-accent hover:bg-accent/90 text-white px-6 py-4 font-semibold uppercase tracking-wide text-sm transition"
              >
                Teklif Al
              </Link>
            </div>
          </div>
        </section>

        {/* Intro */}
        <section className="section-padding">
          <div className="container-custom max-w-4xl">
            {zeminKaplamaIntro.map((p, i) => (
              <p
                key={i}
                className="text-lg text-foreground/90 leading-relaxed mb-6"
              >
                {p}
              </p>
            ))}
          </div>
        </section>

        {/* Malzeme Seçim Matrisi */}
        <section className="section-padding bg-concrete">
          <div className="container-custom max-w-5xl">
            <h2 className="text-2xl md:text-4xl font-bold text-foreground mb-3">
              Malzeme seçimi matrisi
            </h2>
            <p className="text-muted-foreground mb-8 max-w-3xl">
              Her malzeme ailesinin güçlü tarafı, dikkat edilmesi gereken koşulu
              ve tipik kullanım alanı farklıdır.
            </p>

            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="font-bold text-foreground">
                      Malzeme
                    </TableHead>
                    <TableHead className="font-bold text-foreground">
                      Güçlü Tarafı
                    </TableHead>
                    <TableHead className="font-bold text-foreground">
                      Dikkat Edilmesi Gereken
                    </TableHead>
                    <TableHead className="font-bold text-foreground">
                      Tipik Kullanım
                    </TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {malzemeSecimMatrisi.map((row, i) => (
                    <TableRow key={i}>
                      <TableCell className="font-medium">
                        {row.malzeme}
                      </TableCell>
                      <TableCell>{row.gucluTaraf}</TableCell>
                      <TableCell className="text-muted-foreground">
                        {row.dikkat}
                      </TableCell>
                      <TableCell>{row.tipikKullanim}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </div>
        </section>

        {/* Laminat Kullanım Sınıfı */}
        <section className="section-padding">
          <div className="container-custom max-w-4xl">
            <h2 className="text-2xl md:text-4xl font-bold text-foreground mb-6">
              {laminatKullanimSinifi.title}
            </h2>
            {laminatKullanimSinifi.paragraphs.map((p, i) => (
              <p
                key={i}
                className="text-base md:text-lg text-foreground/90 leading-relaxed mb-5"
              >
                {p}
              </p>
            ))}

            {/* İnfografik: EN 13329 kullanım sınıfları */}
            <div className="mt-8">
              <h3 className="text-lg font-bold text-foreground mb-3">
                EN 13329 çerçevesinde kullanım sınıfı / aşınma verileri
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {laminaSinifDegerleri.map((d) => (
                  <div
                    key={d.sinif}
                    className="bg-card border border-border p-5 text-center"
                  >
                    <div className="text-3xl font-black text-accent mb-1">
                      Sınıf {d.sinif}
                    </div>
                    <div className="text-sm font-semibold text-foreground mb-2">
                      AC{d.ac}
                    </div>
                    <p className="text-2xl font-black text-foreground">
                      {d.cevrim}
                    </p>
                    <p className="text-xs text-muted-foreground mb-2">
                      aşınma çevrimi
                    </p>
                    <span className="inline-block bg-accent/10 text-accent text-xs font-semibold px-3 py-1 rounded-full">
                      {d.kullanim}
                    </span>
                  </div>
                ))}
              </div>
              <p className="text-xs text-muted-foreground mt-3 italic">
                Kaynak: EGGER teknik veri föyü. Kullanım sınıfı yalnızca
                kalınlıkla belirlenmez; alanın trafiğine uygun sınıf seçimi
                önemlidir.
              </p>
            </div>
          </div>
        </section>

        {/* Vinil Ailesi */}
        <section className="section-padding bg-concrete">
          <div className="container-custom max-w-4xl">
            <h2 className="text-2xl md:text-4xl font-bold text-foreground mb-6">
              {vinilAilesi.title}
            </h2>
            {vinilAilesi.paragraphs.map((p, i) => (
              <p
                key={i}
                className="text-base md:text-lg text-foreground/90 leading-relaxed mb-5"
              >
                {p}
              </p>
            ))}
          </div>
        </section>

        {/* Epoksi */}
        <section className="section-padding">
          <div className="container-custom max-w-4xl">
            <h2 className="text-2xl md:text-4xl font-bold text-foreground mb-6">
              {epoksiZemin.title}
            </h2>
            {epoksiZemin.paragraphs.map((p, i) => (
              <p
                key={i}
                className="text-base md:text-lg text-foreground/90 leading-relaxed mb-5"
              >
                {p}
              </p>
            ))}

            {/* İnfografik: Epoksi saha kontrol eşikleri */}
            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-card border border-border p-5">
                <div className="flex items-center gap-2 mb-2">
                  <Droplets className="h-5 w-5 text-accent" />
                  <span className="text-sm font-semibold text-muted-foreground">
                    Alt yüzey nemi
                  </span>
                </div>
                <p className="text-2xl font-black text-foreground">
                  4% altı
                </p>
                <p className="text-xs text-muted-foreground mt-1">
                  Sikafloor örnek sisteminde beton alt yüzey nemi sınırı
                </p>
              </div>
              <div className="bg-card border border-border p-5">
                <div className="flex items-center gap-2 mb-2">
                  <Ruler className="h-5 w-5 text-accent" />
                  <span className="text-sm font-semibold text-muted-foreground">
                    Çiy noktası farkı
                  </span>
                </div>
                <p className="text-2xl font-black text-foreground">
                  3°C min
                </p>
                <p className="text-xs text-muted-foreground mt-1">
                  Yüzey sıcaklığı ile çiy noktası arası aranan fark
                </p>
              </div>
              <div className="bg-card border border-border p-5">
                <div className="flex items-center gap-2 mb-2">
                  <Layers className="h-5 w-5 text-accent" />
                  <span className="text-sm font-semibold text-muted-foreground">
                    Yüksek nem riski
                  </span>
                </div>
                <p className="text-lg font-black text-foreground">
                  Kabarma / blushing
                </p>
                <p className="text-xs text-muted-foreground mt-1">
                  Aderans kaybı ve yüzey görünümü bozulması
                </p>
              </div>
            </div>
            <p className="text-xs text-muted-foreground mt-3 italic">
              Not: Saha kontrol eşikleri sistemden sisteme değişebileceği için
              her zaman ilgili teknik föy esas alınmalıdır.
            </p>
          </div>
        </section>

        {/* Epoksi Uygulama Sırası */}
        <section className="section-padding bg-concrete">
          <div className="container-custom max-w-5xl">
            <h2 className="text-2xl md:text-4xl font-bold text-foreground mb-10">
              Epoksi uygulama sırası
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {epoksiUygulamaAdimlari.map((adim) => (
                <div
                  key={adim.step}
                  className="bg-background border border-border p-6"
                >
                  <div className="text-3xl font-black text-accent mb-2">
                    {String(adim.step).padStart(2, "0")}
                  </div>
                  <h3 className="font-bold text-foreground mb-2">
                    {adim.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {adim.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Seramik */}
        <section className="section-padding">
          <div className="container-custom max-w-4xl">
            <h2 className="text-2xl md:text-4xl font-bold text-foreground mb-6">
              {seramikBolumu.title}
            </h2>
            {seramikBolumu.paragraphs.map((p, i) => (
              <p
                key={i}
                className="text-base md:text-lg text-foreground/90 leading-relaxed mb-5"
              >
                {p}
              </p>
            ))}
          </div>
        </section>

        {/* Alt Zemin Kontrol Listesi */}
        <section className="section-padding bg-concrete">
          <div className="container-custom max-w-5xl">
            <h2 className="text-2xl md:text-4xl font-bold text-foreground mb-3">
              Alt zemin kontrol listesi
            </h2>
            <p className="text-muted-foreground mb-8 max-w-3xl">
              Kaplama tipine göre alt zeminde aranan koşullar farklıdır.
            </p>

            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="font-bold text-foreground">
                      Kontrol
                    </TableHead>
                    <TableHead className="font-bold text-foreground">
                      Laminat / Vinil
                    </TableHead>
                    <TableHead className="font-bold text-foreground">
                      Seramik
                    </TableHead>
                    <TableHead className="font-bold text-foreground">
                      Epoksi
                    </TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {altZeminKontrolListesi.map((row, i) => (
                    <TableRow key={i}>
                      <TableCell className="font-medium">
                        {row.kontrol}
                      </TableCell>
                      <TableCell>{row.laminat}</TableCell>
                      <TableCell>{row.seramik}</TableCell>
                      <TableCell className="font-medium text-accent">
                        {row.epoksi}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </div>
        </section>

        {/* Ticari Arama Fırsatı */}
        <section className="section-padding">
          <div className="container-custom max-w-4xl">
            <h2 className="text-2xl md:text-4xl font-bold text-foreground mb-6">
              {ticariAramaFirsati.title}
            </h2>
            {ticariAramaFirsati.paragraphs.map((p, i) => (
              <p
                key={i}
                className="text-base md:text-lg text-foreground/90 leading-relaxed mb-5"
              >
                {p}
              </p>
            ))}

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
              {[
                "Ofis",
                "Mağaza",
                "Restoran",
                "Ortak alan",
                "Kiralık ticari birim",
                "Depo",
                "Bina girişi",
                "Servis alanı",
              ].map((alan, i) => (
                <div
                  key={i}
                  className="flex items-center justify-center bg-card border border-border p-4 text-center text-sm font-semibold text-foreground"
                >
                  {alan}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Fiyat */}
        <section className="section-padding bg-concrete">
          <div className="container-custom max-w-4xl">
            <h2 className="text-2xl md:text-4xl font-bold text-foreground mb-6">
              {fiyatBolumu.title}
            </h2>
            {fiyatBolumu.paragraphs.map((p, i) => (
              <p
                key={i}
                className="text-base md:text-lg text-foreground/90 leading-relaxed mb-5"
              >
                {p}
              </p>
            ))}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-6">
              {fiyat8Kalem.map((kalem, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3 bg-background border border-border p-4"
                >
                  <span className="flex items-center justify-center w-7 h-7 rounded-full bg-accent text-accent-foreground text-xs font-black flex-shrink-0">
                    {i + 1}
                  </span>
                  <span className="text-foreground leading-relaxed">
                    {kalem}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Kalite Standardı */}
        <section className="section-padding">
          <div className="container-custom max-w-5xl">
            <h2 className="text-2xl md:text-4xl font-bold text-foreground mb-3">
              Zemin kaplama kalite standardı
            </h2>
            <p className="text-muted-foreground mb-8 max-w-3xl">
              Her aşamada hangi kontrol yapılır ve hangi kalite göstergesi
              aranır?
            </p>

            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="font-bold text-foreground">
                      Aşama
                    </TableHead>
                    <TableHead className="font-bold text-foreground">
                      Kontrol
                    </TableHead>
                    <TableHead className="font-bold text-foreground">
                      Kalite Göstergesi
                    </TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {kaliteStandardi.map((row, i) => (
                    <TableRow key={i}>
                      <TableCell className="font-medium">
                        {row.asama}
                      </TableCell>
                      <TableCell>{row.kontrol}</TableCell>
                      <TableCell className="text-muted-foreground">
                        {row.gosterge}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>

            <Alert className="mt-8 border-amber-300 bg-amber-50">
              <Info className="h-5 w-5 text-amber-600" />
              <AlertTitle className="text-amber-800">
                Fatih'te zemin kaplama ve koruma süreçleri
              </AlertTitle>
              <AlertDescription className="text-amber-700 mt-2">
                Tescilli kültür varlığı veya sit alanındaki yapılarda döşeme
                müdahaleleri koruma prosedürleriyle birlikte
                değerlendirilmelidir. İBB KUDEB, basit onarım kapsamında bazı
                döşeme işlerini tanımlarken; esaslı onarımı proje temelli ayrı
                bir süreç olarak ele alır. Uygulamaya başlamadan önce izin
                yolunun belirlenmesi gerekir.
              </AlertDescription>
            </Alert>
          </div>
        </section>

        {/* Neden Küçükler */}
        <section className="section-padding bg-concrete">
          <div className="container-custom max-w-4xl">
            <h2 className="text-2xl md:text-4xl font-bold text-foreground mb-6">
              Neden Küçükler Yapı Dekorasyon?
            </h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                "Kullanım yoğunluğuna ve trafiğe göre doğru ürün sınıfı seçimi",
                "EN 13329, ISO 10582, ISO 19322 gibi standartlara dayalı malzeme değerlendirmesi",
                "Alt zemin nemi, düzlüğü ve sağlamlığının kaplama öncesinde kontrolü",
                "Epoksi uygulamalarında üretici teknik föyündeki saha koşullarına uyum",
                "Ofis, mağaza, depo ve ticari alanlar için ayrı uygulama yaklaşımı",
              ].map((b, i) => (
                <li
                  key={i}
                  className="flex items-start gap-3 bg-background border border-border p-4"
                >
                  <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">{b}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Kısa SSS */}
        <section className="section-padding bg-background" id="sss">
          <div className="container-custom max-w-3xl">
            <div className="text-center mb-10">
              <span className="text-sm font-semibold uppercase tracking-widest text-accent">
                SSS
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-3">
                Zemin Kaplama Hakkında Sorular
              </h2>
            </div>

            <Accordion type="single" collapsible className="w-full">
              {zeminSSS.map((item, i) => (
                <AccordionItem key={i} value={`item-${i}`}>
                  <AccordionTrigger className="text-left font-semibold text-foreground">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        {/* İlgili Hizmetler */}
        <section className="section-padding bg-concrete">
          <div className="container-custom">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8">
              İlgili Hizmetler
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {ilgiliHizmetler.map((hizmet) => (
                <Link
                  key={hizmet.slug}
                  to={`/hizmetler/${hizmet.slug}`}
                  className="group bg-background border border-border p-6 hover:border-accent transition-colors"
                >
                  <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-accent transition-colors">
                    {hizmet.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    {hizmet.description}
                  </p>
                  <span className="inline-flex items-center gap-1 text-sm font-semibold text-accent">
                    Detay <ArrowRight className="h-3 w-3" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="bg-anthracite py-16">
          <div className="container-custom text-center text-white">
            <h2 className="text-2xl md:text-4xl font-bold mb-6">
              Zemin Kaplama için ücretsiz teklif alın
            </h2>
            <div className="flex flex-wrap justify-center gap-3">
              <a
                href="https://wa.me/905325549292"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20b558] text-white px-6 py-4 font-semibold uppercase tracking-wide text-sm transition"
              >
                <MessageCircle className="h-4 w-4" /> WhatsApp
              </a>
              <Link
                to="/#iletisim"
                className="inline-flex items-center gap-2 bg-accent hover:bg-accent/90 text-white px-6 py-4 font-semibold uppercase tracking-wide text-sm transition"
              >
                Teklif Formu
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <WhatsAppFloat />
    </div>
  );
};

export default ZeminKaplama;