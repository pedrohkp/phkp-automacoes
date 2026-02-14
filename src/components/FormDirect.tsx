"use client"

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

const INTEGRATION_OPTIONS = [
    "Gmail", "Slack", "Trello", "Google Calendar", "WhatsApp",
    "Telegram", "SAP", "Salesforce", "HubSpot", "Outros"
]

export function FormDirect() {
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
                    tipo: "contratacao",
                    nome: values.nome,
                    email: values.email,
                    empresa: values.empresa,
                    mensagem: values.descricao_automacao,
                    integracoes: values.integracoes,
                    timestamp: new Date().toISOString(),
                }),
            })

            if (response.ok) {
                toast.success("Recebemos sua mensagem! Retornaremos em breve.")
                form.reset()
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
                                <Input placeholder="Seu nome" {...field} className="bg-[#2d3139] border-[#4a4a50] text-[#e0e0e0] focus:border-[#0088cc] focus:ring-[#0088cc]" />
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
                                    <Input placeholder="seu@email.com" {...field} className="bg-[#2d3139] border-[#4a4a50] text-[#e0e0e0] focus:border-[#0088cc] focus:ring-[#0088cc]" />
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
                                    <Input placeholder="(00) 00000-0000" type="tel" {...field} className="bg-[#2d3139] border-[#4a4a50] text-[#e0e0e0] focus:border-[#0088cc] focus:ring-[#0088cc]" />
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
                                <Input placeholder="Nome da sua empresa" {...field} className="bg-[#2d3139] border-[#4a4a50] text-[#e0e0e0] focus:border-[#0088cc] focus:ring-[#0088cc]" />
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
                                    className="min-h-[100px] bg-[#2d3139] border-[#4a4a50] text-[#e0e0e0] focus:border-[#0088cc] focus:ring-[#0088cc]"
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
                                            return (
                                                <FormItem
                                                    key={item}
                                                    className="flex flex-row items-start space-x-3 space-y-0"
                                                >
                                                    <FormControl>
                                                        <Checkbox
                                                            checked={field.value?.includes(item)}
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
                                                    <FormLabel className="font-normal">
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
                <Button type="submit" className="w-full" disabled={isLoading}>
                    {isLoading ? "Enviando..." : "Enviar e Agendar Reunião"}
                </Button>
            </form>
        </Form >
    )
}
