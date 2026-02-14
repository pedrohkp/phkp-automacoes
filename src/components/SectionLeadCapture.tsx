"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useState } from "react"
import { toast } from "sonner"
import { CheckCircle2 } from "lucide-react"

export function SectionLeadCapture() {
    const [isLoading, setIsLoading] = useState(false)
    const [formData, setFormData] = useState({
        tamanho_equipe: "",
        tarefa_repetitiva: "",
        email: ""
    })

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsLoading(true)

        if (!formData.tamanho_equipe || !formData.tarefa_repetitiva || !formData.email) {
            toast.error("Por favor, preencha todos os campos.")
            setIsLoading(false)
            return
        }

        try {
            const webhookUrl = "https://formacao-n8n.euualf.easypanel.host/webhook/phkp-formulario"

            const response = await fetch(webhookUrl, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    tipo: "diagnostico",
                    ...formData,
                    timestamp: new Date().toISOString(),
                }),
            })

            if (response.ok) {
                toast.success("Recebemos sua mensagem! Retornaremos em breve.")
                setFormData({
                    tamanho_equipe: "",
                    tarefa_repetitiva: "",
                    email: ""
                })
            } else {
                throw new Error("Erro na requisição")
            }
        } catch (error) {
            toast.error("Erro ao enviar. Por favor, tente novamente.")
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <section className="w-full py-16 md:py-24 bg-[#2d3139] border-t-[3px] border-[#4a90e2]">
            <div className="container px-4 md:px-6">
                <div className="flex flex-col items-center text-center space-y-4 mb-10">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">
                        Diagnóstico Gratuito: Quanto Tempo Você Está Perdendo?
                    </h2>
                    <p className="max-w-[700px] text-[#c0c0c0] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                        Responda 3 perguntas simples e receba em 24h um diagnóstico personalizado mostrando:
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 text-sm text-[#e0e0e0] mt-4">
                        <div className="flex items-center gap-2">
                            <CheckCircle2 className="w-5 h-5 text-[#0088cc]" />
                            <span>Horas gastas/mês</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <CheckCircle2 className="w-5 h-5 text-[#0088cc]" />
                            <span>Automação com maior ROI</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <CheckCircle2 className="w-5 h-5 text-[#0088cc]" />
                            <span>Economia em 12 meses</span>
                        </div>
                    </div>
                </div>

                <div className="mx-auto w-full max-w-lg bg-[#343945] border border-[#3a3f4b] rounded-2xl p-6 md:p-8 shadow-[0_8px_32px_rgba(0,0,0,0.3)]">
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div className="space-y-2 text-left">
                            <label className="text-sm font-medium text-[#e0e0e0]">Quantas pessoas na sua equipe?</label>
                            <Select
                                value={formData.tamanho_equipe}
                                onValueChange={(val) => setFormData({ ...formData, tamanho_equipe: val })}
                            >
                                <SelectTrigger className="bg-[#343945] border-[#3a3f4b] text-[#e0e0e0] focus:border-[#0088cc] focus:ring-[#0088cc]">
                                    <SelectValue placeholder="Selecione..." />
                                </SelectTrigger>
                                <SelectContent className="bg-[#343945] border-[#3a3f4b] text-[#e0e0e0]">
                                    <SelectItem value="1-5 pessoas">1-5 pessoas</SelectItem>
                                    <SelectItem value="6-20 pessoas">6-20 pessoas</SelectItem>
                                    <SelectItem value="21-50 pessoas">21-50 pessoas</SelectItem>
                                    <SelectItem value="Mais de 50">Mais de 50 pessoas</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>

                        <div className="space-y-2 text-left">
                            <label className="text-sm font-medium text-[#e0e0e0]">Qual tarefa repetitiva mais consome tempo?</label>
                            <Textarea
                                placeholder="Ex: Enviar propostas manualmente, transferir dados entre sistemas..."
                                className="bg-[#343945] border-[#3a3f4b] text-[#e0e0e0] focus:border-[#0088cc] focus:ring-[#0088cc] min-h-[80px]"
                                maxLength={100}
                                value={formData.tarefa_repetitiva}
                                onChange={(e) => setFormData({ ...formData, tarefa_repetitiva: e.target.value })}
                            />
                        </div>

                        <div className="space-y-2 text-left">
                            <label className="text-sm font-medium text-[#e0e0e0]">Seu email para receber o diagnóstico:</label>
                            <Input
                                type="email"
                                placeholder="seu@email.com"
                                className="bg-[#343945] border-[#3a3f4b] text-white focus:border-[#0088cc] focus:ring-[#0088cc]"
                                value={formData.email}
                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            />
                        </div>

                        <Button
                            type="submit"
                            className="w-full bg-[#0088cc] hover:bg-[#006699] text-white shadow-[0_0_15px_rgba(0,136,204,0.4)] transition-all font-semibold h-12 text-lg"
                            disabled={isLoading}
                        >
                            {isLoading ? "Enviando..." : "Receber Diagnóstico Gratuito"}
                        </Button>
                    </form>
                </div>
            </div>
        </section>
    )
}
