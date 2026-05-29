import RuntimeBanner from "../components/RuntimeBanner";
import DashboardSectionGrid from "../components/DashboardSectionGrid";
import DashboardPanel from "../components/DashboardPanel";
import SystemStatusSection from "../features/dashboard/components/SystemStatusSection";
import ProtectionIntelligenceSection from "../features/dashboard/components/ProtectionIntelligenceSection";
import OperationalHealthSection from "../features/dashboard/components/OperationalHealthSection";
import GuidanceSummarySection from "../features/dashboard/components/GuidanceSummarySection";
import ProfessionalTelemetrySection from "../features/dashboard/components/ProfessionalTelemetrySection";
import { useAuthStore } from "../state/authStore";

import { portfolioSummary } from "../data/demo/portfolioSummary";
import { positions } from "../data/demo/positions";
import { activityFeed } from "../data/demo/activityFeed";
import { demoInsights } from "../data/demo/insights";

export default function DashboardView() {
    const user = useAuthStore((state) => state.user);
    const professionalMode = user?.permissions?.professionalMode;

    return (
        <div className="max-w-7xl mx-auto space-y-6">

            <RuntimeBanner
                status="Demo Mode Active"
                detail="This public preview uses simulated data only. No broker connection, live trading, or runtime credentials are active."
            />

            <DashboardSectionGrid>
                <DashboardPanel>
                    <p className="text-sm text-slate-400">Portfolio Value</p>
                    <p className="mt-2 text-2xl font-semibold text-slate-100">
                        {portfolioSummary.portfolioValue}
                    </p>
                    <p className="mt-1 text-sm text-emerald-300">
                        {portfolioSummary.todaysChange} ({portfolioSummary.todaysChangePercent}) today
                    </p>
                </DashboardPanel>

                <DashboardPanel>
                    <p className="text-sm text-slate-400">Protected Positions</p>
                    <p className="mt-2 text-2xl font-semibold text-slate-100">
                        {portfolioSummary.protectedPositions}
                    </p>
                    <p className="mt-1 text-sm text-slate-400">
                        Demo positions currently protected
                    </p>
                </DashboardPanel>

                <DashboardPanel>
                    <p className="text-sm text-slate-400">Automation Status</p>
                    <p className="mt-2 text-2xl font-semibold text-slate-100">
                        {portfolioSummary.automationStatus}
                    </p>
                    <p className="mt-1 text-sm text-slate-400">
                        Simulated protected automation state
                    </p>
                </DashboardPanel>

                <DashboardPanel>
                    <p className="text-sm text-slate-400">Risk Posture</p>
                    <p className="mt-2 text-2xl font-semibold text-slate-100">
                        {portfolioSummary.riskPosture}
                    </p>
                    <p className="mt-1 text-sm text-slate-400">
                        {portfolioSummary.accountProtectionStatus}
                    </p>
                </DashboardPanel>
            </DashboardSectionGrid>

            <DashboardSectionGrid>
                <SystemStatusSection
                    runtimeStatus="Demo Stable"
                    detail="Frontend preview systems are operating in demo-only mode."
                />

                <ProtectionIntelligenceSection />
            </DashboardSectionGrid>

            <DashboardSectionGrid>
                <DashboardPanel>
                    <div className="mb-4">
                        <p className="text-lg font-semibold text-slate-100">
                            Demo Positions
                        </p>
                        <p className="text-sm text-slate-400">
                            Simulated protected holdings
                        </p>
                    </div>
                    <div className="space-y-3">
                        {positions.map((position) => (
                            <div
                                key={position.symbol}
                                className="flex items-center justify-between rounded-xl border border-slate-700/70 bg-slate-900/60 px-4 py-3"
                            >
                                <div>
                                    <p className="font-semibold text-slate-100">{position.symbol}</p>
                                    <p className="text-sm text-slate-400">{position.name}</p>
                                </div>
                                <div className="text-right">
                                    <p className="text-sm text-slate-200">{position.allocation}</p>
                                    <p className="text-xs text-emerald-300">{position.protection}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </DashboardPanel>

                <DashboardPanel>
                    <div className="mb-4">
                        <p className="text-lg font-semibold text-slate-100">Aegis AI Preview</p>
                        <p className="text-sm text-slate-400">Demo-only operational guidance</p>
                    </div>
                    <div className="space-y-3 text-sm text-slate-300">
                        <p><span className="text-slate-100 font-semibold">Market Conditions:</span> {demoInsights.marketConditions}</p>
                        <p><span className="text-slate-100 font-semibold">Risk Posture:</span> {demoInsights.riskPosture}</p>
                        <p><span className="text-slate-100 font-semibold">Protection Status:</span> {demoInsights.protectionStatus}</p>
                        <p><span className="text-slate-100 font-semibold">Recommended Action:</span> {demoInsights.recommendedAction}</p>
                        <p className="text-slate-400">{demoInsights.explanation}</p>
                    </div>
                </DashboardPanel>
            </DashboardSectionGrid>

            <DashboardSectionGrid>
                <OperationalHealthSection />
                <GuidanceSummarySection />
            </DashboardSectionGrid>

            <DashboardPanel>
                <div className="mb-4">
                    <p className="text-lg font-semibold text-slate-100">Recent Activity</p>
                    <p className="text-sm text-slate-400">Simulated protection and automation events</p>
                </div>
                <div className="space-y-3">
                    {activityFeed.map((activity) => (
                        <div
                            key={`${activity.title}-${activity.time}`}
                            className="rounded-xl border border-slate-700/70 bg-slate-900/60 px-4 py-3"
                        >
                            <div className="flex items-center justify-between gap-4">
                                <p className="font-semibold text-slate-100">{activity.title}</p>
                                <p className="text-xs text-slate-500">{activity.time}</p>
                            </div>
                            <p className="mt-1 text-sm text-slate-400">{activity.detail}</p>
                        </div>
                    ))}
                </div>
            </DashboardPanel>

            {professionalMode && <ProfessionalTelemetrySection />}
        </div>
    );
}