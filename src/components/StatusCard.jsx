export default function StatusCard({ label, value, detail, tone = "default" }) {
    const toneClasses = {
        default: "border-slate-800 bg-slate-900/70 text-white",
        good: "border-emerald-500/30 bg-emerald-500/10 text-emerald-100",
        warning: "border-amber-500/30 bg-amber-500/10 text-amber-100",
        danger: "border-red-500/30 bg-red-500/10 text-red-100",
    }

    return (
        <div className={`rounded-3xl border p-5 ${toneClasses[tone]}`}>
            <div className="text-sm text-slate-400">
                {label}
            </div>

            <div className="text-2xl font-bold mt-2">
                {value}
            </div>

            {detail && (
                <div className="text-sm text-slate-400 mt-2">
                    {detail}
                </div>
            )}
        </div>
    )
}