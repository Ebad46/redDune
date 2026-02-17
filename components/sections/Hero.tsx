"use client";

import { useRef } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import Background from "@/public/images/Background.jpeg";

import { useLanguage } from "@/components/providers/LanguageProvider";

export function Hero() {
    // const heroRef = useRef<HTMLDivElement>(null); // Unused with AOS
    // const bgRef = useRef<HTMLDivElement>(null); // Unused
    const textRef = useRef<HTMLDivElement>(null);
    const { t, direction } = useLanguage();

    return (
        <section
            className="relative h-screen w-full overflow-hidden flex items-center"
            id="home"
            dir={direction}
        >
            {/* Background with Modern Gradient */}
            <div className="absolute inset-0 z-0 bg-neutral-900">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/20 via-neutral-900 to-neutral-950" />
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 mix-blend-overlay" />
                <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
            </div>

            {/* Content */}
            <div className="container relative z-20 px-6 mx-auto pt-20">
                <div
                    ref={textRef}
                    className={`max-w-3xl text-white space-y-8 ${direction === "rtl" ? "-mr-40" : "-ml-40"}`}
                    data-aos="fade-up"
                    data-aos-duration="1000"
                    data-aos-delay="200"
                >
                    <div className="inline-block px-4 py-1.5 bg-primary/20 border border-primary/50 rounded-full backdrop-blur-md">
                        <span className="text-primary-foreground text-xs md:text-sm font-bold tracking-[0.2em] uppercase">
                            {t("hero.badge")}
                        </span>
                    </div>
                    <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl font-bold leading-[0.9] tracking-tighter">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-black to-red-500">RED</span> DUNE German
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-black to-red-500"> EXPERTS.</span>
                    </h1>
                    <p className="font-sans text-lg md:text-2xl text-gray-300 leading-relaxed max-w-xl font-light mt-8">
                        {t("hero.description")}
                        <span className="block mt-2 text-white font-medium">{t("hero.tagline")}</span>
                    </p>
                </div>
            </div>
            <div className="pt-24"><Image src="/BG.jpeg" alt="WorkShop" fill className="object-cover transition-transform duration-1000 group-hover:scale-110" /></div>
            {/* Scroll Indicator */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 animate-bounce">
                <div className="w-[30px] h-[50px] rounded-full border-2 border-white/50 flex justify-center p-2">
                    <div className="w-1 h-3 bg-white rounded-full animate-scroll" />
                </div>
            </div>
        </section>
    );
}
