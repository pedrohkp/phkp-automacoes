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
import { Checkbox } from "@/components/ui/checkbox"
import { formDirectSchema } from "@/lib/schemas"
import { toast } from "sonner"
import { cn } from "@/lib/utils"

const INTEGRATION_OPTIONS = [
    "Gmail", "Slack", "Trello", "Google Calendar", "WhatsApp",
    "Telegram", "SAP", "Salesforce", "HubSpot", "Outros"
]

export function FormDirect() {
    const router = useRouter()
    const form = useForm<z.infer<typeof formDirectSchema>>({
        resolver: zodResolver(formDirectSchema),
        defaultValues: {
            nome: "",
            email: "",
            whatsapp: "",
            empresa: "",
            descricao_automacao: "",
            integracoes: [],
        },
    })

    const [isLoading, setIsLoading] = React.useState(false)

    async function onSubmit(values: z.infer<typeof formDirectSchema>) {
        setIsLoading(true)
        try {
            const webhookUrl = "https://formacao-n8n.euualf.easypanel.host/webhook/phkp-formulario"

            const response = await fetch(webhookUrl, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    tipo: "ja_sei_o_que_preciso",
                    nome: values.nome,
                    email: values.email,
                    empresa: values.empresa,
                    mensagem: values.descricao_automacao,
                    integracoes: values.integracoes,
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
                                <FormLabel>WhatsApp (para agilizar contato)</FormLabel>
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
                            <FormLabel>Empresa</FormLabel>
                            <FormControl>
                                <Input placeholder="Nome da sua empresa" {...field} className="bg-[#1A1A22] border-[rgba(139,92,246,0.15)] text-[#e0e0e0] focus:border-[#8B5CF6] focus:ring-[#8B5CF6]" />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="descricao_automacao"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Descrição da Automação</FormLabel>
                            <FormControl>
                                <Textarea
                                    placeholder="Ex: Preciso enviar emails automáticos quando um cliente faz pedido..."
                                    className="min-h-[100px] bg-[#1A1A22] border-[rgba(139,92,246,0.15)] text-[#e0e0e0] focus:border-[#8B5CF6] focus:ring-[#8B5CF6]"
                                    {...field}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="integracoes"
                    render={() => (
                        <FormItem>
                            <div className="mb-4">
                                <FormLabel className="text-base">Integrações Necessárias</FormLabel>
                            </div>
                            <div className="grid grid-cols-2 gap-2">
                                {INTEGRATION_OPTIONS.map((item) => (
                                    <FormField
                                        key={item}
                                        control={form.control}
                                        name="integracoes"
                                        render={({ field }) => {
                                            const isChecked = field.value?.includes(item);
                                            return (
                                                <FormItem
                                                    key={item}
                                                    className={cn(
                                                        "flex flex-row items-center space-x-3 space-y-0 rounded-lg p-3 sm:p-4 border transition-all cursor-pointer",
                                                        isChecked
                                                            ? "bg-[#13131A] border-[#8B5CF6]"
                                                            : "bg-[#1A1A22] border-[rgba(139,92,246,0.15)] hover:bg-[#13131A] hover:border-[#8B5CF6]"
                                                    )}
                                                >
                                                    <FormControl>
                                                        <Checkbox
                                                            className="data-[state=checked]:bg-[#8B5CF6] data-[state=checked]:border-[#8B5CF6] border-[#808080] bg-[#1A1A22]"
                                                            checked={isChecked}
                                                            onCheckedChange={(checked) => {
                                                                return checked
                                                                    ? field.onChange([...field.value, item])
                                                                    : field.onChange(
                                                                        field.value?.filter(
                                                                            (value) => value !== item
                                                                        )
                                                                    )
                                                            }}
                                                        />
                                                    </FormControl>
                                                    <FormLabel className="font-normal text-[#e0e0e0] cursor-pointer flex-1">
                                                        {item}
                                                    </FormLabel>
                                                </FormItem>
                                            )
                                        }}
                                    />
                                ))}
                            </div>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <Button type="submit" className="w-full bg-gradient-to-br from-[#8B5CF6] to-[#6D28D9] text-white shadow-[0_4px_24px_rgba(139,92,246,0.4)] hover:shadow-[0_0_30px_rgba(139,92,246,0.7)] transition-all" disabled={isLoading}>
                    {isLoading ? "Enviando..." : "Enviar e Agendar Reunião"}
                </Button>
            </form>
        </Form >
    )
}
