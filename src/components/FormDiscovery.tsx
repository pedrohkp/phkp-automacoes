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
                                <Input placeholder="Seu nome" {...field} className="bg-[#1A1A22] border-[rgba(139,92,246,0.15)] text-[#e0e0e0] focus:border-[#8B5CF6] focus:ring-[#8B5CF6]" />
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
                                    <Input placeholder="seu@email.com" {...field} className="bg-[#1A1A22] border-[rgba(139,92,246,0.15)] text-[#e0e0e0] focus:border-[#8B5CF6] focus:ring-[#8B5CF6]" />
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
                                    <Input placeholder="(00) 00000-0000" type="tel" {...field} className="bg-[#1A1A22] border-[rgba(139,92,246,0.15)] text-[#e0e0e0] focus:border-[#8B5CF6] focus:ring-[#8B5CF6]" />
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
                            <FormLabel>Empresa (Opcional)</FormLabel>
                            <FormControl>
                                <Input placeholder="Nome da sua empresa" {...field} className="bg-[#1A1A22] border-[rgba(139,92,246,0.15)] text-[#e0e0e0] focus:border-[#8B5CF6] focus:ring-[#8B5CF6]" />
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
                            <FormLabel>Mensagem</FormLabel>
                            <FormControl>
                                <Textarea
                                    placeholder="Descreva suas principais tarefas repetitivas ou dores do dia a dia..."
                                    className="min-h-[120px] bg-[#1A1A22] border-[rgba(139,92,246,0.15)] text-[#e0e0e0] focus:border-[#8B5CF6] focus:ring-[#8B5CF6]"
                                    {...field}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <Button type="submit" className="w-full bg-gradient-to-br from-[#8B5CF6] to-[#6D28D9] text-white shadow-[0_4px_24px_rgba(139,92,246,0.4)] hover:shadow-[0_0_30px_rgba(139,92,246,0.7)] transition-all" disabled={isLoading}>
                    {isLoading ? "Enviando..." : "Receber diagnóstico e agendar"}
                </Button>
            </form>
        </Form >
    )
}
