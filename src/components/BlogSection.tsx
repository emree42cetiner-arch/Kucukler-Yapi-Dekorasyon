import { motion, Variants } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import blogBuilding from "@/assets/blog-building.jpg";
import blogSafety from "@/assets/blog-safety.jpg";
import blogSustainable from "@/assets/blog-sustainable.jpg";

const blogPosts = [
  {
    image: "/images/blog/blog-asma-tavan-gizli-isik.jpg",
    title: "Fatih ve Sarayağası Evlerinde Asma Tavan Çatlakları ve Gizli Işık Çökme Tehlikesi",
    excerpt: "Asma tavan çatlamalarının gerçek nedeni, ince sac profil ve plastik dübel hileleri: 5 adımlı çelik iskeletli, lazer kotlu Q4 yüzey kalitesinde çatlamaz tavan protokolü.",
    date: "12 Eylül 2026",
    slug: "fatih-asma-tavan-catlaklari-gizli-isik"
  },
  {
    image: "/images/blog/blog-duvar-kirimi.jpg",
    title: "Fatih ve Sarayağası'nda Komple Ev Tadilatı ve Duvar Kırımı",
    excerpt: "Taşıyıcı duvar ile bölme duvar arasındaki hayati fark, yığma ve karkas bina gerçeği, yasal mevzuat ve duvar yıkmadan önce uygulanan 4 adımlı statik keşif protokolü.",
    date: "12 Eylül 2026",
    slug: "fatih-komple-ev-tadilati-duvar-kirimi"
  },
  {
    image: "/images/blog/blog-banyo-su-yalitimi.jpg",
    title: "Fatih ve Sarayağası'nda Banyo Tadilatı ve Kesin Çözümlü Su Yalıtımı",
    excerpt: "Alt kata hiçbir damla su sızdırmayan banyo için 6 adımlı 'Sıfır Kaçak' protokolü: tam kırım, pah bandı, çift komponentli elastik izolasyon ve C2TE S1 esnek yapıştırıcı.",
    date: "12 Eylül 2026",
    slug: "fatih-banyo-tadilati-su-yalitimi"
  },
  {
    image: "/images/blog/blog-su-tesisati-demir-boru.jpg",
    title: "Fatih ve Sarayağası'nda Eski Binaların Su Tesisatı (Demir Boru) Yenileme Protokolü",
    excerpt: "40 yıllık demir boruların paslanması, ölümcül usta hataları (folyosuz boru, kılıfsız döşeme) ve 5 adımlı TS EN standartlı tesisat protokolü.",
    date: "12 Eylül 2026",
    slug: "fatih-su-tesisati-demir-boru-yenileme"
  },
  {
    image: "/images/blog/blog-yigma-mantolama-hatalari.jpg",
    title: "Fatih'teki Eski ve Yığma Binalarda Isı Yalıtımı (Mantolama) Hataları",
    excerpt: "Isı köprüleri, içten yalıtımda terleme tehlikesi ve yanlış strafor seçimi: eski ve yığma binalarda doğru yalıtımın 5 adımlı protokolü.",
    date: "12 Eylül 2026",
    slug: "fatih-yigma-binalarda-mantolama-hatalari"
  },
  {
    image: "/images/blog/blog-rutubet-cozumleri.jpg",
    title: "Fatih Sarayağası'nda Zemin ve Bodrum Kat Rutubet Çözümleri",
    excerpt: "Kılcal nem, tuz kusması ve taşıyıcı sisteme zarar veren rutubete karşı kalıcı yalıtım protokolü: 6 adımda şeffaf çözüm rehberi.",
    date: "12 Eylül 2026",
    slug: "fatih-sarayagasi-rutubet-yalitim-cozumleri"
  },
  {
    image: blogBuilding,
    title: "İstanbul'da Komple Ev Tadilatı Ne Kadar Sürer?",
    excerpt: "Daire büyüklüğü, yıkım miktarı ve malzeme seçimlerinin tadilat süresine etkisi ve gerçekçi bir planlama rehberi.",
    date: "12 Ocak 2026",
    slug: "istanbul-komple-ev-tadilati"
  },
  {
    image: blogSafety,
    title: "Fatih'te Banyo Tadilatı Yaptırırken Nelere Dikkat Edilmeli?",
    excerpt: "Su yalıtımı, tesisat yenileme, seramik ve vitrifiye seçiminde profesyonel bir sürecin olmazsa olmazları.",
    date: "5 Ocak 2026",
    slug: "fatih-banyo-tadilati-dikkat"
  },
  {
    image: blogSustainable,
    title: "Anahtar Teslim Tadilatta Doğru Firma Nasıl Seçilir?",
    excerpt: "Sözleşme, garanti, referanslar ve şeffaf fiyatlandırma — güvenilir bir yapı dekorasyon firmasında aramanız gerekenler.",
    date: "28 Aralık 2025",
    slug: "anahtar-teslim-tadilat-firma-secimi"
  }
];

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }
  }
};

const BlogSection = () => {
  return (
    <section id="blog" className="section-padding bg-concrete">
      <div className="container-custom">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={itemVariants}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Sektörel Bilgiler ve İpuçları
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            İnşaat ve tadilat sektöründeki en güncel gelişmeleri takip edin.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <article
              key={index}
              className="group bg-background rounded-lg shadow-sm hover:shadow-xl overflow-hidden border border-border hover:border-accent/40 transition-all duration-300"
            >
              <div className="overflow-hidden">
                {post.image ? (
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                ) : (
                  <div className="w-full h-56 bg-gradient-to-br from-navy-dark via-navy to-anthracite relative">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(212,84,38,0.25),transparent_50%)]" />
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(255,255,255,0.08),transparent_50%)]" />
                  </div>
                )}
              </div>
              <div className="p-6">
                <span className="text-xs text-muted-foreground uppercase tracking-wide">
                  {post.date}
                </span>
                <h3 className="text-xl font-bold text-foreground mt-2 mb-3 group-hover:text-primary transition-colors duration-300">
                  {post.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {post.excerpt}
                </p>
                <Link
                  to={`/blog/${post.slug}`}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-accent hover:text-accent/80 transition-colors duration-200"
                >
                  Devamını Oku
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
