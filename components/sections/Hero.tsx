"use client";

import { useRef } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/Button";

import { useLanguage } from "@/components/providers/LanguageProvider";

export function Hero() {
    const textRef = useRef<HTMLDivElement>(null);
    const { t, direction } = useLanguage();

    return (
        <section
            className="relative h-screen w-full overflow-hidden flex items-center"
            id="home"
            dir={direction}
        >
            {/* Background with Diagonal Split */}
            <div className="absolute inset-0 z-0">
                {/* Left Side - Pink to Red */}
                <div
                    className="absolute inset-0 bg-gradient-to-b from-[#ccaaaa] via-[#df5656] to-[#db0514]"
                    style={{
                        clipPath: 'polygon(0 0, 55% 0, 45% 100%, 0 100%)',
                    }}
                />

                {/* Right Side - Dark Blue with Engine Image */}
                <div
                    className="absolute inset-0"
                    style={{
                        clipPath: 'polygon(55% 0, 100% 0, 100% 100%, 45% 100%)',
                    }}
                >
                    <div className="absolute inset-0 bg-slate-900">
                        <Image
                            src="/BG.jpg"
                            alt="Engine Background"
                            fill
                            className="object-cover opacity-40"
                            priority
                        />
                    </div>
                    {/* Red Glow Bottom Right */}
                    <div className="absolute bottom-0 right-0 w-[70%] h-[70%] bg-gradient-to-tl from-[#b1122b]/40 via-[#7a0f1f]/20 to-transparent blur-3xl pointer-events-none" />
                </div>

                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 mix-blend-overlay" />
                <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
            </div>

            {/* Car Image - Fully Responsive */}
            <div
                className="
                    absolute top-1/2 -translate-y-1/2 z-10 -ml-12
                    
                    /* Extra Small Mobile (320px - 374px) */
                    -right-[4rem] w-[280px] h-[290px]
                    
                    /* Small Mobile (375px - 424px) */
                    xs:-right-[5rem] xs:w-[350px] xs:h-[360px]
                    
                    /* Mobile (425px - 639px) */
                    sm:-right-[6rem] sm:w-[420px] sm:h-[435px]
                    
                    /* Tablet (640px - 767px) */
                    md:-right-[9rem] md:w-[650px] md:h-[670px]
                    
                    /* Large Tablet (768px - 1023px) */
                    lg:-right-[14rem] lg:w-[950px] lg:h-[980px]
                    
                    /* Desktop (1024px - 1279px) */
                    xl:-right-[18rem] xl:w-[1250px] xl:h-[1290px]
                    
                    /* Large Desktop (1280px - 1535px) */
                    2xl:-right-[22rem] 2xl:w-[1550px] 2xl:h-[1600px]
                    
                    /* Extra Large (1536px+) */
                    [1920px]:-right-[28rem] [1920px]:w-[1900px] [1920px]:h-[1950px]
                "
                data-aos="fade-left"
                data-aos-duration="1200"
                data-aos-delay="400"
                data-aos-offset="0"
            >
                <Image
                    src="/BG2.png"
                    alt="Red Dune Car"
                    fill
                    className="object-contain drop-shadow-2xl"
                    priority
                    quality={90}
                />
            </div>

            {/* Content - Fully Responsive Text */}
            <div className="container relative z-20 mx-auto h-full flex items-center lg:-ml-6
                px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12
            ">
                <div
                    ref={textRef}
                    className={`
                        w-full text-white space-y-4 sm:space-y-5 md:space-y-6 lg:space-y-8
                        max-w-[90%] xs:max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl xl:max-w-3xl
                        ${direction === "rtl"
                            ? "mr-0 sm:mr-4 md:mr-8 lg:mr-12 xl:mr-16"
                            : "ml-0 sm:ml-4 md:ml-8 lg:ml-12 xl:ml-16"
                        }
                    `}
                    data-aos="fade-up"
                    data-aos-duration="1000"
                    data-aos-delay="200"
                >
                    {/* Badge */}
                    <div className="inline-block px-3 py-1 sm:px-4 sm:py-1.5 bg-primary/20 border border-primary/50 rounded-full backdrop-blur-md">
                        <span className="text-primary-foreground text-[10px] xs:text-xs sm:text-sm font-bold tracking-[0.15em] sm:tracking-[0.2em] uppercase">
                            {t("hero.badge")}
                        </span>
                    </div>

                    {/* Main Heading - Responsive Sizes */}
                    <h1 className="
                        font-heading font-bold leading-[0.9] tracking-tighter
                        text-3xl
                        xs:text-4xl
                        sm:text-5xl
                        md:text-6xl
                        lg:text-7xl
                        xl:text-8xl
                        2xl:text-[7rem]
                    ">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-black to-red-500">
                            RED
                        </span>{" "}
                        DUNE German
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-black to-red-500">
                            {" "}EXPERTS.
                        </span>
                    </h1>

                    {/* Description - Responsive Sizes */}
                    <div className="space-y-2 sm:space-y-3 md:space-y-4">
                        <p className="
                            font-sans leading-relaxed font-light
                            max-w-[95%] xs:max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl
                            text-sm text-gray-300
                            xs:text-base
                            sm:text-lg
                            md:text-xl
                            lg:text-2xl
                        ">
                            {t("hero.description")}
                        </p>
                        <p className="
                            text-white font-medium
                            text-base
                            xs:text-lg
                            sm:text-xl
                            md:text-2xl
                            lg:text-3xl
                        ">
                            {t("hero.tagline")}
                        </p>
                    </div>

                    {/* CTA Buttons - Responsive */}
                    <div className="flex flex-col xs:flex-row gap-3 sm:gap-4 pt-2 sm:pt-4">
                        <Button
                            size="lg"
                            className="
                                bg-red-600 hover:bg-red-700 text-white font-bold uppercase tracking-wider
                                rounded-full shadow-2xl shadow-red-600/50 transition-all hover:scale-105
                                text-xs px-4 py-4
                                xs:text-sm xs:px-6 xs:py-5
                                sm:text-base sm:px-8 sm:py-6
                                md:text-lg
                            "
                        >
                            {t("hero.cta")}
                        </Button>
                    </div>
                </div>
            </div>

            {/* Scroll Indicator - Hide on very small screens */}
            <div className="absolute bottom-6 sm:bottom-10 left-1/2 -translate-x-1/2 z-20 animate-bounce hidden xs:block">
                <div className="w-[25px] h-[40px] sm:w-[30px] sm:h-[50px] rounded-full border-2 border-white/50 flex justify-center p-2">
                    <div className="w-1 h-3 bg-white rounded-full animate-scroll" />
                </div>
            </div>
        </section>
    );
}