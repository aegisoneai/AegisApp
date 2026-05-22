import PageHeader from "../components/PageHeader";
import SectionCard from "../components/SectionCard";
import StatusCard from "../components/StatusCard";

export default function SettingsView() {
    return (
        <div className="max-w-7xl mx-auto space-y-6">
            <PageHeader
                title="Settings"
                subtitle="Governed configuration visibility designed around calm operational control."
            />

            <SectionCard
                title="Platform Configuration"
                subtitle="Current operational posture and protection-focused defaults."
            >
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

                    <StatusCard
                        label="Automation"
                        value="Enabled"
                        detail="Governed execution protections active."
                        tone="good"
                    />

                    <StatusCard
                        label="Risk Governance"
                        value="Standard"
                        detail="Retail-safe operational defaults applied."
                    />

                    <StatusCard
                        label="Observability"
                        value="Active"
                        detail="Lifecycle and telemetry monitoring enabled."
                        tone="good"
                    />

                </div>
            </SectionCard>

            <SectionCard
                title="Governance Notes"
                subtitle="Future advanced controls will remain progressively exposed."
            >
                <div className="space-y-4 text-sm text-slate-300">

                    <p>
                        Aegis separates retail simplicity from institutional backend complexity through governed visibility layers.
                    </p>

                    <p>
                        Advanced controls, telemetry, and override systems will remain intentionally structured and observable.
                    </p>

                    <p className="text-slate-400">
                        Future settings architecture will support role-aware visibility and modular configuration systems.
                    </p>

                </div>
            </SectionCard>
        </div>
    )
}