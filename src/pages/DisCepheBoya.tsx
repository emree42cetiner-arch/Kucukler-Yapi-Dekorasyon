import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Phone,
  MessageCircle,
  ArrowRight,
  ChevronRight,
  AlertTriangle,
  CheckCircle2,
  Info,
  PaintBucket,
  Droplets,
  Shield,
  Thermometer,
  Wind,
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
  disCepheBoyaSEO,
  disCepheH1,
  disCepheIntro,
  arizaTeshisTablosu,
  yuzeyHazirligi,
  silikonElastomerik,
  uygulamaKosullari,
  iskeleGuvencesi,
  kudebUyarisi,
  uygulamaStandardi,
  disCepheSSS,
  ilgiliHizmetler,
} from "@/data/disCepheBoyaData";

const SITE = "https://kucukleryapi.com.tr";

const DisCepheBoya = () => {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Dış Cephe Boya",
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
    description: disCepheBoyaSEO.description,
    url: disCepheBoyaSEO.url,
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
        name: "Dış Cephe Boya",
        item: disCepheBoyaSEO.url,
      },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: disCepheSSS.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>{disCepheBoyaSEO.title}</title>
        <meta name="description" content={disCepheBoyaSEO.description} />
        <link rel="canonical" href={disCepheBoyaSEO.url} />
        <meta property="og:title" content={disCepheBoyaSEO.title} />
        <meta
          property="og:description"
          content={disCepheBoyaSEO.description}
        />
        <meta property="og:url" content={disCepheBoyaSEO.url} />
        <meta property="og:type" content="article" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={disCepheBoyaSEO.title} />
        <meta
          name="twitter:description"
          content={disCepheBoyaSEO.description}
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
              <span className="text-white">Dış Cephe Boya</span>
            </nav>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-3xl md:text-5xl lg:text-6xl font-black leading-tight max-w-4xl"
            >
              {disCepheH1}
            </motion.h1>

            <p className="mt-6 text-lg text-white/70 max-w-3xl leading-relaxed">
              Fatih ve Saraçhane çevresinde dış cephe boya. Çatlak, kabarma ve
              rutubet nedenini analiz eden; yüzey hazırlığı, astar, doğru boya
              sistemi ve güvenli iskeleyle uygulama.
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
            {disCepheIntro.map((p, i) => (
              <p
                key={i}
                className="text-lg text-foreground/90 leading-relaxed mb-6"
              >
                {p}
              </p>
            ))}
          </div>
        </section>

        {/* Arıza Teşhis Tablosu */}
        <section className="section-padding bg-concrete">
          <div className="container-custom max-w-5xl">
            <h2 className="text-2xl md:text-4xl font-bold text-foreground mb-3">
              Önce arızayı teşhis edin: çatlak başka, rutubet başka
            </h2>
            <p className="text-muted-foreground mb-8 max-w-3xl">
              Dış cephede görülen her belirtinin arkasında farklı bir neden
              yatabilir. Doğru teşhis, doğru uygulamanın temelidir.
            </p>

            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="font-bold text-foreground">
                      Belirti
                    </TableHead>
                    <TableHead className="font-bold text-foreground">
                      Muhtemel Neden
                    </TableHead>
                    <TableHead className="font-bold text-foreground">
                      Yanlış Yaklaşım
                    </TableHead>
                    <TableHead className="font-bold text-foreground">
                      Doğru Yaklaşım
                    </TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {arizaTeshisTablosu.map((row, i) => (
                    <TableRow key={i}>
                      <TableCell className="font-medium">
                        {row.belirti}
                      </TableCell>
                      <TableCell>{row.neden}</TableCell>
                      <TableCell>
                        <span className="inline-flex items-center gap-1.5 text-red-600">
                          <AlertTriangle className="h-3.5 w-3.5" />
                          {row.yanlisYaklasim}
                        </span>
                      </TableCell>
                      <TableCell>
                        <span className="inline-flex items-center gap-1.5 text-green-700">
                          <CheckCircle2 className="h-3.5 w-3.5" />
                          {row.dogruYaklasim}
                        </span>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </div>
        </section>

        {/* Yüzey Hazırlığı */}
        <section className="section-padding">
          <div className="container-custom max-w-4xl">
            <h2 className="text-2xl md:text-4xl font-bold text-foreground mb-6">
              {yuzeyHazirligi.title}
            </h2>
            {yuzeyHazirligi.paragraphs.map((p, i) => (
              <p
                key={i}
                className="text-base md:text-lg text-foreground/90 leading-relaxed mb-5"
              >
                {p}
              </p>
            ))}
          </div>
        </section>

        {/* Silikonlu ve Elastomerik */}
        <section className="section-padding bg-concrete">
          <div className="container-custom max-w-4xl">
            <h2 className="text-2xl md:text-4xl font-bold text-foreground mb-6">
              {silikonElastomerik.title}
            </h2>
            {silikonElastomerik.paragraphs.map((p, i) => (
              <p
                key={i}
                className="text-base md:text-lg text-foreground/90 leading-relaxed mb-5"
              >
                {p}
              </p>
            ))}
          </div>
        </section>

        {/* İnfografik: Boya Sistemi Bileşenleri */}
        <section className="section-padding">
          <div className="container-custom max-w-5xl">
            <h2 className="text-2xl md:text-4xl font-bold text-foreground mb-8">
              Dış cephe boya sistemi bileşenleri
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-2">
                    <PaintBucket className="h-6 w-6 text-accent" />
                  </div>
                  <CardTitle className="text-lg">Boya Katmanı</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Silikonlu, akrilik veya elastomerik; dış koşullara uygun
                    boya sistemi. UV direnci, su iticilik ve buhar geçirgenliği
                    ürüne göre değişir.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-2">
                    <Droplets className="h-6 w-6 text-accent" />
                  </div>
                  <CardTitle className="text-lg">Astar Sistemi</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Emiciliği dengeleyen, alkaliliği yöneten ve son kat boya ile
                    yüzey arasındaki bağı kuvvetlendiren ara katman.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-2">
                    <Shield className="h-6 w-6 text-accent" />
                  </div>
                  <CardTitle className="text-lg">
                    Yüzey Hazırlığı
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Gevşek sıva, kabarmış boya, çatlak ve kirli yüzeylerin
                    temizlenmesi. Uzun ömürlü boyanın temel sigortasıdır.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Uygulama Koşulları */}
        <section className="section-padding bg-concrete">
          <div className="container-custom max-w-4xl">
            <h2 className="text-2xl md:text-4xl font-bold text-foreground mb-6">
              {uygulamaKosullari.title}
            </h2>
            {uygulamaKosullari.paragraphs.map((p, i) => (
              <p
                key={i}
                className="text-base md:text-lg text-foreground/90 leading-relaxed mb-5"
              >
                {p}
              </p>
            ))}

            {/* İnfografik: Kuruma ve Tüketim Değerleri */}
            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-background border border-border p-5">
                <div className="flex items-center gap-2 mb-2">
                  <Thermometer className="h-5 w-5 text-accent" />
                  <span className="text-sm font-semibold text-muted-foreground">
                    İlk Kuruma
                  </span>
                </div>
                <p className="text-2xl font-black text-foreground">1–3 saat</p>
                <p className="text-xs text-muted-foreground mt-1">
                  20°C koşulunda, Polisan A1 Silikonlu Düz
                </p>
              </div>
              <div className="bg-background border border-border p-5">
                <div className="flex items-center gap-2 mb-2">
                  <Wind className="h-5 w-5 text-accent" />
                  <span className="text-sm font-semibold text-muted-foreground">
                    Sert Kuruma
                  </span>
                </div>
                <p className="text-2xl font-black text-foreground">24 saat</p>
                <p className="text-xs text-muted-foreground mt-1">
                  Tam kürlenme süresi, koşullara göre değişir
                </p>
              </div>
              <div className="bg-background border border-border p-5">
                <div className="flex items-center gap-2 mb-2">
                  <PaintBucket className="h-5 w-5 text-accent" />
                  <span className="text-sm font-semibold text-muted-foreground">
                    Tek Kat Kapama
                  </span>
                </div>
                <p className="text-2xl font-black text-foreground">
                  8–10 m²/L
                </p>
                <p className="text-xs text-muted-foreground mt-1">
                  Üretici verisi; yüzey emiciliğine göre değişir
                </p>
              </div>
            </div>
            <p className="text-xs text-muted-foreground mt-3 italic">
              Not: Değerler üretici teknik verisidir; saha garantisi değildir.
              Yüzey emiciliği, doku, uygulama aleti ve hava koşulları gerçek
              tüketimi değiştirir.
            </p>
          </div>
        </section>

        {/* İskele */}
        <section className="section-padding">
          <div className="container-custom max-w-4xl">
            <h2 className="text-2xl md:text-4xl font-bold text-foreground mb-6">
              {iskeleGuvencesi.title}
            </h2>
            {iskeleGuvencesi.paragraphs.map((p, i) => (
              <p
                key={i}
                className="text-base md:text-lg text-foreground/90 leading-relaxed mb-5"
              >
                {p}
              </p>
            ))}

            <Alert className="mt-4 border-blue-200 bg-blue-50">
              <Info className="h-5 w-5 text-blue-600" />
              <AlertTitle className="text-blue-800">
                Güvenlik standartları
              </AlertTitle>
              <AlertDescription className="text-blue-700 mt-2">
                TS EN 12810-1 ve TS EN 12811-1 standartlarına uygun iskele,
                haftalık periyodik kontrol ve kuvvetli rüzgâr sonrası ek
                denetim ile çalıştırılmalıdır. İskele yalnızca maliyet değil,
                iş güvenliği kalemidir.
              </AlertDescription>
            </Alert>
          </div>
        </section>

        {/* KUDEB Uyarısı */}
        <section className="section-padding bg-concrete">
          <div className="container-custom max-w-4xl">
            <Alert className="border-amber-300 bg-amber-50">
              <Info className="h-5 w-5 text-amber-600" />
              <AlertTitle className="text-amber-800">
                {kudebUyarisi.title}
              </AlertTitle>
              <AlertDescription className="text-amber-700 space-y-3 mt-2">
                <p>{kudebUyarisi.content}</p>
                <p className="font-semibold">{kudebUyarisi.vurgu}</p>
              </AlertDescription>
            </Alert>
          </div>
        </section>

        {/* Uygulama Standardı Tablosu */}
        <section className="section-padding">
          <div className="container-custom max-w-5xl">
            <h2 className="text-2xl md:text-4xl font-bold text-foreground mb-3">
              Dış cephe boya uygulama standardı
            </h2>
            <p className="text-muted-foreground mb-8 max-w-3xl">
              Her aşamada hangi kalite kriteri aranır ve müşterinin
              isteyebileceği kanıt nedir?
            </p>

            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="font-bold text-foreground">
                      Aşama
                    </TableHead>
                    <TableHead className="font-bold text-foreground">
                      Kalite Kriteri
                    </TableHead>
                    <TableHead className="font-bold text-foreground">
                      Teslim Kanıtı
                    </TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {uygulamaStandardi.map((row, i) => (
                    <TableRow key={i}>
                      <TableCell className="font-medium">
                        {row.asama}
                      </TableCell>
                      <TableCell>{row.kriter}</TableCell>
                      <TableCell className="text-muted-foreground">
                        {row.kanit}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </div>
        </section>

        {/* Neden Küçükler */}
        <section className="section-padding">
          <div className="container-custom max-w-4xl">
            <h2 className="text-2xl md:text-4xl font-bold text-foreground mb-6">
              Neden Küçükler Yapı Dekorasyon?
            </h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                "Çatlak, kabarma ve rutubet belirtilerinin nedenine göre ayrıştırılmış yüzey değerlendirmesi",
                "Üretici teknik föyüne uygun astar ve boya sistemi seçimi",
                "TS EN standartlarına uygun güvenli iskele kurulumu ve kontrolü",
                "Fatih ve Saraçhane'deki tarihi yapı koşullarına göre uygulama kararı",
                "Teslim öncesi renk, doku ve yüzey kalitesi kontrolü",
              ].map((b, i) => (
                <li
                  key={i}
                  className="flex items-start gap-3 bg-card border border-border p-4"
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
                Dış Cephe Boya Hakkında Sorular
              </h2>
            </div>

            <Accordion type="single" collapsible className="w-full">
              {disCepheSSS.map((item, i) => (
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
              Dış Cephe Boya için ücretsiz teklif alın
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

export default DisCepheBoya;
