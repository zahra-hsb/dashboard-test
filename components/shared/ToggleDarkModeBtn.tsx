"use client"
import { useTheme } from "next-themes";
import Image from "next/image";
import { useEffect } from "react";
import { BiMoon, BiSun } from "react-icons/bi";


const ToggleDarkModeBtn = () => {
    const { theme, setTheme } = useTheme()

    return (
        <button title={theme === "dark" ? "Light mode" : "Dark mode"} onClick={() =>
            theme == "dark" ? setTheme("light") : setTheme("dark")
        } className="bg-white p-2 rounded-full fixed bottom-10 group hover:bg-black border-2 left-[calc(20%-50px)]">
            {theme == "dark" ? <BiSun size={28} className="invert group-hover:invert-0" /> : <BiMoon size={28} className=" group-hover:invert" />}
        </button>
    )
}

export default ToggleDarkModeBtn;