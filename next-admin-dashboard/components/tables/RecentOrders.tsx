const orders = [
    {id: "#3210", customer: "Alice Johnson", status: "Delivered", amount: "$120.00"},
    {id: "#3209", customer: "Bob Smith", status: "Pending", amount: "$89.50"},
    {id: "#3208", customer: "Carol White", status: "Processing", amount: "$245.00"},
    {id: "#3207", customer: "David Lee", status: "Delivered", amount: "$67.20"},
    {id: "#3206", customer: "Eva Martinez", status: "Cancelled", amount: "$310.00"},
];

const statusColor: Record<string, string> = {
    Delivered: "bg-emerald-100 text-emerald-700 dark:bg-emerald-900 dark:text-emerald-300",
    Pending: "bg-amber-100 text-amber-700 dark:bg-amber-900 dark:text-amber-300",
    Processing: "bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300",
    Cancelled: "bg-rose-100 text-rose-700 dark:bg-rose-900 dark:text-rose-300",
};

export default function RecentOrders() {
    return (
        <div className="bg-white dark:bg-[#1e293b] rounded-xl border border-[var(--border)] p-5 h-full">
            <h2 className="text-base font-semibold text-[var(--foreground)] mb-1">Recent Orders</h2>
            <p className="text-xs text-[var(--muted-foreground)] mb-4">Last 5 orders</p>
            <div className="space-y-3">
                {orders.map((order) => (
                    <div key={order.id}
                         className="flex items-center justify-between py-2 border-b border-[var(--border)] last:border-0">
                        <div>
                            <p className="text-sm font-medium text-[var(--foreground)]">{order.customer}</p>
                            <p className="text-xs text-[var(--muted-foreground)]">{order.id}</p>
                        </div>
                        <div className="flex flex-col items-end gap-1">
              <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${statusColor[order.status]}`}>
                {order.status}
              </span>
                            <span className="text-xs font-semibold text-[var(--foreground)]">{order.amount}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}