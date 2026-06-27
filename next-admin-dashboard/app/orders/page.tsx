"use client";

import {useState} from "react";
import {Search} from "lucide-react";

const orders = [
    {id: "#3210", customer: "Alice Johnson", date: "Jun 24, 2024", total: "$120.00", items: 3, status: "Delivered"},
    {id: "#3209", customer: "Bob Smith", date: "Jun 23, 2024", total: "$89.50", items: 1, status: "Pending"},
    {id: "#3208", customer: "Carol White", date: "Jun 22, 2024", total: "$245.00", items: 5, status: "Processing"},
    {id: "#3207", customer: "David Lee", date: "Jun 21, 2024", total: "$67.20", items: 2, status: "Delivered"},
    {id: "#3206", customer: "Eva Martinez", date: "Jun 20, 2024", total: "$310.00", items: 4, status: "Cancelled"},
    {id: "#3205", customer: "Frank Wilson", date: "Jun 19, 2024", total: "$158.00", items: 2, status: "Delivered"},
    {id: "#3204", customer: "Grace Kim", date: "Jun 18, 2024", total: "$92.75", items: 3, status: "Processing"},
    {id: "#3203", customer: "Henry Brown", date: "Jun 17, 2024", total: "$430.00", items: 6, status: "Delivered"},
];

const statusColor: Record<string, string> = {
    Delivered: "bg-emerald-100 text-emerald-700 dark:bg-emerald-900 dark:text-emerald-300",
    Pending: "bg-amber-100 text-amber-700 dark:bg-amber-900 dark:text-amber-300",
    Processing: "bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300",
    Cancelled: "bg-rose-100 text-rose-700 dark:bg-rose-900 dark:text-rose-300",
};

const filters = ["All", "Delivered", "Pending", "Processing", "Cancelled"];

export default function OrdersPage() {
    const [search, setSearch] = useState("");
    const [activeFilter, setActiveFilter] = useState("All");

    const filtered = orders.filter((o) => {
        const matchSearch =
            o.customer.toLowerCase().includes(search.toLowerCase()) ||
            o.id.toLowerCase().includes(search.toLowerCase());
        const matchFilter = activeFilter === "All" || o.status === activeFilter;
        return matchSearch && matchFilter;
    });

    return (
        <div className="space-y-6">
            {/* Header */}
            <div>
                <h1 className="text-2xl font-bold text-[var(--foreground)]">Orders</h1>
                <p className="text-sm text-[var(--muted-foreground)] mt-1">Track and manage customer orders</p>
            </div>

            {/* Table Card */}
            <div className="bg-white dark:bg-[#1e293b] rounded-xl border border-[var(--border)]">

                {/* Filters + Search */}
                <div
                    className="p-4 border-b border-[var(--border)] flex flex-col sm:flex-row gap-3 items-start sm:items-center justify-between">
                    <div className="flex gap-2 flex-wrap">
                        {filters.map((f) => (
                            <button
                                key={f}
                                onClick={() => setActiveFilter(f)}
                                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                                    activeFilter === f
                                        ? "bg-[var(--primary)] text-white"
                                        : "bg-[var(--muted)] text-[var(--muted-foreground)] hover:text-[var(--foreground)]"
                                }`}
                            >
                                {f}
                            </button>
                        ))}
                    </div>
                    <div className="flex items-center gap-2 bg-[var(--muted)] rounded-lg px-3 py-2 w-64">
                        <Search size={15} className="text-[var(--muted-foreground)]"/>
                        <input
                            type="text"
                            placeholder="Search orders..."
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
                            {["Order ID", "Customer", "Date", "Items", "Total", "Status"].map((h) => (
                                <th key={h}
                                    className="text-left px-5 py-3 text-xs font-semibold text-[var(--muted-foreground)] uppercase tracking-wider">
                                    {h}
                                </th>
                            ))}
                        </tr>
                        </thead>
                        <tbody>
                        {filtered.map((order) => (
                            <tr key={order.id}
                                className="border-b border-[var(--border)] last:border-0 hover:bg-[var(--muted)] transition-colors">
                                <td className="px-5 py-4 font-mono font-medium text-[var(--primary)]">{order.id}</td>
                                <td className="px-5 py-4 font-medium text-[var(--foreground)]">{order.customer}</td>
                                <td className="px-5 py-4 text-[var(--muted-foreground)]">{order.date}</td>
                                <td className="px-5 py-4 text-[var(--muted-foreground)]">{order.items} items</td>
                                <td className="px-5 py-4 font-semibold text-[var(--foreground)]">{order.total}</td>
                                <td className="px-5 py-4">
                    <span className={`text-xs px-2.5 py-1 rounded-full font-medium ${statusColor[order.status]}`}>
                      {order.status}
                    </span>
                                </td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>

                {/* Footer */}
                <div className="px-5 py-3 border-t border-[var(--border)]">
                    <p className="text-xs text-[var(--muted-foreground)]">Showing {filtered.length} of {orders.length} orders</p>
                </div>
            </div>
        </div>
    );
}