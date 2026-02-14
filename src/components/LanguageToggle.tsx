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
                <Button variant="outline" size="icon">
                    <Globe className="h-[1.2rem] w-[1.2rem]" />
                    <span className="sr-only">Toggle language</span>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={() => setLanguage("pt")} className={language === 'pt' ? "bg-accent" : ""}>
                    PT (Português)
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setLanguage("en")} className={language === 'en' ? "bg-accent" : ""}>
                    EN (English)
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}
