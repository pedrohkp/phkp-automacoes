"use client"

import * as React from "react"
import { Slider } from "@/components/ui/slider"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { useLanguage } from "@/components/language-provider"

export function SectionROI() {
    const { t } = useLanguage()
    const [hours, setHours] = React.useState([20])
    const [rate, setRate] = React.useState([50])

    const savings = Math.round((hours[0] * 4 * rate[0]) * 0.7)

    return (
        <section id="calculadora" className="w-full bg-[#242730] border-t border-[rgba(255,255,255,0.05)] py-20 md:py-20 scroll-mt-20">
            <div className="container">
                <div className="mx-auto max-w-4xl text-center mb-12">
                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl mb-4 text-white drop-shadow-[0_0_20px_rgba(0,136,204,0.3)]">
                        {t.roi.title}
                    </h2>
                    <p className="text-[#c0c0c0] text-lg">
                        {t.roi.subtitle}
                    </p>
                </div>

                <div className="grid gap-8 md:grid-cols-2 items-center bg-[#343945] border border-[rgba(0,136,204,0.3)] rounded-3xl p-6 md:p-12 shadow-[0_8px_32px_rgba(0,0,0,0.5)]">

                    {/* Sliders Column */}
                    <div className="space-y-10">
                        <div className="space-y-4">
                            <div className="flex justify-between items-center">
                                <label className="font-medium text-sm md:text-base text-[#e0e0e0]">
                                    {t.roi.label_hours}
                                </label>
                                <span className="font-bold text-[#0088cc] bg-[rgba(0,136,204,0.1)] px-3 py-1 rounded-md border border-[rgba(0,136,204,0.3)]">
                                    {hours[0]}h
                                </span>
                            </div>
                            <Slider
                                value={hours}
                                onValueChange={setHours}
                                max={40}
                                step={1}
                                className="py-4 [&>.relative>.bg-primary]:bg-[#0088cc] [&>.relative>.bg-secondary]:bg-[#1a1a1c] [&_span:focus-visible]:ring-[#0088cc] [&_span]:border-[#0088cc] [&_span]:bg-[#1a1a1c] [&_span]:shadow-[0_0_10px_rgba(0,136,204,0.7)]"
                            />
                        </div>

                        <div className="space-y-4">
                            <div className="flex justify-between items-center">
                                <label className="font-medium text-sm md:text-base text-[#e0e0e0]">
                                    {t.roi.label_rate}
                                </label>
                                <span className="font-bold text-[#0088cc] bg-[rgba(0,136,204,0.1)] px-3 py-1 rounded-md border border-[rgba(0,136,204,0.3)]">
                                    R$ {rate[0]}
                                </span>
                            </div>
                            <Slider
                                value={rate}
                                onValueChange={setRate}
                                min={20}
                                max={300}
                                step={5}
                                className="py-4 [&>.relative>.bg-primary]:bg-[#0088cc] [&>.relative>.bg-secondary]:bg-[#1a1a1c] [&_span:focus-visible]:ring-[#0088cc] [&_span]:border-[#0088cc] [&_span]:bg-[#1a1a1c] [&_span]:shadow-[0_0_10px_rgba(0,136,204,0.7)]"
                            />
                        </div>
                    </div>

                    {/* Result Column */}
                    <div className="bg-gradient-to-b from-[#0088cc] to-[#006699] text-white rounded-2xl p-8 md:p-10 text-center shadow-[0_8px_24px_rgba(0,136,204,0.4)] h-full flex flex-col justify-center items-center space-y-6 border border-[rgba(255,255,255,0.2)]">
                        <div className="space-y-2">
                            <p className="text-blue-100 font-medium tracking-wide uppercase text-sm">{t.roi.result_title}</p>
                            <div className="text-4xl md:text-5xl font-extrabold tracking-tight text-white drop-shadow-md">
                                R$ {savings.toLocaleString('pt-BR')}
                            </div>
                            <p className="text-sm text-blue-100/80">
                                {t.roi.result_note}
                            </p>
                        </div>

                        <Button
                            size="lg"
                            variant="secondary"
                            className="w-full font-bold text-[#006699] bg-white hover:bg-white/90 transition-all shadow-md hover:shadow-lg"
                            asChild
                        >
                            <Link href="#personalizada">
                                {t.roi.cta}
                                <ArrowRight className="ml-2 h-4 w-4" />
                            </Link>
                        </Button>
                    </div>

                </div>
            </div>
        </section>
    )
}
