export default function RuntimeBanner({
    status = "Protected & Stable",
    detail = "All monitored systems operating normally.",
}) {
    return (
        <div className="rounded-3xl border border-emerald-500/30 bg-emerald-500/10 p-4">
            <div className="text-sm uppercase tracking-wide text-emerald-300">
                Runtime Status
            </div>

            <div className="text-lg font-semibold text-emerald-100 mt-1">
                {status}
            </div>

            <p className="text-sm text-slate-300 mt-2">
                {detail}
            </p>
        </div>
    )
}