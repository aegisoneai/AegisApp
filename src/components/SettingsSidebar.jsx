const settingsSections = [
    "General",
    "Protections",
    "Automation",
    "Notifications",
    "AI Guidance",
    "Workspace",
];

export default function SettingsSidebar() {
    return (
        <div className="space-y-2">

            {settingsSections.map((section) => (
                <button
                    key={section}
                    className="w-full text-left px-4 py-3 rounded-2xl border border-slate-800 bg-slate-900/60 hover:bg-slate-800 transition text-slate-300"
                >
                    {section}
                </button>
            ))}

        </div>
    );
}