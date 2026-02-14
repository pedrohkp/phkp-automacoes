"use client"

import * as React from "react"
import { Calendar } from "@/components/ui/calendar" // Assuming correct path to shadcn calendar
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { toast } from "sonner"
import { useRouter } from "next/navigation"

export default function BookingPage() {
    const [date, setDate] = React.useState<Date | undefined>(new Date())
    const [slots, setSlots] = React.useState<string[]>([])
    const [selectedSlot, setSelectedSlot] = React.useState<string | null>(null)
    const [loading, setLoading] = React.useState(false)
    const router = useRouter()

    React.useEffect(() => {
        if (date) {
            setLoading(true)
            const dateStr = date.toISOString().split('T')[0]
            fetch(`/api/calendar/slots?date=${dateStr}`)
                .then(res => res.json())
                .then(data => {
                    setSlots(data.slots || [])
                    setLoading(false)
                })
                .catch(() => {
                    toast.error("Erro ao carregar horários")
                    setLoading(false)
                })
        }
    }, [date])

    const handleBooking = async () => {
        if (!date || !selectedSlot) return

        toast("Agendando...", { description: "Por favor aguarde." })

        try {
            const res = await fetch('/api/calendar/book', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    date: date.toISOString().split('T')[0],
                    time: selectedSlot,
                })
            })

            if (res.ok) {
                router.push('/confirmacao?type=agendamento')
            } else {
                toast.error("Erro ao agendar")
            }
        } catch (error) {
            toast.error("Erro na comunicação com servidor")
        }
    }

    return (
        <div className="container py-12 flex flex-col items-center gap-8">
            <div className="text-center max-w-2xl">
                <h1 className="text-3xl font-bold mb-2">Escolha Data e Horário</h1>
                <p className="text-muted-foreground">
                    Selecione um dia disponível no calendário para ver os horários.
                </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 w-full max-w-4xl">
                <Card className="flex items-center justify-center p-4">
                    <Calendar
                        mode="single"
                        selected={date}
                        onSelect={setDate}
                        className="rounded-md border"
                        disabled={(date) => date < new Date()}
                    />
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle>Horários Disponíveis</CardTitle>
                        <CardDescription>
                            {date ? date.toLocaleDateString('pt-BR') : "Selecione uma data"}
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        {loading ? (
                            <p className="text-sm text-muted-foreground">Carregando...</p>
                        ) : slots.length > 0 ? (
                            <div className="grid grid-cols-3 gap-2">
                                {slots.map(slot => (
                                    <Button
                                        key={slot}
                                        variant={selectedSlot === slot ? "default" : "outline"}
                                        onClick={() => setSelectedSlot(slot)}
                                        className="w-full"
                                    >
                                        {slot}
                                    </Button>
                                ))}
                            </div>
                        ) : (
                            <p className="text-sm text-muted-foreground">Nenhum horário disponível.</p>
                        )}

                        {selectedSlot && (
                            <div className="mt-6 pt-4 border-t">
                                <Button className="w-full" size="lg" onClick={handleBooking}>
                                    Confirmar Agendamento
                                </Button>
                            </div>
                        )}
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}
