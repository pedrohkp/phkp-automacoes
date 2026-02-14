"use client"

import * as React from "react"
import { X, AlertOctagon } from "lucide-react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { toast } from "sonner"
import { exitIntentSchema } from "@/lib/schemas"
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form"

export function ExitIntentPopup() {
    const [isVisible, setIsVisible] = React.useState(false)
    const [hasShown, setHasShown] = React.useState(false)
    const [isSuccess, setIsSuccess] = React.useState(false)

    const form = useForm<z.infer<typeof exitIntentSchema>>({
        resolver: zodResolver(exitIntentSchema),
        defaultValues: {
            email: "",
        },
    })

    React.useEffect(() => {
        // Check if already shown in this session (or persistent storage if preferred, user said "session" but also localStorage key "exitIntentShown")
        // User spec: "Exibir apenas 1 vez por sessão do usuário", "Usar localStorage... 'exitIntentShown'"
        // localStorage persists across sessions. I will follow the localStorage instruction which implies "ever". Or "session" means "browser session"?
        // User said: "Usar localStorage para controlar exibição (chave: "exitIntentShown", valor: "true")"
        // This implies persistent dismissal.

        const alreadyShown = localStorage.getItem("exitIntentShown") === "true"
        if (alreadyShown) {
            setHasShown(true)
            return
        }

        const handleMouseLeave = (e: MouseEvent) => {
            // Desktop check: width > 768px
            if (window.innerWidth <= 768) return

            // Mouse Y < 10px (moving to top)
            if (e.clientY < 10) {
                // Check again inside event to be sure
                if (localStorage.getItem("exitIntentShown") !== "true") {
                    setIsVisible(true)
                }
            }
        }

        // Delay logic: "usuário precisa estar na página há pelo menos 10 segundos"
        const titleTimer = setTimeout(() => {
            document.addEventListener("mouseleave", handleMouseLeave)
        }, 10000)

        return () => {
            clearTimeout(titleTimer)
            document.removeEventListener("mouseleave", handleMouseLeave)
        }
    }, [])

    const handleClose = () => {
        setIsVisible(false)
        localStorage.setItem("exitIntentShown", "true")
        setHasShown(true)
    }

    const handleOverlayClick = (e: React.MouseEvent) => {
        if (e.target === e.currentTarget) {
            handleClose()
        }
    }

    async function onSubmit(values: z.infer<typeof exitIntentSchema>) {
        try {
            const webhookUrl = "https://formacao-n8n.euualf.easypanel.host/webhook/phkp-formulario"

            const response = await fetch(webhookUrl, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    tipo: "lead_frio_guia",
                    email: values.email,
                    origem: "exit_intent_popup",
                    timestamp: new Date().toISOString(),
                }),
            })

            if (response.ok) {
                setIsSuccess(true)
                localStorage.setItem("exitIntentShown", "true")
                setTimeout(() => {
                    setIsVisible(false)
                }, 2000)
            } else {
                throw new Error("Erro na requisição")
            }
        } catch (error) {
            toast.error("Erro ao enviar. Tente novamente.")
        }
    }

    if (!isVisible) return null

    return (
        <div
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-[rgba(3,7,18,0.85)] transition-opacity duration-300 animate-in fade-in"
            onClick={handleOverlayClick}
        >
            <div className="relative w-full max-w-[500px] scale-100 rounded-xl border border-[rgba(37,99,235,0.2)] bg-[#1A2B4F] p-10 shadow-[0_10px_40px_rgba(0,0,0,0.5)] transition-transform duration-300 animate-in zoom-in-95">
                <button
                    onClick={handleClose}
                    className="absolute right-4 top-4 p-2 text-white hover:text-[#F97316] transition-colors"
                >
                    <X size={32} />
                </button>

                <div className="flex flex-col items-center text-center">
                    <div className="mb-4 text-4xl">🛑</div>

                    <h2 className="mb-2 text-[28px] font-bold text-white drop-shadow-[0_0_10px_rgba(37,99,235,0.5)]">
                        Espera! Antes de sair...
                    </h2>

                    {isSuccess ? (
                        <div className="py-8 text-xl text-green-400 font-semibold animate-in fade-in slide-in-from-bottom-2">
                            ✅ Guia enviado! Verifique seu email
                        </div>
                    ) : (
                        <>
                            <p className="mb-2 text-lg text-[#9CA3AF]">
                                Receba gratuitamente nosso guia:
                            </p>

                            <h3 className="mb-6 text-xl font-semibold text-[#F97316] drop-shadow-[0_0_8px_rgba(249,115,22,0.4)]">
                                5 Processos que Toda Empresa Pode Automatizar Hoje
                            </h3>

                            <Form {...form}>
                                <form onSubmit={form.handleSubmit(onSubmit)} className="w-full space-y-4">
                                    <FormField
                                        control={form.control}
                                        name="email"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormControl>
                                                    <Input
                                                        placeholder="Seu melhor email"
                                                        {...field}
                                                        className="h-12 w-full rounded-md border border-[rgba(37,99,235,0.2)] bg-[#0F1F3D] px-4 text-white placeholder:text-gray-400 focus:border-[#F97316] focus:ring-[#F97316]"
                                                    />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                    <Button
                                        type="submit"
                                        className="h-[50px] w-full rounded-md bg-gradient-to-r from-[#F97316] to-[#EA580C] text-lg font-semibold text-white hover:brightness-110 shadow-[0_4px_24px_rgba(249,115,22,0.6)] hover:shadow-[0_6px_32px_rgba(249,115,22,0.8)] transition-all"
                                    >
                                        Enviar guia
                                    </Button>
                                </form>
                            </Form>
                        </>
                    )}
                </div>
            </div>
        </div>
    )
}
