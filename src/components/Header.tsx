"use client"

import * as React from "react"
import Link from "next/link"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
    Sheet,
    SheetContent,
    SheetTrigger,
} from "@/components/ui/sheet"
import { LanguageToggle } from "@/components/LanguageToggle"
import { useLanguage } from "@/components/language-provider"

export function Header() {
    const { t } = useLanguage()
    const [isScrolled, setIsScrolled] = React.useState(false)

    const navItems = [
        { name: t.nav.home, href: "#hero" },
        { name: t.nav.about, href: "#sobre" },
        { name: t.nav.roi, href: "#calculadora" },
        { name: t.nav.catalog, href: "#catalogo" },
        { name: t.nav.custom, href: "#personalizada" },
        { name: t.nav.faq, href: "#faq" },
    ]


    React.useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10)
        }
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        e.preventDefault()
        const element = document.querySelector(href)
        if (element) {
            const offset = 80 // height of header + padding
            const bodyRect = document.body.getBoundingClientRect().top
            const elementRect = element.getBoundingClientRect().top
            const elementPosition = elementRect - bodyRect
            const offsetPosition = elementPosition - offset

            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth"
            })
        }
    }

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-[999] transition-all duration-300 ${isScrolled
                ? "bg-[#0A1628]/95 backdrop-blur-md border-b border-[rgba(37,99,235,0.2)] shadow-[0_4px_30px_rgba(0,0,0,0.1)] h-[80px]"
                : "bg-transparent h-[90px]"
                } flex items-center`}
        >
            <div className="container flex items-center justify-between">
                <Link
                    href="#hero"
                    onClick={(e) => scrollToSection(e, "#hero")}
                    className="flex items-center space-x-2 font-bold text-2xl tracking-tight text-white transition-all hover:text-[#3B82F6]"
                    style={{ textShadow: "0 0 10px rgba(37, 99, 235, 0.5)" }}
                >
                    <span>PHKP Soluções</span>
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center gap-8">
                    {navItems.map((item) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            onClick={(e) => scrollToSection(e, item.href)}
                            className="text-sm font-medium text-[#E5E7EB] hover:text-[#3B82F6] transition-all duration-300 relative group"
                            style={{ textShadow: "0 0 10px rgba(0, 0, 0, 0)" }}
                        >
                            <span className="group-hover:drop-shadow-[0_0_8px_rgba(37,99,235,0.8)] transition-all">
                                {item.name}
                            </span>
                            <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[#3B82F6] transition-all duration-300 group-hover:w-full"></span>
                        </Link>
                    ))}
                    <Button
                        asChild
                        className="bg-gradient-to-r from-[#F97316] to-[#EA580C] hover:brightness-110 text-white font-bold shadow-[0_4px_24px_rgba(249,115,22,0.6)] border border-[rgba(249,115,22,0.4)] inset-ring inset-ring-white/15 transition-all duration-300 rounded-full px-6 hover:translate-y-[-2px]"
                    >
                        <Link href="#personalizada" onClick={(e) => scrollToSection(e, "#personalizada")}>
                            {t.nav.start}
                        </Link>
                    </Button>
                    <div className="flex items-center gap-2">
                        <LanguageToggle />
                    </div>
                </nav>

                {/* Mobile Navigation */}
                <div className="md:hidden flex items-center gap-4">
                    <LanguageToggle />
                    <Sheet>
                        <SheetTrigger asChild>
                            <Button variant="ghost" size="icon" className="text-[#E5E7EB] hover:text-[#3B82F6]">
                                <Menu className="h-6 w-6" />
                                <span className="sr-only">Menu</span>
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="right" className="bg-[#0A1628] border-l border-[rgba(37,99,235,0.2)] text-[#E5E7EB]">
                            <nav className="flex flex-col gap-6 mt-8">
                                {navItems.map((item) => (
                                    <Link
                                        key={item.name}
                                        href={item.href}
                                        onClick={(e) => scrollToSection(e, item.href)}
                                        className="text-lg font-medium hover:text-[#3B82F6] transition-colors"
                                    >
                                        {item.name}
                                    </Link>
                                ))}
                                <Button
                                    asChild
                                    className="bg-gradient-to-r from-[#F97316] to-[#EA580C] text-white w-full mt-4 font-bold shadow-[0_4px_20px_rgba(249,115,22,0.5)]"
                                >
                                    <Link href="#personalizada" onClick={(e) => scrollToSection(e, "#personalizada")}>
                                        {t.nav.start}
                                    </Link>
                                </Button>
                            </nav>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </header>
    )
}
