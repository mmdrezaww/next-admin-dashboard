"use client";

import Link from "next/link";
import {usePathname} from "next/navigation";
import {
    LayoutDashboard,
    ShoppingCart,
    Package,
    Users,
    BarChart3,
    Settings,
    Menu,
    X,
} from "lucide-react";
import {useState} from "react";
import {cn} from "@/lib/utils";

const navItems = [
    {label: "Overview", href: "/", icon: LayoutDashboard},
    {label: "Orders", href: "/orders", icon: ShoppingCart},
    {label: "Products", href: "/products", icon: Package},
    {label: "Customers", href: "/customers", icon: Users},
    {label: "Analytics", href: "/analytics", icon: BarChart3},
    {label: "Settings", href: "/settings", icon: Settings},
];

export default function Sidebar() {
    const pathname = usePathname();
    const [collapsed, setCollapsed] = useState(false);

    return (
        <aside
            className={cn(
                "h-screen sticky top-0 flex flex-col border-r transition-all duration-300 bg-white dark:bg-[#1e293b] border-[var(--border)]",
                collapsed ? "w-16" : "w-60"
            )}
        >
            {/* Logo */}
            <div className="flex items-center justify-between px-4 py-5 border-b border-[var(--border)]">
                {!collapsed && (
                    <span className="font-bold text-sm text-[var(--primary)] tracking-tight">
            next-admin-dashboard
          </span>
                )}
                <button
                    onClick={() => setCollapsed(!collapsed)}
                    className="p-1.5 rounded-md hover:bg-[var(--muted)] transition-colors ml-auto"
                >
                    {collapsed ? <Menu size={18}/> : <X size={18}/>}
                </button>
            </div>

            {/* Nav */}
            <nav className="flex-1 px-2 py-4 space-y-1">
                {navItems.map(({label, href, icon: Icon}) => {
                    const active = pathname === href;
                    return (
                        <Link
                            key={href}
                            href={href}
                            className={cn(
                                "flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all",
                                active
                                    ? "bg-[var(--primary)] text-white"
                                    : "text-[var(--muted-foreground)] hover:bg-[var(--muted)] hover:text-[var(--foreground)]"
                            )}
                        >
                            <Icon size={18} className="shrink-0"/>
                            {!collapsed && <span>{label}</span>}
                        </Link>
                    );
                })}
            </nav>

            {/* Footer */}
            {!collapsed && (
                <div className="px-4 py-4 border-t border-[var(--border)]">
                    <p className="text-xs text-[var(--muted-foreground)]">v1.0.0</p>
                </div>
            )}
        </aside>
    );
}