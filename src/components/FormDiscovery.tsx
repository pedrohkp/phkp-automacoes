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
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { formDiscoverySchema } from "@/lib/schemas"
import { toast } from "sonner"

const SYSTEM_OPTIONS = [
    "Gmail", "Slack", "Trello", "Google Calendar", "WhatsApp",
    "Telegram", "Excel/Sheets", "ERP", "CRM", "Outros"
]

export function FormDiscovery() {
    const form = useForm<z.infer<typeof formDiscoverySchema>>({
        resolver: zodResolver(formDiscoverySchema),
        defaultValues: {
            nome: "",
            email: "",
            whatsapp: "",
            empresa: "",
            dores_operacionais: "",
            tarefas_repetitivas: "",
            sistemas: [],
            // horas_semanais and tamanho_equipe are undefined initially for Select placeholder
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
                    tipo: "descoberta",
                    nome: values.nome,
                    email: values.email,
                    whatsapp: values.whatsapp,
                    empresa: values.empresa,
                    mensagem: `Dores: ${values.dores_operacionais} | Tarefas: ${values.tarefas_repetitivas}`,
                    dores_operacionais: values.dores_operacionais,
                    tarefas_repetitivas: values.tarefas_repetitivas,
                    horas_semanais: values.horas_semanais,
                    tamanho_equipe: values.tamanho_equipe,
                    sistemas: values.sistemas,
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
                    name="dores_operacionais"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Principais Dores Operacionais</FormLabel>
                            <FormControl>
                                <Textarea
                                    placeholder="O que mais atrapalha sua operação hoje?"
                                    className="min-h-[80px] bg-[#2d3139] border-[#4a4a50] text-[#e0e0e0] focus:border-[#0088cc] focus:ring-[#0088cc]"
                                    {...field}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="tarefas_repetitivas"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Tarefas Repetitivas</FormLabel>
                            <FormControl>
                                <Textarea
                                    placeholder="Ex: Atualizar planilhas, responder emails padrão..."
                                    className="min-h-[80px] bg-[#2d3139] border-[#4a4a50] text-[#e0e0e0] focus:border-[#0088cc] focus:ring-[#0088cc]"
                                    {...field}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <FormField
                        control={form.control}
                        name="horas_semanais"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Horas Gastas/Semana</FormLabel>
                                <Select onValueChange={field.onChange} defaultValue={field.value}>
                                    <FormControl>
                                        <SelectTrigger className="bg-[#2d3139] border-[#4a4a50] text-[#e0e0e0] focus:border-[#0088cc] focus:ring-[#0088cc]">
                                            <SelectValue placeholder="Selecione..." />
                                        </SelectTrigger>
                                    </FormControl>
                                    <SelectContent className="bg-[#2d3139] border-[#4a4a50] text-[#e0e0e0]">
                                        <SelectItem value="0-5h">0-5h</SelectItem>
                                        <SelectItem value="5-10h">5-10h</SelectItem>
                                        <SelectItem value="10-20h">10-20h</SelectItem>
                                        <SelectItem value="20+h">20+h</SelectItem>
                                    </SelectContent>
                                </Select>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="tamanho_equipe"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Tamanho da Equipe</FormLabel>
                                <Select onValueChange={field.onChange} defaultValue={field.value}>
                                    <FormControl>
                                        <SelectTrigger className="bg-[#2d3139] border-[#4a4a50] text-[#e0e0e0] focus:border-[#0088cc] focus:ring-[#0088cc]">
                                            <SelectValue placeholder="Selecione..." />
                                        </SelectTrigger>
                                    </FormControl>
                                    <SelectContent className="bg-[#2d3139] border-[#4a4a50] text-[#e0e0e0]">
                                        <SelectItem value="1-5">1-5</SelectItem>
                                        <SelectItem value="6-20">6-20</SelectItem>
                                        <SelectItem value="21-50">21-50</SelectItem>
                                        <SelectItem value="50+">50+</SelectItem>
                                    </SelectContent>
                                </Select>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                </div>

                <FormField
                    control={form.control}
                    name="sistemas"
                    render={() => (
                        <FormItem>
                            <div className="mb-4">
                                <FormLabel className="text-base">Sistemas Utilizados</FormLabel>
                            </div>
                            <div className="grid grid-cols-2 gap-2">
                                {SYSTEM_OPTIONS.map((item) => (
                                    <FormField
                                        key={item}
                                        control={form.control}
                                        name="sistemas"
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
                <Button type="submit" variant="secondary" className="w-full" disabled={isLoading}>
                    {isLoading ? "Enviando..." : "Enviar para Análise"}
                </Button>
            </form>
        </Form >
    )
}
