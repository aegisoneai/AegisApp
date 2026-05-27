import DashboardPanel from "./DashboardPanel";

export default function SettingsToggleRow({
    title,
    description,
    enabled = false,
}) {
    return (
        <DashboardPanel>

            <div className="flex items-center justify-between gap-4">

                <div>
                    <div className="font-medium text-white">
                        {title}
                    </div>

                    <div className="text-sm text-slate-400 mt-1">
                        {description}
                    </div>
                </div>

                <div
                    className={`w-14 h-8 rounded-full flex items-center px-1 transition ${enabled
                            ? "bg-emerald-500 justify-end"
                            : "bg-slate-700 justify-start"
                        }`}
                >
                    <div className="w-6 h-6 rounded-full bg-white" />
                </div>

            </div>

        </DashboardPanel>
    );
}