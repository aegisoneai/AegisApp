import SectionCard from "../components/SectionCard";
import StatusCard from "../components/StatusCard";
import { demoInsights } from "../data/demo/insights";

export default function ResearchView() {
    return (
        <div className="max-w-7xl mx-auto space-y-6">

            <SectionCard
                title="Research Status"
                subtitle="Current research environment posture."
            >
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

                    <StatusCard
                        label="Research Mode"
                        value="Offline Validation"
                        detail="No live execution connected."
                        tone="good"
                    />

                    <StatusCard
                        label="Strategies Active"
                        value="3"
                        detail="Currently under controlled review."
                    />

                    <StatusCard
                        label="Walk-Forward Status"
                        value="In Progress"
                        detail="Validation datasets currently processing."
                    />

                </div>
            </SectionCard>

            <SectionCard
                title="Aegis AI Insight Preview"
                subtitle="Demo-only operational guidance based on simulated platform state."
            >
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">

                    <StatusCard
                        label="Market Conditions"
                        value={demoInsights.marketConditions}
                        detail="Simulated market interpretation."
                        tone="good"
                    />

                    <StatusCard
                        label="Risk Posture"
                        value={demoInsights.riskPosture}
                        detail="Current demo account posture."
                    />

                    <StatusCard
                        label="Protection Status"
                        value={demoInsights.protectionStatus}
                        detail="Protection systems remain healthy."
                        tone="good"
                    />

                </div>

                <div className="rounded-xl border border-slate-800 bg-slate-950/60 p-4 text-sm text-slate-300">
                    <p className="font-semibold text-slate-100 mb-2">
                        Recommended Action
                    </p>

                    <p className="text-emerald-300 font-medium">
                        {demoInsights.recommendedAction}
                    </p>

                    <p className="mt-3 text-slate-400">
                        {demoInsights.explanation}
                    </p>
                </div>
            </SectionCard>

            <SectionCard
                title="Research Doctrine"
                subtitle="Research systems remain isolated from live runtime environments."
            >
                <div className="space-y-4 text-sm text-slate-300">

                    <p>
                        Aegis Research prioritizes survivability, reproducibility, and explainable validation over aggressive optimization behavior.
                    </p>

                    <p>
                        Experimental strategy behavior should remain governed and separated from production execution systems.
                    </p>

                    <p className="text-slate-400">
                        Future analytics and telemetry integrations will connect through controlled observability services.
                    </p>

                </div>
            </SectionCard>
        </div>
    )
}