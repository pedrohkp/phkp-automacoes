"use client"

import { useRouter } from "next/navigation"

import * as React from "react"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { formDiscoverySchema } from "@/lib/schemas"
import { toast } from "sonner"
import { cn } from "@/lib/utils"

export function FormDiscovery() {
    const router = useRouter()
    const form = useForm<z.infer<typeof formDiscoverySchema>>({
        resolver: zodResolver(formDiscoverySchema),
        defaultValues: {
            nome: "",
            email: "",
            whatsapp: "",
            empresa: "",
            mensagem: "",
        },
    })

    const [isLoading, setIsLoading] = React.useState(false)

    async function onSubmit(values: z.infer<typeof formDiscoverySchema>) {
        setIsLoading(true)
        try {
            const webhookUrl = "https://formacao-n8n.euualf.easypanel.host/webhook/phkp-formulario"

            const response = await fetch(webhookUrl, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    tipo: "diagnostico_descoberta",
                    ...values,
                    timestamp: new Date().toISOString(),
                }),
            })

            if (response.ok) {
                toast.success("Recebemos sua mensagem! Redirecionando para agendamento...")
                form.reset()
                // Redirect to calendar
                window.location.href = "https://calendar.app.google/HMcfcEcCeci7Zu4k6"
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
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                    control={form.control}
                    name="nome"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Nome Completo</FormLabel>
                            <FormControl>
                                <Input placeholder="Seu nome" {...field} className="bg-[#0F1F3D] border-[rgba(37,99,235,0.2)] text-white focus:border-[#F97316] focus:ring-[#F97316]" />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Email</FormLabel>
                                <FormControl>
                                    <Input placeholder="seu@email.com" {...field} className="bg-[#0F1F3D] border-[rgba(37,99,235,0.2)] text-white focus:border-[#F97316] focus:ring-[#F97316]" />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="whatsapp"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>WhatsApp</FormLabel>
                                <FormControl>
                                    <Input placeholder="(00) 00000-0000" type="tel" {...field} className="bg-[#0F1F3D] border-[rgba(37,99,235,0.2)] text-white focus:border-[#F97316] focus:ring-[#F97316]" />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                </div >
                <FormField
                    control={form.control}
                    name="empresa"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Empresa</FormLabel>
                            <FormControl>
                                <Input placeholder="Nome da sua empresa" {...field} className="bg-[#0F1F3D] border-[rgba(37,99,235,0.2)] text-white focus:border-[#F97316] focus:ring-[#F97316]" />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="mensagem"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel className="text-base text-white font-medium">
                                Qual tarefa você repete TODOS os dias que poderia ser automática?
                            </FormLabel>
                            <FormControl>
                                <Textarea
                                    rows={6}
                                    placeholder={`Ex: "Envio 30 propostas por email todo dia copiando dados de uma planilha"\n\nOu: "Recebo pedidos no WhatsApp e preciso cadastrar manualmente no sistema"\n\nOu: "Faço follow-up de clientes por email toda segunda-feira"\n\nOu: "Exporto relatórios do sistema e monto apresentações toda semana"`}
                                    className="min-h-[120px] bg-[#0F1F3D] border-[rgba(37,99,235,0.2)] text-white placeholder:text-[#9CA3AF] focus:border-[#F97316] focus:ring-[#F97316] leading-relaxed"
                                    {...field}
                                />
                            </FormControl>
                            <p className="text-sm text-[#9CA3AF]">
                                💡 Quanto mais específico, melhor o diagnóstico. Inclua: ferramenta que usa + tarefa + frequência.
                            </p>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <Button type="submit" className="w-full bg-gradient-to-br from-[#F97316] to-[#EA580C] text-white shadow-[0_4px_24px_rgba(249,115,22,0.6)] hover:shadow-[0_6px_32px_rgba(249,115,22,0.8)] transition-all" disabled={isLoading}>
                    {isLoading ? "Enviando..." : "Receber diagnóstico e agendar"}
                </Button>
            </form>
        </Form >
    )
}
