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
  Layers,
  Ruler,
  Shield,
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
  alcipanAsmaTavanSEO,
  alcipanH1,
  alcipanIntro,
  problemCozumTablosu,
  kaliteStandartBolumu,
  uygulamaAdimlari,
  sikYapilanHatalar,
  yuzeyKalitesi,
  kudebUyarisi,
  kaliteKontrolTablosu,
  alcipanSSS,
  ilgiliHizmetler,
} from "@/data/alcipanAsmaTavanData";

const SITE = "https://kucukleryapi.com.tr";

const AlcapanAsmaTavan = () => {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Alçıpan & Asma Tavan",
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
    description: alcipanAsmaTavanSEO.description,
    url: alcipanAsmaTavanSEO.url,
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
        name: "Alçıpan & Asma Tavan",
        item: alcipanAsmaTavanSEO.url,
      },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: alcipanSSS.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>{alcipanAsmaTavanSEO.title}</title>
        <meta name="description" content={alcipanAsmaTavanSEO.description} />
        <link rel="canonical" href={alcipanAsmaTavanSEO.url} />
        <meta property="og:title" content={alcipanAsmaTavanSEO.title} />
        <meta
          property="og:description"
          content={alcipanAsmaTavanSEO.description}
        />
        <meta property="og:url" content={alcipanAsmaTavanSEO.url} />
        <meta property="og:type" content="article" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={alcipanAsmaTavanSEO.title} />
        <meta
          name="twitter:description"
          content={alcipanAsmaTavanSEO.description}
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
              <span className="text-white">Alçıpan & Asma Tavan</span>
            </nav>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-3xl md:text-5xl lg:text-6xl font-black leading-tight max-w-4xl"
            >
              {alcipanH1}
            </motion.h1>

            <p className="mt-6 text-lg text-white/70 max-w-3xl leading-relaxed">
              Fatih ve Saraçhane çevresinde alçıpan bölme duvar, asma tavan ve
              dekoratif tavan çözümleri. Doğru profil, levha, askı, yalıtım ve
              yüzey kalitesiyle keşif ve uygulama.
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
            {alcipanIntro.map((p, i) => (
              <p
                key={i}
                className="text-lg text-foreground/90 leading-relaxed mb-6"
              >
                {p}
              </p>
            ))}
          </div>
        </section>

        {/* Problem / Çözüm Tablosu */}
        <section className="section-padding bg-concrete">
          <div className="container-custom max-w-5xl">
            <h2 className="text-2xl md:text-4xl font-bold text-foreground mb-3">
              Hangi problemi çözmek istiyoruz?
            </h2>
            <p className="text-muted-foreground mb-8 max-w-3xl">
              İhtiyaca göre doğru sistem kararı, uygulamanın en kritik
              aşamasıdır. Aşağıdaki tablo hangi soruna hangi teknik yaklaşımın
              uygun olduğunu gösterir.
            </p>

            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="font-bold text-foreground">
                      İhtiyaç / Sorun
                    </TableHead>
                    <TableHead className="font-bold text-foreground">
                      Doğru Çözüm Yaklaşımı
                    </TableHead>
                    <TableHead className="font-bold text-foreground">
                      Kontrol Noktası
                    </TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {problemCozumTablosu.map((row, i) => (
                    <TableRow key={i}>
                      <TableCell className="font-medium">
                        {row.problem}
                      </TableCell>
                      <TableCell>{row.cozum}</TableCell>
                      <TableCell className="text-muted-foreground">
                        {row.kontrol}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </div>
        </section>

        {/* Kalite Standart */}
        <section className="section-padding">
          <div className="container-custom max-w-4xl">
            <h2 className="text-2xl md:text-4xl font-bold text-foreground mb-6">
              {kaliteStandartBolumu.title}
            </h2>
            {kaliteStandartBolumu.paragraphs.map((p, i) => (
              <p
                key={i}
                className="text-base md:text-lg text-foreground/90 leading-relaxed mb-5"
              >
                {p}
              </p>
            ))}
          </div>
        </section>

        {/* İnfografik: Sistem Bileşenleri */}
        <section className="section-padding bg-concrete">
          <div className="container-custom max-w-5xl">
            <h2 className="text-2xl md:text-4xl font-bold text-foreground mb-8">
              Sistem bileşenleri nelerdir?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-2">
                    <Layers className="h-6 w-6 text-accent" />
                  </div>
                  <CardTitle className="text-lg">Levha Katmanları</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Tek, çift veya üç kat alçıpan levha; yangın ve akustik
                    hedefe göre seçilir. Knauf D112, D115 ve D131 sistemlerinde
                    farklı kalınlık ve katman seçenekleri bulunur.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-2">
                    <Ruler className="h-6 w-6 text-accent" />
                  </div>
                  <CardTitle className="text-lg">
                    Karkas ve Profiller
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Çelik/metal taşıyıcı profiller, askı elemanları ve aksesuar
                    sistemi. Düzgün aks aralığı ve bağlantı sürekliliği yüzey
                    kalitesinin temelidir.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-2">
                    <Shield className="h-6 w-6 text-accent" />
                  </div>
                  <CardTitle className="text-lg">
                    Yalıtım ve Derz
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Mineral yün ses yalıtımı, derz bandı, derz dolgu ve köşe
                    detayları. Sistem bütünlüğü tek başına levha kalitesinden
                    daha önemlidir.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Uygulama Adımları */}
        <section className="section-padding">
          <div className="container-custom max-w-5xl">
            <h2 className="text-2xl md:text-4xl font-bold text-foreground mb-10">
              Uygulama sırası: iyi işin görünmeyen kısmı
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {uygulamaAdimlari.map((adim) => (
                <div
                  key={adim.step}
                  className="bg-card border border-border p-6"
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

        {/* Sık Yapılan Hatalar */}
        <section className="section-padding bg-concrete">
          <div className="container-custom max-w-4xl">
            <h2 className="text-2xl md:text-4xl font-bold text-foreground mb-8">
              Sık yapılan hatalar
            </h2>
            <ul className="space-y-4">
              {sikYapilanHatalar.map((hata, i) => (
                <li
                  key={i}
                  className="flex items-start gap-3 bg-background border border-border p-4"
                >
                  <AlertTriangle className="h-5 w-5 text-orange flex-shrink-0 mt-0.5" />
                  <span className="text-foreground leading-relaxed">
                    {hata}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Yüzey Kalitesi */}
        <section className="section-padding">
          <div className="container-custom max-w-4xl">
            <h2 className="text-2xl md:text-4xl font-bold text-foreground mb-6">
              {yuzeyKalitesi.title}
            </h2>
            {yuzeyKalitesi.paragraphs.map((p, i) => (
              <p
                key={i}
                className="text-base md:text-lg text-foreground/90 leading-relaxed mb-5"
              >
                {p}
              </p>
            ))}

            <h3 className="text-xl font-bold text-foreground mt-8 mb-4">
              Pratik kabul listesi
            </h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {yuzeyKalitesi.checklist.map((item, i) => (
                <li
                  key={i}
                  className="flex items-start gap-3 text-foreground/90"
                >
                  <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                  <span className="leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
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
                <p className="text-sm italic">{kudebUyarisi.not}</p>
              </AlertDescription>
            </Alert>
          </div>
        </section>

        {/* Kalite Kontrol Tablosu */}
        <section className="section-padding">
          <div className="container-custom max-w-5xl">
            <h2 className="text-2xl md:text-4xl font-bold text-foreground mb-3">
              Alçıpan & asma tavan kalite kontrol tablosu
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
                      Kontrol
                    </TableHead>
                    <TableHead className="font-bold text-foreground">
                      Minimum Beklenen Yaklaşım
                    </TableHead>
                    <TableHead className="font-bold text-foreground">
                      Müşterinin İsteyebileceği Kanıt
                    </TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {kaliteKontrolTablosu.map((row, i) => (
                    <TableRow key={i}>
                      <TableCell className="font-medium">{row.alan}</TableCell>
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
        <section className="section-padding bg-concrete">
          <div className="container-custom max-w-4xl">
            <h2 className="text-2xl md:text-4xl font-bold text-foreground mb-6">
              Neden Küçükler Yapı Dekorasyon?
            </h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                "Her alçıpan projesi için doğru sistem ve levha kararının keşifle belirlenmesi",
                "Knauf ve uluslararası standartlara uygun karkas, levha ve derz uygulaması",
                "Ses, yangın ve nemperformansı hedeflerinin dokümanla desteklenmesi",
                "Yüzey kalitesinin ışık altında kontrol edilerek teslim edilmesi",
                "Fatih ve Saraçhane'deki tarihi yapı koşullarına duyarlı uygulama yaklaşımı",
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
                Alçıpan & Asma Tavan Hakkında Sorular
              </h2>
            </div>

            <Accordion type="single" collapsible className="w-full">
              {alcipanSSS.map((item, i) => (
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
              Alçıpan & Asma Tavan için ücretsiz teklif alın
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

export default AlcapanAsmaTavan;
