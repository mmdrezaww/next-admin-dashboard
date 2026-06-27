"use client";

import {useState} from "react";
import {User, Bell, Shield, Palette} from "lucide-react";

export default function SettingsPage() {
    const [name, setName] = useState("Admin User");
    const [email, setEmail] = useState("admin@dashboard.com");
    const [notifications, setNotifications] = useState({
        orders: true,
        customers: false,
        analytics: true,
        updates: false,
    });
    const [saved, setSaved] = useState(false);

    const handleSave = () => {
        setSaved(true);
        setTimeout(() => setSaved(false), 2000);
    };

    return (
        <div className="space-y-6 max-w-3xl">
            {/* Header */}
            <div>
                <h1 className="text-2xl font-bold text-[var(--foreground)]">Settings</h1>
                <p className="text-sm text-[var(--muted-foreground)] mt-1">Manage your account and preferences</p>
            </div>

            {/* Profile */}
            <div className="bg-white dark:bg-[#1e293b] rounded-xl border border-[var(--border)] p-6">
                <div className="flex items-center gap-3 mb-5">
                    <User size={18} className="text-[var(--primary)]"/>
                    <h2 className="text-base font-semibold text-[var(--foreground)]">Profile</h2>
                </div>
                <div className="flex items-center gap-4 mb-6">
                    <div
                        className="w-16 h-16 rounded-full bg-[var(--primary)] flex items-center justify-center text-white text-xl font-bold">
                        AD
                    </div>
                    <div>
                        <p className="font-medium text-[var(--foreground)]">{name}</p>
                        <p className="text-sm text-[var(--muted-foreground)]">{email}</p>
                    </div>
                </div>
                <div className="space-y-4">
                    <div>
                        <label className="text-xs font-medium text-[var(--muted-foreground)] uppercase tracking-wider">Full
                            Name</label>
                        <input
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="mt-1.5 w-full px-3 py-2.5 rounded-lg border border-[var(--border)] bg-[var(--muted)] text-sm text-[var(--foreground)] outline-none focus:border-[var(--primary)] transition-colors"
                        />
                    </div>
                    <div>
                        <label className="text-xs font-medium text-[var(--muted-foreground)] uppercase tracking-wider">Email
                            Address</label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="mt-1.5 w-full px-3 py-2.5 rounded-lg border border-[var(--border)] bg-[var(--muted)] text-sm text-[var(--foreground)] outline-none focus:border-[var(--primary)] transition-colors"
                        />
                    </div>
                </div>
            </div>

            {/* Notifications */}
            <div className="bg-white dark:bg-[#1e293b] rounded-xl border border-[var(--border)] p-6">
                <div className="flex items-center gap-3 mb-5">
                    <Bell size={18} className="text-[var(--primary)]"/>
                    <h2 className="text-base font-semibold text-[var(--foreground)]">Notifications</h2>
                </div>
                <div className="space-y-4">
                    {Object.entries(notifications).map(([key, value]) => (
                        <div key={key}
                             className="flex items-center justify-between py-2 border-b border-[var(--border)] last:border-0">
                            <div>
                                <p className="text-sm font-medium text-[var(--foreground)] capitalize">{key} alerts</p>
                                <p className="text-xs text-[var(--muted-foreground)]">Receive notifications
                                    for {key}</p>
                            </div>
                            <button
                                onClick={() => setNotifications((prev) => ({
                                    ...prev,
                                    [key]: !prev[key as keyof typeof prev]
                                }))}
                                className={`relative w-11 h-6 rounded-full transition-colors ${value ? "bg-[var(--primary)]" : "bg-[var(--muted)]"}`}
                            >
                                <span
                                    className={`absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full shadow transition-transform ${value ? "translate-x-5" : "translate-x-0"}`}/>
                            </button>
                        </div>
                    ))}
                </div>
            </div>

            {/* Security */}
            <div className="bg-white dark:bg-[#1e293b] rounded-xl border border-[var(--border)] p-6">
                <div className="flex items-center gap-3 mb-5">
                    <Shield size={18} className="text-[var(--primary)]"/>
                    <h2 className="text-base font-semibold text-[var(--foreground)]">Security</h2>
                </div>
                <div className="space-y-4">
                    <div>
                        <label className="text-xs font-medium text-[var(--muted-foreground)] uppercase tracking-wider">Current
                            Password</label>
                        <input
                            type="password"
                            placeholder="••••••••"
                            className="mt-1.5 w-full px-3 py-2.5 rounded-lg border border-[var(--border)] bg-[var(--muted)] text-sm text-[var(--foreground)] outline-none focus:border-[var(--primary)] transition-colors"
                        />
                    </div>
                    <div>
                        <label className="text-xs font-medium text-[var(--muted-foreground)] uppercase tracking-wider">New
                            Password</label>
                        <input
                            type="password"
                            placeholder="••••••••"
                            className="mt-1.5 w-full px-3 py-2.5 rounded-lg border border-[var(--border)] bg-[var(--muted)] text-sm text-[var(--foreground)] outline-none focus:border-[var(--primary)] transition-colors"
                        />
                    </div>
                </div>
            </div>

            {/* Appearance */}
            <div className="bg-white dark:bg-[#1e293b] rounded-xl border border-[var(--border)] p-6">
                <div className="flex items-center gap-3 mb-5">
                    <Palette size={18} className="text-[var(--primary)]"/>
                    <h2 className="text-base font-semibold text-[var(--foreground)]">Appearance</h2>
                </div>
                <p className="text-sm text-[var(--muted-foreground)]">Use the moon/sun icon in the navbar to toggle dark
                    mode.</p>
            </div>

            {/* Save */}
            <div className="flex items-center gap-3">
                <button
                    onClick={handleSave}
                    className="px-6 py-2.5 bg-[var(--primary)] text-white rounded-lg text-sm font-medium hover:opacity-90 transition-opacity"
                >
                    {saved ? "Saved!" : "Save Changes"}
                </button>
                {saved && <p className="text-sm text-emerald-500 font-medium">Changes saved successfully</p>}
            </div>
        </div>
    );
}