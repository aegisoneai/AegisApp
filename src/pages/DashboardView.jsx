import PageHeader from "../components/PageHeader";
import StatusCard from "../components/StatusCard";
import SectionCard from "../components/SectionCard";

import { getPortfolioSummary, getTelemetrySummary } from "../services";
import RuntimeBanner from "../components/RuntimeBanner";

export default function DashboardView() {

    const portfolioSummary = getPortfolioSummary();
    const telemetrySummary = getTelemetrySummary();

    return (
        <div className="max-w-7xl mx-auto space-y-6">
            <PageHeader
                title="Dashboard"
                subtitle="A calm overview of portfolio health, automation status, protections, and recent activity."
            />
            <RuntimeBanner
                status="Protected & Stable"
                detail="Telemetry systems and governed protections are operating normally."
            />
            <StatusCard
                label="System Status"
                value={telemetrySummary.runtimeStatus}
                detail={telemetrySummary.detail}
                tone="good"
            />

            <SectionCard
                title="Portfolio Overview"
                subtitle="High-level portfolio visibility with calm operational summaries."
            >
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <StatusCard
                        label="Portfolio Value"
                        value={portfolioSummary.portfolioValue}
                        detail="Across all protected allocations."
                    />

                    <StatusCard
                        label="Daily Change"
                        value={portfolioSummary.dailyChange}
                        detail="Stable upward movement today."
                        tone="good"
                    />

                    <StatusCard
                        label="Active Protections"
                        value={portfolioSummary.activeProtections}
                        detail="Monitoring stops and lifecycle controls."
                    />
                </div>
            </SectionCard>
        </div>
    )
}