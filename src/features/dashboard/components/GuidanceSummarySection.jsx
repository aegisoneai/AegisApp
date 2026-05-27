import SectionCard from "../../../components/SectionCard";

export default function GuidanceSummarySection() {
    return (
        <SectionCard
            title="Aegis Guidance Summary"
            subtitle="Calm interpretation of market conditions, protections, and recommended posture."
        >
            <div className="grid grid-cols-1 xl:grid-cols-3 gap-4 h-full">

                <div className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5 xl:col-span-2 h-full">
                    <div className="text-sm uppercase tracking-wide text-slate-500">
                        Current Guidance
                    </div>

                    <div className="text-2xl font-semibold mt-2">
                        Maintain disciplined long-term positioning.
                    </div>

                    <p className="text-slate-300 mt-4 leading-relaxed">
                        Market conditions remain within normal governed ranges. Aegis is maintaining standard
                        protection behavior while continuing to monitor volatility, portfolio exposure, and
                        operational health.
                    </p>
                </div>

                <div className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5 h-full">
                    <div className="text-sm uppercase tracking-wide text-slate-500">
                        Confidence State
                    </div>

                    <div className="text-2xl font-semibold mt-2 text-emerald-400">
                        Stable
                    </div>

                    <p className="text-slate-400 mt-4 text-sm leading-relaxed">
                        No elevated risk signals require user action at this time.
                    </p>
                </div>

            </div>
        </SectionCard>
    );
}