"use client"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { FormDirect } from "./FormDirect"
import { FormDiscovery } from "./FormDiscovery"
import { useLanguage } from "@/components/language-provider"

export function SectionForms() {
    const { t } = useLanguage()

    return (
        <section id="personalizada" className="w-full bg-[#13131A] border-t border-[rgba(139,92,246,0.15)] py-14 md:py-20 lg:py-28 scroll-mt-20">
            <div className="container">
                <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center mb-16">
                    <h2 className="font-bold text-3xl leading-[1.1] sm:text-3xl md:text-5xl text-white">
                        {t.forms.title}
                    </h2>
                    <p className="max-w-[85%] leading-normal text-[#c0c0c0] sm:text-lg sm:leading-7">
                        {t.forms.subtitle}
                    </p>
                </div>

                <div className="max-w-4xl mx-auto">
                    <Tabs defaultValue="direct" className="w-full">
                        <TabsList className="grid w-full grid-cols-2 mb-8 p-1 h-auto bg-[#1A1A22] rounded-2xl border border-[rgba(139,92,246,0.15)]">
                            <TabsTrigger
                                value="direct"
                                className="py-3 sm:py-4 rounded-xl text-sm sm:text-base font-medium data-[state=active]:bg-gradient-to-br data-[state=active]:from-[#8B5CF6] data-[state=active]:to-[#6D28D9] data-[state=active]:text-white data-[state=active]:shadow-[0_4px_24px_rgba(139,92,246,0.4)] data-[state=active]:hover:shadow-[0_0_30px_rgba(139,92,246,0.7)] transition-all text-[#e0e0e0]"
                            >
                                {t.forms.direct.title}
                            </TabsTrigger>
                            <TabsTrigger
                                value="discovery"
                                className="py-3 sm:py-4 rounded-xl text-sm sm:text-base font-medium data-[state=active]:bg-gradient-to-br data-[state=active]:from-[#8B5CF6] data-[state=active]:to-[#6D28D9] data-[state=active]:text-white data-[state=active]:shadow-[0_4px_24px_rgba(139,92,246,0.4)] data-[state=active]:hover:shadow-[0_0_30px_rgba(139,92,246,0.7)] transition-all text-[#e0e0e0]"
                            >
                                {t.forms.discovery.title}
                            </TabsTrigger>
                        </TabsList>

                        <TabsContent value="direct" className="mt-0">
                            {/* Note: Internal form labels could be translated too, but for now we focus on the section structure */}
                            <div className="text-center mb-8">
                                <h3 className="font-semibold text-2xl text-white">{t.forms.direct.title}</h3>
                                <p className="text-[#c0c0c0] mt-2">{t.forms.direct.subtitle}</p>
                            </div>
                            <div className="bg-[#1A1A22] border border-[rgba(139,92,246,0.15)] rounded-2xl p-6 md:p-8 shadow-[0_8px_32px_rgba(0,0,0,0.3)]">
                                <FormDirect />
                            </div>
                        </TabsContent>

                        <TabsContent value="discovery" className="mt-0">
                            <div className="text-center mb-8">
                                <h3 className="font-semibold text-2xl text-white">{t.forms.discovery.title}</h3>
                                <p className="text-[#c0c0c0] mt-2">{t.forms.discovery.subtitle}</p>
                            </div>
                            <div className="bg-[#1A1A22] border border-[rgba(139,92,246,0.15)] rounded-2xl p-6 md:p-8 shadow-[0_8px_32px_rgba(0,0,0,0.3)]">
                                <FormDiscovery />
                            </div>
                        </TabsContent>
                    </Tabs>
                </div>
            </div>
        </section>
    )
}
