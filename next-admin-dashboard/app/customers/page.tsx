"use client";

import {useState} from "react";
import {Search} from "lucide-react";

const customers = [
    {
        id: 1,
        name: "Alice Johnson",
        email: "alice@email.com",
        location: "New York, US",
        orders: 12,
        spent: "$1,240.00",
        status: "Active"
    },
    {
        id: 2,
        name: "Bob Smith",
        email: "bob@email.com",
        location: "London, UK",
        orders: 5,
        spent: "$430.50",
        status: "Active"
    },
    {
        id: 3,
        name: "Carol White",
        email: "carol@email.com",
        location: "Toronto, CA",
        orders: 8,
        spent: "$890.00",
        status: "Inactive"
    },
    {
        id: 4,
        name: "David Lee",
        email: "david@email.com",
        location: "Sydney, AU",
        orders: 3,
        spent: "$215.20",
        status: "Active"
    },
    {
        id: 5,
        name: "Eva Martinez",
        email: "eva@email.com",
        location: "Madrid, ES",
        orders: 15,
        spent: "$2,100.00",
        status: "Active"
    },
    {
        id: 6,
        name: "Frank Wilson",
        email: "frank@email.com",
        location: "Berlin, DE",
        orders: 2,
        spent: "$158.00",
        status: "Inactive"
    },
    {
        id: 7,
        name: "Grace Kim",
        email: "grace@email.com",
        location: "Seoul, KR",
        orders: 9,
        spent: "$760.75",
        status: "Active"
    },
    {
        id: 8,
        name: "Henry Brown",
        email: "henry@email.com",
        location: "Paris, FR",
        orders: 21,
        spent: "$3,430.00",
        status: "Active"
    },
];

const statusColor: Record<string, string> = {
    Active: "bg-emerald-100 text-emerald-700 dark:bg-emerald-900 dark:text-emerald-300",
    Inactive: "bg-[var(--muted)] text-[var(--muted-foreground)]",
};

function Avatar({name}: { name: string }) {
    const initials = name.split(" ").map((n) => n[0]).join("");
    const colors = ["bg-indigo-500", "bg-violet-500", "bg-emerald-500", "bg-rose-500", "bg-amber-500", "bg-blue-500"];
    const color = colors[name.length % colors.length];
    return (
        <div
            className={`w-8 h-8 rounded-full ${color} flex items-center justify-center text-white text-xs font-bold shrink-0`}>
            {initials}
        </div>
    );
}

export default function CustomersPage() {
    const [search, setSearch] = useState("");

    const filtered = customers.filter((c) =>
        c.name.toLowerCase().includes(search.toLowerCase()) ||
        c.email.toLowerCase().includes(search.toLowerCase()) ||
        c.location.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div className="space-y-6">
            {/* Header */}
            <div>
                <h1 className="text-2xl font-bold text-[var(--foreground)]">Customers</h1>
                <p className="text-sm text-[var(--muted-foreground)] mt-1">View and manage your customer base</p>
            </div>

            {/* Stats row */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {[
                    {label: "Total Customers", value: "3,921"},
                    {label: "Active Customers", value: "3,102"},
                    {label: "Avg. Order Value", value: "$124.50"},
                ].map(({label, value}) => (
                    <div key={label}
                         className="bg-white dark:bg-[#1e293b] rounded-xl border border-[var(--border)] p-4">
                        <p className="text-xs text-[var(--muted-foreground)] font-medium">{label}</p>
                        <p className="text-2xl font-bold text-[var(--foreground)] mt-1">{value}</p>
                    </div>
                ))}
            </div>

            {/* Table Card */}
            <div className="bg-white dark:bg-[#1e293b] rounded-xl border border-[var(--border)]">
                {/* Search */}
                <div className="p-4 border-b border-[var(--border)]">
                    <div className="flex items-center gap-2 bg-[var(--muted)] rounded-lg px-3 py-2 w-72">
                        <Search size={15} className="text-[var(--muted-foreground)]"/>
                        <input
                            type="text"
                            placeholder="Search customers..."
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            className="bg-transparent text-sm outline-none w-full placeholder:text-[var(--muted-foreground)]"
                        />
                    </div>
                </div>

                {/* Table */}
                <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                        <thead>
                        <tr className="border-b border-[var(--border)]">
                            {["Customer", "Location", "Orders", "Total Spent", "Status"].map((h) => (
                                <th key={h}
                                    className="text-left px-5 py-3 text-xs font-semibold text-[var(--muted-foreground)] uppercase tracking-wider">
                                    {h}
                                </th>
                            ))}
                        </tr>
                        </thead>
                        <tbody>
                        {filtered.map((c) => (
                            <tr key={c.id}
                                className="border-b border-[var(--border)] last:border-0 hover:bg-[var(--muted)] transition-colors">
                                <td className="px-5 py-4">
                                    <div className="flex items-center gap-3">
                                        <Avatar name={c.name}/>
                                        <div>
                                            <p className="font-medium text-[var(--foreground)]">{c.name}</p>
                                            <p className="text-xs text-[var(--muted-foreground)]">{c.email}</p>
                                        </div>
                                    </div>
                                </td>
                                <td className="px-5 py-4 text-[var(--muted-foreground)]">{c.location}</td>
                                <td className="px-5 py-4 text-[var(--muted-foreground)]">{c.orders}</td>
                                <td className="px-5 py-4 font-semibold text-[var(--foreground)]">{c.spent}</td>
                                <td className="px-5 py-4">
                    <span className={`text-xs px-2.5 py-1 rounded-full font-medium ${statusColor[c.status]}`}>
                      {c.status}
                    </span>
                                </td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>

                {/* Footer */}
                <div className="px-5 py-3 border-t border-[var(--border)]">
                    <p className="text-xs text-[var(--muted-foreground)]">Showing {filtered.length} of {customers.length} customers</p>
                </div>
            </div>
        </div>
    );
}