"use client"
import { ReactNode } from "react"
import { ThemeProvider } from "next-themes"
import ToggleDarkModeBtn from "@/components/shared/ToggleDarkModeBtn"



const Providers = ({ children }: {
    children: ReactNode
}) => {
    return (
        <ThemeProvider attribute={'class'} defaultTheme="system">
            {children}
            <ToggleDarkModeBtn />
        </ThemeProvider>
    )
}

export default Providers;