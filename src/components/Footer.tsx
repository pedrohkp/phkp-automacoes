import Link from "next/link"

export function Footer() {
    return (
        <footer className="border-t border-[rgba(37,99,235,0.15)] py-6 md:py-0 bg-[#0F1F3D]">
            <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
                <p className="text-center text-sm leading-loose text-[#9CA3AF] md:text-left">
                    © 2024 PHKP Automações. Todos os direitos reservados.
                </p>
                <div className="flex items-center gap-4 text-sm text-[#9CA3AF]">
                    <Link href="/termos" className="hover:text-[#F97316] transition-colors">Termos</Link>
                    <Link href="/privacidade" className="hover:text-[#F97316] transition-colors">Privacidade</Link>
                </div>
            </div>
        </footer>
    )
}
