import SectionCard from "../components/SectionCard";

export default function GuidanceView() {
    return (
        <div className="max-w-7xl mx-auto space-y-6">

            <SectionCard
                title="Current Guidance"
                subtitle="Calm interpretation of system posture, protections, and market conditions."
            >
                <div className="space-y-4 text-sm text-slate-300">
                    <p>
                        Aegis is currently operating in a stable monitoring posture. Active protections remain visible and no elevated risk warnings are present.
                    </p>

                    <p>
                        Portfolio activity should continue to be reviewed through protection status, lifecycle health, and reconciliation confidence rather than short-term price noise.
                    </p>

                    <p className="text-slate-400">
                        Guidance is informational and should remain grounded in observed system telemetry as backend integration expands.
                    </p>
                </div>
            </SectionCard>
        </div>
    )
}