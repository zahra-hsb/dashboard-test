"use client"
import { useTheme } from "next-themes";
import Image from "next/image";
import { useEffect, useState } from "react";
import { BiMoon, BiSun } from "react-icons/bi";


const ToggleDarkModeBtn = ({ className }: {
    className?: string;
}) => {
    const [mounted, setMounted] = useState(false)
    const { setTheme, resolvedTheme } = useTheme()
    useEffect(() => setMounted(true), [])

    if (!mounted) return (
        <button title={resolvedTheme === "dark" ? "Light mode" : "Dark mode"} onClick={() =>
            resolvedTheme === "dark" ? setTheme("light") : setTheme("dark")
        } className={`bg-white p-2 rounded-full fixed bottom-10 group hover:bg-black border-2 left-[calc(20%-50px)] ${className}`}>
            <Image
                src="data:image/svg+xml;base64,PHN2ZyBzdHJva2U9IiNGRkZGRkYiIGZpbGw9IiNGRkZGRkYiIHN0cm9rZS13aWR0aD0iMCIgdmlld0JveD0iMCAwIDI0IDI0IiBoZWlnaHQ9IjIwMHB4IiB3aWR0aD0iMjAwcHgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjIwIiBoZWlnaHQ9IjIwIiB4PSIyIiB5PSIyIiBmaWxsPSJub25lIiBzdHJva2Utd2lkdGg9IjIiIHJ4PSIyIj48L3JlY3Q+PC9zdmc+Cg=="
                width={36}
                height={36}
                sizes="36x36"
                alt="Loading Light/Dark Toggle"
                priority={false}
                title="Loading Light/Dark Toggle"
            />
        </button>
    )

    return (
        <button title={resolvedTheme === "dark" ? "Light mode" : "Dark mode"} onClick={() =>
            resolvedTheme === "dark" ? setTheme("light") : setTheme("dark")
        } className={`bg-white p-2 rounded-full fixed bottom-10 group hover:bg-black border-2 left-[calc(20%-50px)] ${className}`}>
            {resolvedTheme === "dark" ? <BiSun size={28} className="invert group-hover:invert-0" /> : <BiMoon size={28} className="group-hover:invert" />}
        </button>
    )
}





export default ToggleDarkModeBtn;