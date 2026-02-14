"use client"

import * as React from "react"
import { Slider } from "@/components/ui/slider"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { useLanguage } from "@/components/language-provider"

import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export function SectionROI() {
    const { t } = useLanguage()
    const [hours, setHours] = React.useState([20])
    const [rate, setRate] = React.useState([50])
    const [errorRate, setErrorRate] = React.useState(10)
    const [opportunityCost, setOpportunityCost] = React.useState(0)

    // Formula:
    // EconomyTime = (hours * 4 * rate * 0.7)
    // ReworkCost = (hours * 4 * rate * (errorRate / 100))
    // TotalSavings = EconomyTime + ReworkCost + OpportunityCost
    const economyTime = (hours[0] * 4 * rate[0] * 0.7)
    const reworkCost = (hours[0] * 4 * rate[0] * (errorRate / 100))
    const savings = Math.round(economyTime + reworkCost + opportunityCost)

    return (
        <section id="calculadora" className="w-full bg-[#0F1F3D] border-t border-[rgba(37,99,235,0.15)] py-20 md:py-20 scroll-mt-20">
            <div className="container">
                <div className="mx-auto max-w-4xl text-center mb-12">
                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl mb-4 text-white drop-shadow-[0_0_20px_rgba(37,99,235,0.3)]">
                        {t.roi.title}
                    </h2>
                    <p className="text-[#9CA3AF] text-lg">
                        {t.roi.subtitle}
                    </p>
                </div>

                <div className="grid gap-8 md:grid-cols-2 items-start bg-[#1A2B4F] border border-[rgba(37,99,235,0.15)] rounded-3xl p-6 md:p-12 shadow-[0_8px_32px_rgba(0,0,0,0.5)]">

                    {/* Inputs Column */}
                    <div className="space-y-8">
                        {/* Hours Slider */}
                        <div className="space-y-4">
                            <div className="flex justify-between items-center">
                                <label className="font-medium text-sm md:text-base text-[#E5E7EB]">
                                    {t.roi.label_hours}
                                </label>
                                <span className="font-bold text-[#3B82F6] bg-[rgba(37,99,235,0.1)] px-3 py-1 rounded-md border border-[rgba(37,99,235,0.3)]">
                                    {hours[0]}h
                                </span>
                            </div>
                            <Slider
                                value={hours}
                                onValueChange={setHours}
                                max={40}
                                step={1}
                                className="py-4 [&>.relative>.bg-primary]:bg-[#F97316] [&>.relative>.bg-secondary]:bg-[#0F1F3D] [&_span:focus-visible]:ring-[#F97316] [&_span]:border-[#F97316] [&_span]:bg-[#0F1F3D] [&_span]:shadow-[0_0_10px_rgba(249,115,22,0.7)]"
                            />
                        </div>

                        {/* Rate Slider */}
                        <div className="space-y-4">
                            <div className="flex justify-between items-center">
                                <label className="font-medium text-sm md:text-base text-[#E5E7EB]">
                                    {t.roi.label_rate}
                                </label>
                                <span className="font-bold text-[#3B82F6] bg-[rgba(37,99,235,0.1)] px-3 py-1 rounded-md border border-[rgba(37,99,235,0.3)]">
                                    R$ {rate[0]}
                                </span>
                            </div>
                            <Slider
                                value={rate}
                                onValueChange={setRate}
                                min={20}
                                max={300}
                                step={5}
                                className="py-4 [&>.relative>.bg-primary]:bg-[#F97316] [&>.relative>.bg-secondary]:bg-[#0F1F3D] [&_span:focus-visible]:ring-[#F97316] [&_span]:border-[#F97316] [&_span]:bg-[#0F1F3D] [&_span]:shadow-[0_0_10px_rgba(249,115,22,0.7)]"
                            />
                        </div>

                        {/* Error Rate Input */}
                        <div className="space-y-3">
                            <Label htmlFor="errorRate" className="text-[#E5E7EB] font-medium">Taxa de erro em processos manuais (%)</Label>
                            <Input
                                id="errorRate"
                                type="number"
                                min={0}
                                max={100}
                                value={errorRate}
                                onChange={(e) => setErrorRate(Number(e.target.value))}
                                className="bg-[#0F1F3D] border-[rgba(37,99,235,0.3)] text-white focus-visible:ring-[#F97316] focus-visible:border-[#F97316]"
                            />
                            <p className="text-xs text-[#9CA3AF]">Retrabalho por erros de digitação, esquecimentos, etc.</p>
                        </div>

                        {/* Opportunity Cost Input */}
                        <div className="space-y-3">
                            <Label htmlFor="opportunityCost" className="text-[#E5E7EB] font-medium">Quanto você deixa de ganhar por não ter tempo? (R$/mês)</Label>
                            <Input
                                id="opportunityCost"
                                type="number"
                                min={0}
                                value={opportunityCost}
                                onChange={(e) => setOpportunityCost(Number(e.target.value))}
                                className="bg-[#0F1F3D] border-[rgba(37,99,235,0.3)] text-white focus-visible:ring-[#F97316] focus-visible:border-[#F97316]"
                            />
                            <p className="text-xs text-[#9CA3AF]">Ex: vendas perdidas, projetos atrasados</p>
                        </div>
                    </div>

                    {/* Result Column */}
                    <div className="bg-gradient-to-br from-[#2563EB] to-[#1D4ED8] text-white rounded-2xl p-8 md:p-10 text-center shadow-[0_8px_24px_rgba(37,99,235,0.5)] h-full flex flex-col justify-center items-center space-y-6 border border-[rgba(255,255,255,0.2)]">
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
                            className="w-full font-bold text-[#2563EB] bg-white hover:bg-white/90 transition-all shadow-md hover:shadow-lg"
                            asChild
                        >
                            <Link href="#personalizada">
                                {t.roi.cta}
                                <ArrowRight className="ml-2 h-4 w-4" />
                            </Link>
                        </Button>

                        <p className="text-xs text-blue-100/70 mt-4 italic">
                            * Cálculo baseado em 70% de eficiência da automação (padrão do mercado) + custo real de retrabalho por erro humano. Valores reais variam por processo.
                        </p>
                    </div>

                </div>
            </div>
        </section>
    )
}
