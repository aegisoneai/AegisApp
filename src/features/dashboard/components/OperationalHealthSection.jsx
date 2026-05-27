import SectionCard from "../../../components/SectionCard";
import DashboardPanel from "../../../components/DashboardPanel";
import { theme } from "../../../theme";

export default function OperationalHealthSection() {
    return (
        <SectionCard
            title="Operational Health"
            subtitle="Core systems, protections, and automation services are operating normally."
        >
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">

                <DashboardPanel>
                    <div className={theme.typography.small}>
                        Broker Connectivity
                    </div>

                    <div className="text-xl font-semibold mt-2 text-emerald-400">
                        Connected
                    </div>

                    <div className={`${theme.colors.subtle} text-xs mt-2`}>
                        Stable communication
                    </div>
                </DashboardPanel>

                <DashboardPanel>
                    <div className={theme.typography.small}>
                        Protection Systems
                    </div>

                    <div className="text-xl font-semibold mt-2 text-emerald-400">
                        Active
                    </div>

                    <div className={`${theme.colors.subtle} text-xs mt-2`}>
                        Monitoring lifecycle governance
                    </div>
                </DashboardPanel>

                <DashboardPanel>
                    <div className={theme.typography.small}>
                        Automation Status
                    </div>

                    <div className="text-xl font-semibold mt-2 text-sky-400">
                        Governed
                    </div>

                    <div className={`${theme.colors.subtle} text-xs mt-2`}>
                        Controlled operational behavior
                    </div>
                </DashboardPanel>

                <DashboardPanel>
                    <div className={theme.typography.small}>
                        AI Guidance
                    </div>

                    <div className="text-xl font-semibold mt-2 text-emerald-400">
                        Available
                    </div>

                    <div className={`${theme.colors.subtle} text-xs mt-2`}>
                        Guidance systems operating normally
                    </div>
                </DashboardPanel>

            </div>
        </SectionCard>
    );
}