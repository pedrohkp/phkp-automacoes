"use client"

import * as React from "react"
import { Globe } from "lucide-react"
import { useLanguage } from "@/components/language-provider"

import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function LanguageToggle() {
    const { setLanguage, language } = useLanguage()

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="outline" size="icon" className="bg-transparent border-[rgba(37,99,235,0.2)] text-[#E5E7EB] hover:text-[#3B82F6] hover:bg-[rgba(37,99,235,0.1)] hover:border-[#3B82F6]">
                    <Globe className="h-[1.2rem] w-[1.2rem]" />
                    <span className="sr-only">Toggle language</span>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="bg-[#0A1628] border-[rgba(37,99,235,0.2)] text-[#E5E7EB]">
                <DropdownMenuItem onClick={() => setLanguage("pt")} className={`focus:bg-[rgba(37,99,235,0.2)] focus:text-[#3B82F6] ${language === 'pt' ? "bg-[rgba(37,99,235,0.15)] text-[#3B82F6]" : ""}`}>
                    PT (Português)
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setLanguage("en")} className={`focus:bg-[rgba(37,99,235,0.2)] focus:text-[#3B82F6] ${language === 'en' ? "bg-[rgba(37,99,235,0.15)] text-[#3B82F6]" : ""}`}>
                    EN (English)
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}
