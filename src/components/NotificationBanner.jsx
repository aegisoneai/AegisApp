export default function NotificationBanner({
    title,
    message,
    tone = "default",
}) {

    const toneClasses = {
        default: "border-slate-700 bg-slate-900/70",
        success: "border-emerald-500/30 bg-emerald-500/10",
        warning: "border-amber-500/30 bg-amber-500/10",
        danger: "border-red-500/30 bg-red-500/10",
    }

    return (
        <div className={`rounded-3xl border p-4 ${toneClasses[tone]}`}>
            <div className="font-semibold text-white">
                {title}
            </div>

            <div className="text-sm text-slate-300 mt-2">
                {message}
            </div>
        </div>
    )
}