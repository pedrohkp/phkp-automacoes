"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { CheckCircle2 } from "lucide-react"
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
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
                    {/* Botão Principal */}
                    <a
                        href="https://calendar.app.google/HMcfcEcCeci7Zu4k6"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-8 py-4 bg-gradient-to-br from-[#F97316] to-[#EA580C] text-white font-semibold rounded-lg shadow-[0_4px_24px_rgba(249,115,22,0.6)] hover:shadow-[0_6px_32px_rgba(249,115,22,0.8)] hover:scale-105 transition-all text-lg flex items-center gap-2"
                    >
                        <span>📅</span> Agendar Reunião Gratuita de 30min
                    </a>

                    {/* Botão Secundário */}
                    <button
                        onClick={() => document.getElementById('catalogo')?.scrollIntoView({ behavior: 'smooth' })}
                        className="px-8 py-4 border-2 border-[#2563EB] text-[#2563EB] font-semibold rounded-lg hover:bg-[#2563EB] hover:text-white transition-all text-lg"
                    >
                        Ver Automações Prontas
                    </button>
                </div>

                {/* Texto abaixo dos botões */}
                <p className="mt-6 text-[#9CA3AF] text-sm text-center max-w-md mx-auto">
                    Sem compromisso. Sem taxa de setup. Só uma conversa sobre como economizar tempo.
                </p>

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
