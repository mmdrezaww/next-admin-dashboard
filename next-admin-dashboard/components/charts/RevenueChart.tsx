"use client";

import {
    AreaChart,
    Area,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
} from "recharts";

const data = [
    {month: "Jan", revenue: 4200},
    {month: "Feb", revenue: 5800},
    {month: "Mar", revenue: 4900},
    {month: "Apr", revenue: 7200},
    {month: "May", revenue: 6100},
    {month: "Jun", revenue: 8900},
    {month: "Jul", revenue: 7600},
    {month: "Aug", revenue: 9400},
    {month: "Sep", revenue: 8200},
    {month: "Oct", revenue: 11000},
    {month: "Nov", revenue: 9800},
    {month: "Dec", revenue: 12500},
];

export default function RevenueChart() {
    return (
        <div className="bg-white dark:bg-[#1e293b] rounded-xl border border-[var(--border)] p-5 h-full">
            <h2 className="text-base font-semibold text-[var(--foreground)] mb-1">Revenue Overview</h2>
            <p className="text-xs text-[var(--muted-foreground)] mb-4">Monthly revenue for 2024</p>
            <ResponsiveContainer width="100%" height={260}>
                <AreaChart data={data}>
                    <defs>
                        <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#6366f1" stopOpacity={0.2}/>
                            <stop offset="95%" stopColor="#6366f1" stopOpacity={0}/>
                        </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke="var(--border)"/>
                    <XAxis dataKey="month" tick={{fontSize: 12, fill: "var(--muted-foreground)"}} axisLine={false}
                           tickLine={false}/>
                    <YAxis tick={{fontSize: 12, fill: "var(--muted-foreground)"}} axisLine={false} tickLine={false}
                           tickFormatter={(v) => `$${v}`}/>
                    <Tooltip
                        contentStyle={{
                            background: "var(--card)",
                            border: "1px solid var(--border)",
                            borderRadius: "8px",
                            fontSize: "13px",
                        }}
                        formatter={(value) => [`$${value}`, "Revenue"]}
                    />
                    <Area
                        type="monotone"
                        dataKey="revenue"
                        stroke="#6366f1"
                        strokeWidth={2}
                        fill="url(#colorRevenue)"
                    />
                </AreaChart>
            </ResponsiveContainer>
        </div>
    );
}