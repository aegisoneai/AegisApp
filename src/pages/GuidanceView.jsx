import SectionCard from "../components/SectionCard";
import { demoInsights } from "../data/demo/insights";

export default function GuidanceView() {
    return (
        <div className="max-w-7xl mx-auto space-y-6">

            <SectionCard
                title="Current Guidance"
                subtitle="Calm interpretation of system posture, protections, and market conditions."
            >
                <div className="space-y-4 text-sm text-slate-300">
                    <p>
                        Aegis is currently presenting a demo guidance posture based on simulated platform state.
                    </p>

                    <div className="rounded-xl border border-slate-800 bg-slate-950/60 p-4">
                        <p className="font-semibold text-slate-100">Market Conditions</p>
                        <p className="mt-1 text-slate-400">{demoInsights.marketConditions}</p>
                    </div>

                    <div className="rounded-xl border border-slate-800 bg-slate-950/60 p-4">
                        <p className="font-semibold text-slate-100">Risk Posture</p>
                        <p className="mt-1 text-slate-400">{demoInsights.riskPosture}</p>
                    </div>

                    <div className="rounded-xl border border-slate-800 bg-slate-950/60 p-4">
                        <p className="font-semibold text-slate-100">Recommended Action</p>
                        <p className="mt-1 text-emerald-300">{demoInsights.recommendedAction}</p>
                    </div>

                    <p className="text-slate-400">
                        {demoInsights.explanation}
                    </p>
                </div>
            </SectionCard>
        </div>
    )
}