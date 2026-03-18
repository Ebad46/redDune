"use client";

import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { useLanguage } from "@/components/providers/LanguageProvider";
import { PRODUCT_DETAILS } from "@/lib/data";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import { Contact } from "@/components/sections/Contact";

export default function ProductsPage() {
  const { t } = useLanguage();

  const featuredProductIds = [
    "spare-parts",
    "service-contract",
    "360-inspections",
  ];
  const featuredProducts = PRODUCT_DETAILS.filter((product) =>
    featuredProductIds.includes(product.id),
  );

  return (
    <main className="min-h-screen bg-background text-foreground">
      <Header />

      {/* Hero */}
      <section className="relative h-[60vh] min-h-[480px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/bmw.jpeg')] bg-cover bg-center" />
        <div className="absolute inset-0 bg-black/60" />

        <div className="relative z-10 container mx-auto px-6 text-center">
          <p
            className="text-sm font-semibold tracking-wide uppercase text-primary/80 mb-4"
            data-aos="fade-down"
            data-aos-duration="800"
          >
            {t("nav.products")}
          </p>
          <h1
            className="text-4xl md:text-6xl font-heading font-black text-white uppercase tracking-tight mb-6"
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="100"
          >
            {t("products.pageTitle")}
          </h1>
          <p
            className="max-w-2xl mx-auto text-base md:text-lg text-white/80 leading-relaxed"
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="200"
          >
            {t("products.pageDescription")}
          </p>
          <div className="pt-8" data-aos="fade-up" data-aos-delay="300">
            <Link href="#catalog">
              <Button className="rounded-full px-8 h-14 text-base font-bold shadow-lg shadow-primary/30 hover:scale-105 transition-transform duration-300">
                {t("products.browseProducts")}
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Product Sections */}
      <section className="py-20" id="catalog">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-12">
            <div>
              <h2 className="font-heading text-3xl md:text-4xl font-bold tracking-tight text-secondary">
                {t("products.catalogTitle")}
              </h2>
              <p className="mt-2 max-w-2xl text-muted-foreground leading-relaxed">
                {t("products.catalogSubtitle")}
              </p>
            </div>
          </div>

          <div className="space-y-20">
            {featuredProducts.map((product, index) => {
              const isEven = index % 2 === 0;
              return (
                <div
                  key={product.id}
                  className={cn(
                    "flex flex-col lg:flex-row items-center gap-12",
                    isEven ? "lg:flex-row" : "lg:flex-row-reverse",
                  )}
                >
                  <div
                    className="relative w-full lg:w-1/2 h-[400px] rounded-3xl overflow-hidden shadow-2xl border border-gray-100"
                    data-aos={isEven ? "fade-right" : "fade-left"}
                    data-aos-duration="1000"
                  >
                    <Image
                      src={product.image}
                      alt={t(product.title)}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover transition-transform duration-700 hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                  </div>

                  <div
                    className="w-full lg:w-1/2"
                    data-aos={isEven ? "fade-left" : "fade-right"}
                    data-aos-duration="1000"
                  >
                    <p className="text-sm font-semibold tracking-wide uppercase text-primary mb-4">
                      {t(product.title)}
                    </p>
                    <h3 className="font-heading text-4xl font-black text-secondary tracking-tight mb-6">
                      {t(product.title)}
                    </h3>
                    <p className="text-base text-muted-foreground leading-relaxed mb-8">
                      {t(product.description)}
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                      {product.features?.map((feature, featureIndex) => (
                        <div
                          key={featureIndex}
                          className="flex items-start gap-3 bg-white/60 border border-gray-100 rounded-2xl p-4 shadow-sm"
                        >
                          <span className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold">
                            {featureIndex + 1}
                          </span>
                          <p className="text-sm font-semibold text-secondary">
                            {t(feature)}
                          </p>
                        </div>
                      ))}
                    </div>

                    <Link href={`/products/${product.id}`}>
                      <Button className="rounded-full px-10 py-4 text-base font-bold shadow-xl shadow-primary/20 hover:scale-105 transition-transform bg-primary hover:bg-primary/90">
                        {t("products.learnMore")}
                      </Button>
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
        <Contact />
      <Footer />
    </main>
  );
}
