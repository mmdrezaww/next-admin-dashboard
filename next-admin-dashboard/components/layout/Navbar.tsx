"use client";

import {Bell, Search, Moon, Sun} from "lucide-react";
import {useState} from "react";

export default function Navbar() {
    const [dark, setDark] = useState(false);

    const toggleDark = () => {
        setDark(!dark);
        document.documentElement.classList.toggle("dark");
    };

    return (
        <header
            className="h-16 border-b border-(--border) bg-white dark:bg-[#1e293b] flex items-center justify-between px-6 sticky top-0 z-10">

            {/* Search */}
            <div className="flex items-center gap-2 bg-[var(--muted)] rounded-lg px-3 py-2 w-64">
                <Search size={16} className="text-[var(--muted-foreground)]"/>
                <input
                    type="text"
                    placeholder="Search..."
                    className="bg-transparent text-sm outline-none w-full text-[var(--foreground)] placeholder:text-[var(--muted-foreground)]"
                />
            </div>

            {/* Right side */}
            <div className="flex items-center gap-3">

                {/* Dark mode toggle */}
                <button
                    onClick={toggleDark}
                    className="p-2 rounded-lg hover:bg-[var(--muted)] transition-colors"
                >
                    {dark ? <Sun size={18}/> : <Moon size={18}/>}
                </button>

                {/* Notifications */}
                <button className="p-2 rounded-lg hover:bg-[var(--muted)] transition-colors relative">
                    <Bell size={18}/>
                    <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-[var(--primary)] rounded-full"/>
                </button>

                {/* Avatar */}
                <div
                    className="w-8 h-8 rounded-full bg-[var(--primary)] flex items-center justify-center text-white text-xs font-bold">
                    AD
                </div>
            </div>
        </header>
    );
}