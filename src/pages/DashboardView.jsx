import { getPortfolioSummary, getTelemetrySummary } from "../services";
import RuntimeBanner from "../components/RuntimeBanner";
import RecentActivitySection from "../features/dashboard/components/RecentActivitySection";
import PortfolioOverviewSection from "../features/dashboard/components/PortfolioOverviewSection";
import SystemStatusSection from "../features/dashboard/components/SystemStatusSection";
import ProtectionIntelligenceSection from "../features/dashboard/components/ProtectionIntelligenceSection";
import OperationalHealthSection from "../features/dashboard/components/OperationalHealthSection";
import GuidanceSummarySection from "../features/dashboard/components/GuidanceSummarySection";
import DashboardSectionGrid from "../components/DashboardSectionGrid";

export default function DashboardView() {
    const portfolioSummary = getPortfolioSummary();
    const telemetrySummary = getTelemetrySummary();

    return (
        <div className="max-w-7xl mx-auto space-y-6">

            <RuntimeBanner
                status="Protected & Stable"
                detail="Telemetry systems and governed protections are operating normally."
            />

            <SystemStatusSection
                runtimeStatus={telemetrySummary.runtimeStatus}
                detail={telemetrySummary.detail}
            />

            <DashboardSectionGrid>
                <PortfolioOverviewSection
                    portfolioValue={portfolioSummary.portfolioValue}
                    dailyChange={portfolioSummary.dailyChange}
                    activeProtections={portfolioSummary.activeProtections}
                />
                <ProtectionIntelligenceSection />
            </DashboardSectionGrid>

            <DashboardSectionGrid>
                <OperationalHealthSection />
                <GuidanceSummarySection />
            </DashboardSectionGrid>

            <RecentActivitySection />
        </div>
    );
}   