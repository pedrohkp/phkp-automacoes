"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, CheckCircle2 } from "lucide-react"
import { useLanguage } from "@/components/language-provider"

export function Hero() {
    const { t } = useLanguage()

    return (
        <section id="hero" className="w-full bg-[#0A1628] pt-28 md:pt-36 lg:py-40 border-t-[3px] border-[#2563EB]">
            <div className="container flex flex-col items-center justify-center gap-6 pb-6">

                {/* Badge/Pill */}
                <div className="inline-flex items-center rounded-full border border-[rgba(37,99,235,0.4)] px-3 py-1 text-sm font-semibold transition-colors bg-[rgba(37,99,235,0.1)] text-[#3B82F6] shadow-[0_0_15px_rgba(37,99,235,0.2)]">
                    <span className="flex h-2 w-2 rounded-full bg-[#3B82F6] mr-2 animate-pulse shadow-[0_0_8px_rgba(37,99,235,0.8)]"></span>
                    {t.hero.badge}
                </div>

                {/* Main Headline */}
                <h1 className="text-center text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl max-w-[1000px] leading-tight text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]">
                    {t.hero.title_prefix}{" "}
                    <span className="bg-clip-text text-transparent bg-gradient-to-b from-white to-[#3B82F6] drop-shadow-[0_0_20px_rgba(37,99,235,0.3)]">
                        {t.hero.title_gradient}
                    </span>
                </h1>

                {/* Subheadline */}
                <p className="max-w-[750px] text-center text-[#9CA3AF] md:text-xl/relaxed lg:text-xl/relaxed mt-4 leading-relaxed">
                    {t.hero.subtitle}
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-col gap-4 min-[400px]:flex-row pt-8">
                    <Button
                        size="lg"
                        className="bg-gradient-to-br from-[#F97316] to-[#EA580C] shadow-[0_4px_24px_rgba(249,115,22,0.6)] hover:shadow-[0_6px_32px_rgba(249,115,22,0.8)] text-white font-bold text-lg px-8 py-6 border border-[rgba(249,115,22,0.2)] transition-all duration-300 rounded-full hover:translate-y-[-2px] relative overflow-hidden"
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
                        className="text-lg px-8 py-6 rounded-full border-2 border-[#2563EB] text-[#2563EB] bg-transparent hover:bg-[#2563EB] hover:text-white shadow-sm transition-all"
                        asChild
                    >
                        <Link href="#catalogo">
                            {t.hero.cta_secondary}
                        </Link>
                    </Button>
                </div>

                {/* Social Proof / Benefit Pills */}
                <div className="flex flex-wrap items-center justify-center gap-6 text-base font-medium text-[#E5E7EB] mt-12 opacity-90">
                    <div className="flex items-center gap-2">
                        <CheckCircle2 className="h-5 w-5 text-[#3B82F6] drop-shadow-[0_0_8px_rgba(37,99,235,0.6)]" />
                        <span>{t.hero.features.fast_impl}</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <CheckCircle2 className="h-5 w-5 text-[#3B82F6] drop-shadow-[0_0_8px_rgba(37,99,235,0.6)]" />
                        <span>{t.hero.features.support}</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <CheckCircle2 className="h-5 w-5 text-[#3B82F6] drop-shadow-[0_0_8px_rgba(37,99,235,0.6)]" />
                        <span>{t.hero.features.roi}</span>
                    </div>
                </div>
            </div>
        </section>
    )
}
