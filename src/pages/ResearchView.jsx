import PageHeader from "../components/PageHeader";
import SectionCard from "../components/SectionCard";
import StatusCard from "../components/StatusCard";

export default function ResearchView() {
    return (
        <div className="max-w-7xl mx-auto space-y-6">
            <PageHeader
                title="Research"
                subtitle="Governed research visibility focused on validation, survivability, and explainable strategy analysis."
            />

            <SectionCard
                title="Research Status"
                subtitle="Current research environment posture."
            >
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

                    <StatusCard
                        label="Research Mode"
                        value="Offline Validation"
                        detail="No live execution connected."
                        tone="good"
                    />

                    <StatusCard
                        label="Strategies Active"
                        value="3"
                        detail="Currently under controlled review."
                    />

                    <StatusCard
                        label="Walk-Forward Status"
                        value="In Progress"
                        detail="Validation datasets currently processing."
                    />

                </div>
            </SectionCard>

            <SectionCard
                title="Research Doctrine"
                subtitle="Research systems remain isolated from live runtime environments."
            >
                <div className="space-y-4 text-sm text-slate-300">

                    <p>
                        Aegis Research prioritizes survivability, reproducibility, and explainable validation over aggressive optimization behavior.
                    </p>

                    <p>
                        Experimental strategy behavior should remain governed and separated from production execution systems.
                    </p>

                    <p className="text-slate-400">
                        Future analytics and telemetry integrations will connect through controlled observability services.
                    </p>

                </div>
            </SectionCard>
        </div>
    )
}