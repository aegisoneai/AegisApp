import StatusCard from "../components/StatusCard";
import SectionCard from "../components/SectionCard";

export default function ProtectionsView() {
    return (
        <div className="max-w-7xl mx-auto space-y-6">

            <SectionCard
                title="Protection Status"
                subtitle="Core protection systems currently active across monitored automation."
            >
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

                    <StatusCard
                        label="Active Stops"
                        value="12"
                        detail="Monitoring live positions."
                        tone="good"
                    />

                    <StatusCard
                        label="Cooldown Governance"
                        value="Enabled"
                        detail="Preventing rapid re-entry exposure."
                    />

                    <StatusCard
                        label="Risk State"
                        value="Stable"
                        detail="No elevated operational warnings."
                        tone="good"
                    />

                </div>
            </SectionCard>

            <SectionCard
                title="Protection Overview"
                subtitle="High-level visibility into governed safety behavior."
            >
                <div className="space-y-3 text-sm text-slate-300">

                    <div className="flex justify-between border-b border-slate-800 pb-3">
                        <span>Fill-confirmed protections</span>
                        <span className="text-emerald-300">Operational</span>
                    </div>

                    <div className="flex justify-between border-b border-slate-800 pb-3">
                        <span>Broker reconciliation</span>
                        <span className="text-emerald-300">Healthy</span>
                    </div>

                    <div className="flex justify-between border-b border-slate-800 pb-3">
                        <span>Lifecycle monitoring</span>
                        <span className="text-emerald-300">Active</span>
                    </div>

                </div>
            </SectionCard>
        </div>
    )
}