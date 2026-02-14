"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, CheckCircle2 } from "lucide-react"
import { useLanguage } from "@/components/language-provider"

export function Hero() {
    const { t } = useLanguage()

    return (
        <section id="hero" className="w-full bg-[#0A0A0D] pt-28 md:pt-36 lg:py-40 border-t-[3px] border-[#8B5CF6]">
            <div className="container flex flex-col items-center justify-center gap-6 pb-6">

                {/* Badge/Pill */}
                <div className="inline-flex items-center rounded-full border border-[rgba(139,92,246,0.4)] px-3 py-1 text-sm font-semibold transition-colors bg-[rgba(139,92,246,0.1)] text-[#8B5CF6] shadow-[0_0_15px_rgba(139,92,246,0.2)]">
                    <span className="flex h-2 w-2 rounded-full bg-[#8B5CF6] mr-2 animate-pulse shadow-[0_0_8px_rgba(139,92,246,0.8)]"></span>
                    {t.hero.badge}
                </div>

                {/* Main Headline */}
                <h1 className="text-center text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl max-w-[1000px] leading-tight text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]">
                    {t.hero.title_prefix}{" "}
                    <span className="bg-clip-text text-transparent bg-gradient-to-b from-white to-[#8B5CF6] drop-shadow-[0_0_20px_rgba(139,92,246,0.3)]">
                        {t.hero.title_gradient}
                    </span>
                </h1>

                {/* Subheadline */}
                <p className="max-w-[750px] text-center text-[#c0c0c0] md:text-xl/relaxed lg:text-xl/relaxed mt-4 leading-relaxed">
                    {t.hero.subtitle}
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-col gap-4 min-[400px]:flex-row pt-8">
                    <Button
                        size="lg"
                        className="bg-gradient-to-r from-[#8B5CF6] to-[#6D28D9] hover:brightness-110 text-white font-bold text-lg px-8 py-6 shadow-[0_4px_24px_rgba(139,92,246,0.5)] border border-[rgba(139,92,246,0.4)] transition-all duration-300 rounded-full hover:translate-y-[-2px] relative overflow-hidden hover:shadow-[0_0_30px_rgba(139,92,246,0.7)]"
                        asChild
                    >
                        <Link href="#personalizada">
                            {t.hero.cta_primary}
                            <ArrowRight className="ml-2 h-5 w-5" />
                            <div className="absolute inset-0 bg-white/10 opacity-0 hover:opacity-100 transition-opacity duration-300" />
                        </Link>
                    </Button>
                    <Button
                        size="lg"
                        variant="outline"
                        className="text-lg px-8 py-6 rounded-full border-2 border-[#8B5CF6] text-[#8B5CF6] bg-transparent hover:bg-[rgba(139,92,246,0.15)] hover:text-white hover:border-[#8B5CF6] shadow-sm transition-all"
                        asChild
                    >
                        <Link href="#catalogo">
                            {t.hero.cta_secondary}
                        </Link>
                    </Button>
                </div>

                {/* Social Proof / Benefit Pills */}
                <div className="flex flex-wrap items-center justify-center gap-6 text-base font-medium text-[#e0e0e0] mt-12 opacity-90">
                    <div className="flex items-center gap-2">
                        <CheckCircle2 className="h-5 w-5 text-[#8B5CF6] drop-shadow-[0_0_8px_rgba(139,92,246,0.6)]" />
                        <span>{t.hero.features.fast_impl}</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <CheckCircle2 className="h-5 w-5 text-[#8B5CF6] drop-shadow-[0_0_8px_rgba(139,92,246,0.6)]" />
                        <span>{t.hero.features.support}</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <CheckCircle2 className="h-5 w-5 text-[#8B5CF6] drop-shadow-[0_0_8px_rgba(139,92,246,0.6)]" />
                        <span>{t.hero.features.roi}</span>
                    </div>
                </div>
            </div>
        </section>
    )
}
