"use client"

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { PlayCircle, Clock } from "lucide-react"
import { useLanguage } from "@/components/language-provider"

export function SectionAutomation() {
    const { t } = useLanguage()

    return (
        <section id="catalogo" className="w-full bg-[#242730] py-20 md:py-20 scroll-mt-20 border-t-[3px] border-[#4a90e2]">
            <div className="container">
                <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center mb-16">
                    <h2 className="font-bold text-3xl leading-[1.1] sm:text-3xl md:text-5xl text-white drop-shadow-[0_0_20px_rgba(0,136,204,0.3)]">
                        {t.catalog.title}
                    </h2>
                    <p className="max-w-[85%] leading-normal text-[#c0c0c0] sm:text-lg sm:leading-7">
                        {t.catalog.subtitle}
                    </p>
                </div>
                <div className="mx-auto grid justify-center gap-8 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-2">
                    {t.catalog.items.map((item, index) => (
                        <Card key={index} className="flex flex-col justify-between transition-all duration-300 border-[#3a3f4b] bg-[#343945] shadow-[0_8px_32px_rgba(0,0,0,0.5)] hover:shadow-[0_12px_48px_rgba(0,136,204,0.3)] hover:-translate-y-1">
                            <CardHeader>
                                <div className="bg-[#1a1a1c] aspect-video rounded-md mb-4 flex items-center justify-center text-[#808080] group relative overflow-hidden border border-[rgba(0,136,204,0.1)]">
                                    <PlayCircle className="w-16 h-16 opacity-50 group-hover:opacity-80 transition-opacity text-[#0088cc] relative z-10 drop-shadow-[0_0_8px_rgba(0,136,204,0.6)]" />
                                    <span className="sr-only">Vídeo demonstrativo de {item.title}</span>
                                </div>
                                <div className="flex justify-between items-start gap-4">
                                    <CardTitle className="leading-tight text-white">{item.title}</CardTitle>
                                </div>
                                <CardDescription className="mt-2 text-[#c0c0c0]">{item.description}</CardDescription>

                                {/* Savings Badge */}
                                <div className="flex items-center gap-2 mt-3 text-sm font-medium text-[#0088cc] bg-[rgba(0,136,204,0.1)] px-3 py-1.5 rounded-md w-fit border border-[rgba(0,136,204,0.3)]">
                                    <Clock className="w-4 h-4" />
                                    <span>{t.catalog.badge_prefix} {item.savings}</span>
                                </div>
                            </CardHeader>
                            <CardContent>
                                <div className="flex flex-wrap gap-2">
                                    {item.tech.map((tech) => (
                                        <Badge key={tech} variant="secondary" className="font-normal bg-[#1a1a1c] text-[#e0e0e0] border border-[rgba(255,255,255,0.1)]">
                                            {tech}
                                        </Badge>
                                    ))}
                                </div>
                            </CardContent>
                            <CardFooter>
                                <Button className="w-full bg-[#0088cc] hover:bg-[#006699] text-white font-bold shadow-[0_0_15px_rgba(0,136,204,0.4)]" asChild>
                                    <a
                                        href={`https://calendar.app.google/HMcfcEcCeci7Zu4k6?automacao=${item.title.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]/g, '')}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        {t.catalog.cta}
                                    </a>
                                </Button>
                            </CardFooter>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    )
}
