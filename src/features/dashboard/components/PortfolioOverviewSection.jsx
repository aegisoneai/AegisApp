import SectionCard from "../../../components/SectionCard";
import StatusCard from "../../../components/StatusCard";

export default function PortfolioOverviewSection({
    portfolioValue,
    dailyChange,
    activeProtections,
}) {
    return (
        <SectionCard
            title="Portfolio Overview"
            subtitle="High-level portfolio visibility with calm operational summaries."
        >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

                <StatusCard
                    label="Portfolio Value"
                    value={portfolioValue}
                    detail="Across all protected allocations."
                />

                <StatusCard
                    label="Daily Change"
                    value={dailyChange}
                    detail="Stable upward movement today."
                    tone="good"
                />

                <StatusCard
                    label="Active Protections"
                    value={activeProtections}
                    detail="Monitoring stops and lifecycle controls."
                />

            </div>
        </SectionCard>
    );
}