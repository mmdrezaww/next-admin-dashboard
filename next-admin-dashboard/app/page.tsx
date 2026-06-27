import {
  ShoppingCart,
  Users,
  Package,
  DollarSign,
  TrendingUp,
  TrendingDown,
} from "lucide-react";
import RevenueChart from "@/components/charts/RevenueChart";
import RecentOrders from "@/components/tables/RecentOrders";

const stats = [
  {
    label: "Total Revenue",
    value: "$48,295",
    change: "+12.5%",
    up: true,
    icon: DollarSign,
    color: "bg-indigo-500",
  },
  {
    label: "Total Orders",
    value: "1,284",
    change: "+8.2%",
    up: true,
    icon: ShoppingCart,
    color: "bg-emerald-500",
  },
  {
    label: "Total Customers",
    value: "3,921",
    change: "+5.1%",
    up: true,
    icon: Users,
    color: "bg-violet-500",
  },
  {
    label: "Total Products",
    value: "642",
    change: "-2.4%",
    up: false,
    icon: Package,
    color: "bg-rose-500",
  },
];

export default function OverviewPage() {
  return (
      <div className="space-y-6">

        {/* Page title */}
        <div>
          <h1 className="text-2xl font-bold text-[var(--foreground)]">Overview</h1>
          <p className="text-sm text-[var(--muted-foreground)] mt-1">
            Welcome back! Here's what's happening today.
          </p>
        </div>

        {/* KPI Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
          {stats.map(({ label, value, change, up, icon: Icon, color }) => (
              <div
                  key={label}
                  className="bg-white dark:bg-[#1e293b] rounded-xl border border-[var(--border)] p-5 flex items-center gap-4"
              >
                <div className={`${color} p-3 rounded-xl`}>
                  <Icon size={20} className="text-white" />
                </div>
                <div className="flex-1">
                  <p className="text-xs text-[var(--muted-foreground)] font-medium">{label}</p>
                  <p className="text-xl font-bold text-[var(--foreground)] mt-0.5">{value}</p>
                  <div className="flex items-center gap-1 mt-1">
                    {up ? (
                        <TrendingUp size={13} className="text-emerald-500" />
                    ) : (
                        <TrendingDown size={13} className="text-rose-500" />
                    )}
                    <span className={`text-xs font-medium ${up ? "text-emerald-500" : "text-rose-500"}`}>
                  {change} this month
                </span>
                  </div>
                </div>
              </div>
          ))}
        </div>

        {/* Chart + Recent Orders */}
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-4">
          <div className="xl:col-span-2">
            <RevenueChart />
          </div>
          <div>
            <RecentOrders />
          </div>
        </div>

      </div>
  );
}