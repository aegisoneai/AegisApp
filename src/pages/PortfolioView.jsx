import StatusCard from "../components/StatusCard";
import SectionCard from "../components/SectionCard";
import DataTable from "../components/DataTable";

export default function PortfolioView() {
    return (
        <div className="max-w-7xl mx-auto space-y-6">

            <SectionCard
                title="Portfolio Summary"
                subtitle="High-level account visibility without trading-terminal clutter."
            >
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <StatusCard
                        label="Portfolio Value"
                        value="$248,420"
                        detail="Current protected account value."
                        tone="good"
                    />

                    <StatusCard
                        label="Open Positions"
                        value="4"
                        detail="Active monitored allocations."
                    />

                    <StatusCard
                        label="Cash Available"
                        value="$32,180"
                        detail="Available for future governed allocation."
                    />
                </div>
            </SectionCard>

            <SectionCard
                title="Position Health"
                subtitle="A calm snapshot of current portfolio posture."
            >
                <div className="space-y-3 text-sm text-slate-300">
                    <div className="flex justify-between border-b border-slate-800 pb-3">
                        <span>NVDA</span>
                        <span className="text-emerald-300">Protected</span>
                    </div>

                    <div className="flex justify-between border-b border-slate-800 pb-3">
                        <span>AAPL</span>
                        <span className="text-emerald-300">Protected</span>
                    </div>

                    <div className="flex justify-between border-b border-slate-800 pb-3">
                        <span>SPY</span>
                        <span className="text-slate-400">Monitoring</span>
                    </div>
                </div>
            </SectionCard>
            <SectionCard
                title="Position Table"
                subtitle="Structured portfolio visibility prepared for future broker telemetry."
            >
                <DataTable
                    columns={[
                        "Symbol",
                        "Status",
                        "Protection",
                    ]}
                    rows={[
                        ["NVDA", "Active", "Protected"],
                        ["AAPL", "Active", "Protected"],
                        ["SPY", "Monitoring", "Observed"],
                    ]}
                />
            </SectionCard>
        </div>
    )
}