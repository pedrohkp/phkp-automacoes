"use client"

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { useLanguage } from "@/components/language-provider"

export function SectionFAQ() {
    const { t } = useLanguage()

    return (
        <section id="faq" className="w-full bg-[#0A1628] border-t border-[rgba(37,99,235,0.15)] py-14 md:py-20 lg:py-28 scroll-mt-20">
            <div className="container max-w-3xl">
                <div className="flex flex-col items-center justify-center gap-4 text-center mb-12">
                    <h2 className="font-bold text-3xl leading-[1.1] sm:text-3xl md:text-6xl text-white">
                        {t.faq.title}
                    </h2>
                    <p className="max-w-[85%] leading-normal text-[#9CA3AF] sm:text-lg sm:leading-7">
                        {t.faq.subtitle}
                    </p>
                </div>

                <Accordion type="single" collapsible className="w-full space-y-4">
                    {t.faq.items.map((item, index) => (
                        <AccordionItem key={index} value={`item-${index}`} className="border-[rgba(37,99,235,0.15)] bg-[#1A2B4F] px-6 rounded-xl border">
                            <AccordionTrigger className="text-left text-white hover:text-[#F97316] hover:no-underline font-medium text-lg py-4">{item.q}</AccordionTrigger>
                            <AccordionContent className="text-[#E5E7EB] text-base pb-4">
                                {item.a ? (
                                    item.a
                                ) : (
                                    <div className="space-y-2">
                                        <p>{t.faq.items[3].a_note}</p>
                                        <ul className="list-disc pl-4 space-y-1">
                                            <li><strong>{t.faq.items[3].a_simple && t.faq.items[3].a_simple.split(':')[0]}:</strong> {t.faq.items[3].a_simple && t.faq.items[3].a_simple.split(':')[1]}</li>
                                            <li><strong>{t.faq.items[3].a_medium && t.faq.items[3].a_medium.split(':')[0]}:</strong> {t.faq.items[3].a_medium && t.faq.items[3].a_medium.split(':')[1]}</li>
                                            <li><strong>{t.faq.items[3].a_advanced && t.faq.items[3].a_advanced.split(':')[0]}:</strong> {t.faq.items[3].a_advanced && t.faq.items[3].a_advanced.split(':')[1]}</li>
                                        </ul>
                                    </div>
                                )}
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            </div>
        </section>
    )
}
