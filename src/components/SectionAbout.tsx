"use client"

import Image from "next/image"
import { useLanguage } from "@/components/language-provider"

export function SectionAbout() {
    const { t } = useLanguage()

    return (
        <section id="sobre" className="w-full bg-[#0F1F3D] border-t border-[rgba(37,99,235,0.15)] py-20 md:py-20 scroll-mt-20">
            <div className="container">
                <div className="bg-gradient-to-r from-[#1A2B4F] to-[#0F1F3D] border border-[rgba(37,99,235,0.4)] rounded-3xl p-8 md:p-12 shadow-[0_8px_32px_rgba(0,0,0,0.5)]">
                    <h2 className="text-3xl font-bold tracking-tight mb-8 md:mb-12 text-center md:text-left text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]">
                        {t.about.title}
                    </h2>

                    <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
                        {/* Photo Column */}
                        <div className="relative aspect-square md:aspect-[4/5] rounded-2xl overflow-hidden bg-[#0A1628] shadow-[0_0_20px_rgba(37,99,235,0.3)] w-full max-w-[400px] mx-auto border-2 border-[#2563EB]">
                            <Image
                                src="/pedro-final.jpg"
                                alt="Pedro Pavão - Especialista em Automação"
                                fill
                                className="object-cover"
                            />
                        </div>

                        {/* Text Column */}
                        <div className="space-y-6 text-lg leading-relaxed text-[#9CA3AF]">
                            {/* Name and Title */}
                            <div>
                                <h3 className="text-2xl md:text-3xl font-bold text-white mb-1 drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">
                                    Pedro Pavão
                                </h3>
                                <p className="text-base md:text-lg font-medium text-[#3B82F6]">
                                    {t.about.role}
                                </p>
                            </div>

                            <p>{t.about.p1}</p>
                            <p>{t.about.p2}</p>
                            <p>{t.about.p3}</p>
                            <p className="font-medium text-[#E5E7EB]">
                                {t.about.p4_1}<br />
                                {t.about.p4_2}<br />
                                {t.about.p4_3}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
