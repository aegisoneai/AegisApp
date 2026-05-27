import SectionCard from "../../../components/SectionCard";

export default function RecentActivitySection() {
    return (
        <SectionCard
            title="Recent Activity"
            subtitle="Recent protection reviews, guidance updates, and operational monitoring events."
        >
            <div className="space-y-4">
                <div className="rounded-2xl border border-slate-800 bg-slate-950/60 p-4">
                    <div className="flex items-start justify-between gap-4">
                        <div>
                            <div className="font-medium">Protection review completed</div>
                            <div className="text-sm text-slate-400 mt-1">
                                All monitored positions currently maintain active protection coverage.
                            </div>
                        </div>
                        <div className="text-xs text-slate-500 whitespace-nowrap">2 min ago</div>
                    </div>
                </div>

                <div className="rounded-2xl border border-slate-800 bg-slate-950/60 p-4">
                    <div className="flex items-start justify-between gap-4">
                        <div>
                            <div className="font-medium">Market volatility assessment updated</div>
                            <div className="text-sm text-slate-400 mt-1">
                                Current volatility remains within standard operational ranges.
                            </div>
                        </div>
                        <div className="text-xs text-slate-500 whitespace-nowrap">12 min ago</div>
                    </div>
                </div>

                <div className="rounded-2xl border border-slate-800 bg-slate-950/60 p-4">
                    <div className="flex items-start justify-between gap-4">
                        <div>
                            <div className="font-medium">Aegis Guidance refreshed</div>
                            <div className="text-sm text-slate-400 mt-1">
                                Long-term portfolio positioning remains aligned with current conditions.
                            </div>
                        </div>
                        <div className="text-xs text-slate-500 whitespace-nowrap">24 min ago</div>
                    </div>
                </div>
            </div>
        </SectionCard>
    );
}