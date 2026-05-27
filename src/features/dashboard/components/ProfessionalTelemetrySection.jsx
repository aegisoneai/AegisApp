import SectionCard from "../../../components/SectionCard";
import DashboardPanel from "../../../components/DashboardPanel";

export default function ProfessionalTelemetrySection() {
    return (
        <SectionCard
            title="Professional Telemetry"
            subtitle="Advanced operational visibility reserved for professional workspace users."
        >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <DashboardPanel>
                    <div className="text-sm text-slate-400">
                        Governance Score
                    </div>

                    <div className="text-2xl font-bold mt-2 text-sky-300">
                        87
                    </div>

                    <div className="text-xs text-slate-500 mt-2">
                        Current operational confidence index
                    </div>
                </DashboardPanel>

                <DashboardPanel>
                    <div className="text-sm text-slate-400">
                        Strategy Qualification
                    </div>

                    <div className="text-2xl font-bold mt-2 text-emerald-300">
                        Watchlist
                    </div>

                    <div className="text-xs text-slate-500 mt-2">
                        Research-visible, not live-authorized
                    </div>
                </DashboardPanel>

                <DashboardPanel>
                    <div className="text-sm text-slate-400">
                        Runtime Detail
                    </div>

                    <div className="text-2xl font-bold mt-2 text-amber-300">
                        Limited
                    </div>

                    <div className="text-xs text-slate-500 mt-2">
                        Advanced telemetry visibility enabled
                    </div>
                </DashboardPanel>
            </div>
        </SectionCard>
    );
}