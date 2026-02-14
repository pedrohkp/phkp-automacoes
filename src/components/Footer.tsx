export function Footer() {
    return (
        <footer className="border-t border-[rgba(139,92,246,0.1)] py-6 md:py-0 bg-[#0A0A0D]">
            <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
                <p className="text-center text-sm leading-loose text-[#808080] md:text-left">
                    © 2024 PHKP Soluções. Todos os direitos reservados.
                </p>
                <div className="flex items-center gap-4 text-sm text-[#808080]">
                    <a href="#" className="hover:text-[#8B5CF6] transition-colors">Termos</a>
                    <a href="#" className="hover:text-[#8B5CF6] transition-colors">Privacidade</a>
                </div>
            </div>
        </footer>
    )
}
