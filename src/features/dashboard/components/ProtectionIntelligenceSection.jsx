import SectionCard from "../../../components/SectionCard";

export default function ProtectionIntelligenceSection() {
    return (
        <SectionCard
            title="Protection Intelligence"
            subtitle="Protection systems and portfolio safeguards are operating normally."
        >
            <div className="space-y-4">

                <div className="rounded-2xl border border-slate-800 bg-slate-950/60 p-4">
                    <div className="flex items-center justify-between">
                        <div>
                            <div className="font-medium">
                                Portfolio Protection Coverage
                            </div>

                            <div className="text-sm text-slate-400 mt-1">
                                All monitored positions currently maintain active protection coverage.
                            </div>
                        </div>

                        <div className="text-emerald-400 text-sm font-medium">
                            Active
                        </div>
                    </div>
                </div>

                <div className="rounded-2xl border border-slate-800 bg-slate-950/60 p-4">
                    <div className="flex items-center justify-between">
                        <div>
                            <div className="font-medium">
                                Volatility Monitoring
                            </div>

                            <div className="text-sm text-slate-400 mt-1">
                                Current volatility remains within governed operational ranges.
                            </div>
                        </div>

                        <div className="text-sky-400 text-sm font-medium">
                            Monitoring
                        </div>
                    </div>
                </div>

                <div className="rounded-2xl border border-slate-800 bg-slate-950/60 p-4">
                    <div className="flex items-center justify-between">
                        <div>
                            <div className="font-medium">
                                Lifecycle Governance
                            </div>

                            <div className="text-sm text-slate-400 mt-1">
                                Trade lifecycle controls and governed protections are functioning normally.
                            </div>
                        </div>

                        <div className="text-emerald-400 text-sm font-medium">
                            Stable
                        </div>
                    </div>
                </div>

            </div>
        </SectionCard>
    );
}