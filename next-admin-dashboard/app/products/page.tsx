"use client";

import {useState} from "react";
import {Search, Plus, Pencil, Trash2} from "lucide-react";

const products = [
    {id: 1, name: "Wireless Headphones", category: "Electronics", price: "$129.99", stock: 84, status: "In Stock"},
    {id: 2, name: "Running Shoes", category: "Footwear", price: "$89.99", stock: 12, status: "Low Stock"},
    {id: 3, name: "Coffee Maker", category: "Kitchen", price: "$59.99", stock: 0, status: "Out of Stock"},
    {id: 4, name: "Yoga Mat", category: "Sports", price: "$34.99", stock: 56, status: "In Stock"},
    {id: 5, name: "Smartwatch", category: "Electronics", price: "$199.99", stock: 23, status: "In Stock"},
    {id: 6, name: "Desk Lamp", category: "Home", price: "$44.99", stock: 8, status: "Low Stock"},
    {id: 7, name: "Backpack", category: "Accessories", price: "$79.99", stock: 41, status: "In Stock"},
    {id: 8, name: "Bluetooth Speaker", category: "Electronics", price: "$99.99", stock: 0, status: "Out of Stock"},
];

const statusColor: Record<string, string> = {
    "In Stock": "bg-emerald-100 text-emerald-700 dark:bg-emerald-900 dark:text-emerald-300",
    "Low Stock": "bg-amber-100 text-amber-700 dark:bg-amber-900 dark:text-amber-300",
    "Out of Stock": "bg-rose-100 text-rose-700 dark:bg-rose-900 dark:text-rose-300",
};

export default function ProductsPage() {
    const [search, setSearch] = useState("");

    const filtered = products.filter((p) =>
        p.name.toLowerCase().includes(search.toLowerCase()) ||
        p.category.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div className="space-y-6">
            {/* Header */}
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-2xl font-bold text-[var(--foreground)]">Products</h1>
                    <p className="text-sm text-[var(--muted-foreground)] mt-1">Manage your product inventory</p>
                </div>
                <button
                    className="flex items-center gap-2 bg-[var(--primary)] text-white px-4 py-2 rounded-lg text-sm font-medium hover:opacity-90 transition-opacity">
                    <Plus size={16}/>
                    Add Product
                </button>
            </div>

            {/* Table Card */}
            <div className="bg-white dark:bg-[#1e293b] rounded-xl border border-[var(--border)]">
                {/* Search */}
                <div className="p-4 border-b border-[var(--border)]">
                    <div className="flex items-center gap-2 bg-[var(--muted)] rounded-lg px-3 py-2 w-72">
                        <Search size={15} className="text-[var(--muted-foreground)]"/>
                        <input
                            type="text"
                            placeholder="Search products..."
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
                            {["Product", "Category", "Price", "Stock", "Status", "Actions"].map((h) => (
                                <th key={h}
                                    className="text-left px-5 py-3 text-xs font-semibold text-[var(--muted-foreground)] uppercase tracking-wider">
                                    {h}
                                </th>
                            ))}
                        </tr>
                        </thead>
                        <tbody>
                        {filtered.map((product) => (
                            <tr key={product.id}
                                className="border-b border-[var(--border)] last:border-0 hover:bg-[var(--muted)] transition-colors">
                                <td className="px-5 py-4 font-medium text-[var(--foreground)]">{product.name}</td>
                                <td className="px-5 py-4 text-[var(--muted-foreground)]">{product.category}</td>
                                <td className="px-5 py-4 font-semibold text-[var(--foreground)]">{product.price}</td>
                                <td className="px-5 py-4 text-[var(--muted-foreground)]">{product.stock}</td>
                                <td className="px-5 py-4">
                    <span className={`text-xs px-2.5 py-1 rounded-full font-medium ${statusColor[product.status]}`}>
                      {product.status}
                    </span>
                                </td>
                                <td className="px-5 py-4">
                                    <div className="flex items-center gap-2">
                                        <button
                                            className="p-1.5 rounded-lg hover:bg-[var(--accent)] text-[var(--muted-foreground)] hover:text-[var(--foreground)] transition-colors">
                                            <Pencil size={15}/>
                                        </button>
                                        <button
                                            className="p-1.5 rounded-lg hover:bg-rose-100 text-[var(--muted-foreground)] hover:text-rose-600 transition-colors">
                                            <Trash2 size={15}/>
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>

                {/* Footer */}
                <div className="px-5 py-3 border-t border-[var(--border)]">
                    <p className="text-xs text-[var(--muted-foreground)]">Showing {filtered.length} of {products.length} products</p>
                </div>
            </div>
        </div>
    );
}