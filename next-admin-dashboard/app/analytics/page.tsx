"use client";

import {
    BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip,
    ResponsiveContainer, PieChart, Pie, Cell, Legend,
} from "recharts";

const monthlyData = [
    {month: "Jan", revenue: 4200, orders: 98},
    {month: "Feb", revenue: 5800, orders: 134},
    {month: "Mar", revenue: 4900, orders: 112},
    {month: "Apr", revenue: 7200, orders: 165},
    {month: "May", revenue: 6100, orders: 141},
    {month: "Jun", revenue: 8900, orders: 198},
    {month: "Jul", revenue: 7600, orders: 172},
    {month: "Aug", revenue: 9400, orders: 210},
    {month: "Sep", revenue: 8200, orders: 188},
    {month: "Oct", revenue: 11000, orders: 245},
    {month: "Nov", revenue: 9800, orders: 221},
    {month: "Dec", revenue: 12500, orders: 278},
];

const categoryData = [
    {name: "Electronics", value: 38},
    {name: "Footwear", value: 22},
    {name: "Kitchen", value: 16},
    {name: "Sports", value: 14},
    {name: "Other", value: 10},
];

const COLORS = ["#6366f1", "#8b5cf6", "#06b6d4", "#10b981", "#f59e0b"];

const stats = [
    {label: "Total Revenue", value: "$95,800", change: "+18.2%"},
    {label: "Total Orders", value: "1,962", change: "+12.5%"},
    {label: "Conversion Rate", value: "3.24%", change: "+0.8%"},
    {label: "Avg. Order Value", value: "$124.50", change: "+5.1%"},
];

export default function AnalyticsPage() {
    return (
        <div className="space-y-6">
            {/* Header */}
            <div>
                <h1 className="text-2xl font-bold text-[var(--foreground)]">Analytics</h1>
                <p className="text-sm text-[var(--muted-foreground)] mt-1">Your store performance for 2024</p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
                {stats.map(({label, value, change}) => (
                    <div key={label}
                         className="bg-white dark:bg-[#1e293b] rounded-xl border border-[var(--border)] p-5">
                        <p className="text-xs text-[var(--muted-foreground)] font-medium">{label}</p>
                        <p className="text-2xl font-bold text-[var(--foreground)] mt-1">{value}</p>
                        <p className="text-xs text-emerald-500 font-medium mt-1">{change} vs last year</p>
                    </div>
                ))}
            </div>

            {/* Bar Chart */}
            <div className="bg-white dark:bg-[#1e293b] rounded-xl border border-[var(--border)] p-5">
                <h2 className="text-base font-semibold text-[var(--foreground)] mb-1">Monthly Orders</h2>
                <p className="text-xs text-[var(--muted-foreground)] mb-4">Number of orders per month</p>
                <ResponsiveContainer width="100%" height={260}>
                    <BarChart data={monthlyData}>
                        <CartesianGrid strokeDasharray="3 3" stroke="var(--border)"/>
                        <XAxis dataKey="month" tick={{fontSize: 12, fill: "var(--muted-foreground)"}} axisLine={false}
                               tickLine={false}/>
                        <YAxis tick={{fontSize: 12, fill: "var(--muted-foreground)"}} axisLine={false}
                               tickLine={false}/>
                        <Tooltip
                            contentStyle={{
                                background: "var(--card)",
                                border: "1px solid var(--border)",
                                borderRadius: "8px",
                                fontSize: "13px",
                            }}
                        />
                        <Bar dataKey="orders" fill="#6366f1" radius={[4, 4, 0, 0]}/>
                    </BarChart>
                </ResponsiveContainer>
            </div>

            {/* Pie Chart + Top Categories */}
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-4">
                <div className="bg-white dark:bg-[#1e293b] rounded-xl border border-[var(--border)] p-5">
                    <h2 className="text-base font-semibold text-[var(--foreground)] mb-1">Sales by Category</h2>
                    <p className="text-xs text-[var(--muted-foreground)] mb-4">Revenue distribution</p>
                    <ResponsiveContainer width="100%" height={240}>
                        <PieChart>
                            <Pie data={categoryData} cx="50%" cy="50%" innerRadius={60} outerRadius={90}
                                 paddingAngle={4} dataKey="value">
                                {categoryData.map((_, index) => (
                                    <Cell key={index} fill={COLORS[index % COLORS.length]}/>
                                ))}
                            </Pie>
                            <Tooltip
                                contentStyle={{
                                    background: "var(--card)",
                                    border: "1px solid var(--border)",
                                    borderRadius: "8px",
                                    fontSize: "13px",
                                }}
                                formatter={(value) => [`${value}%`, "Share"]}
                            />
                            <Legend/>
                        </PieChart>
                    </ResponsiveContainer>
                </div>

                <div className="bg-white dark:bg-[#1e293b] rounded-xl border border-[var(--border)] p-5">
                    <h2 className="text-base font-semibold text-[var(--foreground)] mb-1">Top Categories</h2>
                    <p className="text-xs text-[var(--muted-foreground)] mb-4">By revenue share</p>
                    <div className="space-y-4 mt-2">
                        {categoryData.map(({name, value}, index) => (
                            <div key={name}>
                                <div className="flex items-center justify-between mb-1">
                                    <span className="text-sm font-medium text-[var(--foreground)]">{name}</span>
                                    <span className="text-sm text-[var(--muted-foreground)]">{value}%</span>
                                </div>
                                <div className="w-full bg-[var(--muted)] rounded-full h-2">
                                    <div
                                        className="h-2 rounded-full transition-all"
                                        style={{width: `${value}%`, background: COLORS[index]}}
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}