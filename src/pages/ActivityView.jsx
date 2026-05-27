import SectionCard from "../components/SectionCard";

export default function ActivityView() {
    return (
        <div className="max-w-7xl mx-auto space-y-6">

            <SectionCard
                title="Recent Activity"
                subtitle="Simplified operational history designed for calm visibility."
            >
                <div className="space-y-4 text-sm text-slate-300">

                    <div className="border-b border-slate-800 pb-4">
                        <div className="font-medium text-white">
                            NVDA protection adjusted
                        </div>

                        <div className="text-slate-400 mt-1">
                            Stop protection updated after favorable movement.
                        </div>
                    </div>

                    <div className="border-b border-slate-800 pb-4">
                        <div className="font-medium text-white">
                            Portfolio reconciliation completed
                        </div>

                        <div className="text-slate-400 mt-1">
                            Broker and local lifecycle states verified successfully.
                        </div>
                    </div>

                    <div className="border-b border-slate-800 pb-4">
                        <div className="font-medium text-white">
                            Market volatility increased
                        </div>

                        <div className="text-slate-400 mt-1">
                            Aegis adjusted monitoring sensitivity automatically.
                        </div>
                    </div>

                </div>
            </SectionCard>
        </div>
    )
}