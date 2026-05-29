import { useNotificationStore } from "../state/notificationStore";

export default function NotificationDrawer({
    open,
    onClose,
}) {
    const notifications = useNotificationStore((state) => state.notifications);
    const markAllRead = useNotificationStore((state) => state.markAllRead);

    if (!open) return null;

    return (
        <div className="fixed inset-0 z-[90] flex justify-end">

            <button
                className="absolute inset-0 bg-black/50"
                onClick={onClose}
            />

            <div className="relative w-full max-w-md h-full bg-slate-950 border-l border-slate-800 p-6 overflow-y-auto">

                <div className="flex items-center justify-between mb-6">

                    <div>
                        <div className="text-xl font-semibold text-slate-100">
                            Notifications
                        </div>

                        <div className="text-sm text-slate-400 mt-1">
                            Operational events and governed platform visibility.
                        </div>
                    </div>

                    <button
                        onClick={onClose}
                        className="text-slate-400 hover:text-white transition"
                    >
                        ✕
                    </button>

                </div>

                <div className="flex justify-between items-center mb-6">

                    <div className="text-sm text-slate-400">
                        {notifications.length} notifications
                    </div>

                    <button
                        onClick={markAllRead}
                        className="text-sm text-emerald-300 hover:text-emerald-200 transition"
                    >
                        Mark all read
                    </button>

                </div>

                <div className="space-y-4">

                    {notifications.map((item) => (
                        <div
                            key={item.id}
                            className={`rounded-2xl border p-4 ${item.read
                                ? "border-slate-800 bg-slate-900/40"
                                : "border-emerald-500/30 bg-emerald-500/10"
                                }`}
                        >
                            <div className="font-semibold text-slate-100">
                                {item.title}
                            </div>

                            <div className="text-sm text-slate-300 mt-2">
                                {item.message}
                            </div>
                        </div>
                    ))}

                </div>

            </div>
        </div>
    );
}