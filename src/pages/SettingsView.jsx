import StatusCard from "../components/StatusCard";
import SettingsSectionCard from "../components/SettingsSectionCard";
import SettingsSidebar from "../components/SettingsSidebar";
import SettingsToggleRow from "../components/SettingsToggleRow";

export default function SettingsView() {
    return (
        <div className="max-w-7xl mx-auto grid grid-cols-1 xl:grid-cols-[260px_1fr] gap-6">

            <div>
                <SettingsSidebar />
            </div>

            <div className="space-y-6">

                <SettingsSectionCard
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
                </SettingsSectionCard>

                <SettingsSectionCard
                    title="Automation Preferences"
                    subtitle="Governed operational controls designed for retail-safe automation behavior."
                >
                    <SettingsToggleRow
                        title="Protected Automation"
                        description="Allow governed automation systems to assist with monitored execution behavior."
                        enabled={true}
                    />

                    <SettingsToggleRow
                        title="AI Guidance Visibility"
                        description="Show explainable AI guidance summaries throughout the platform."
                        enabled={true}
                    />

                    <SettingsToggleRow
                        title="Advanced Operational Telemetry"
                        description="Expose additional runtime observability intended for advanced users."
                        enabled={false}
                    />
                </SettingsSectionCard>

                <SettingsSectionCard
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
                </SettingsSectionCard>

            </div>
        </div>
    );
}