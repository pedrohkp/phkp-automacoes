"use client"

import Link from "next/link"
import { useLanguage } from "@/components/language-provider"

export function Footer() {
    const { t } = useLanguage()

    return (
        <footer className="border-t border-[rgba(37,99,235,0.15)] py-6 md:py-0 bg-[#0F1F3D]">
            <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
                {t.footer.rights}
                <div className="flex items-center gap-4 text-sm text-[#9CA3AF]">
                    <Link href="/termos" className="hover:text-[#F97316] transition-colors">{t.footer.terms}</Link>
                    <Link href="/privacidade" className="hover:text-[#F97316] transition-colors">{t.footer.privacy}</Link>
                </div>
            </div>
        </footer>
    )
}
