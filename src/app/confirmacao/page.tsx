"use client"

import { useSearchParams } from "next/navigation"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { CheckCircle2, ArrowLeft, CalendarCheck } from "lucide-react"
import { Suspense } from "react"

function ConfirmationContent() {
    const searchParams = useSearchParams()
    const type = searchParams.get("type") // 'agendamento' | 'discovery' | 'direct'

    return (
        <>
            <div className="rounded-full bg-green-100 p-6 dark:bg-green-900/20">
                <CheckCircle2 className="h-12 w-12 text-green-600 dark:text-green-500" />
            </div>

            <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl text-white">
                    {type === "agendamento"
                        ? "Reunião Agendada com Sucesso!"
                        : "Informações Recebidas!"}
                </h1>
                <p className="max-w-[600px] text-[#c0c0c0] md:text-xl/relaxed">
                    {type === "agendamento"
                        ? "Você receberá um email de confirmação em breve com o link da reunião."
                        : "Analisaremos suas necessidades e entraremos em contato em até 24h para agendar uma consultoria."}
                </p>
            </div>

            {type === "agendamento" && (
                <div className="flex flex-col gap-2 min-w-[300px] p-4 border rounded-lg bg-[#2a2a2e] border-[rgba(0,136,204,0.3)]">
                    <div className="flex items-center gap-2 text-sm text-[#e0e0e0] justify-center">
                        <CalendarCheck className="w-4 h-4 text-[#0088cc]" />
                        <span>Verifique seu email para mais detalhes</span>
                    </div>
                    <Button variant="outline" className="w-full mt-2 border-[#0088cc] text-[#0088cc] hover:bg-[#0088cc]/10">
                        Adicionar ao Meu Calendário (.ics)
                    </Button>
                </div>
            )}

            <div className="flex gap-4">
                <Button asChild variant="ghost" className="text-[#e0e0e0] hover:text-[#0088cc]">
                    <Link href="/">
                        <ArrowLeft className="mr-2 h-4 w-4" />
                        Voltar ao Site
                    </Link>
                </Button>
            </div>
        </>
    )
}

export default function ConfirmationPage() {
    return (
        <div className="container flex flex-col items-center justify-center min-h-[60vh] text-center gap-6 py-20">
            <Suspense fallback={<div className="text-white">Carregando...</div>}>
                <ConfirmationContent />
            </Suspense>
        </div>
    )
}
