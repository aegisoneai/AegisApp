import { useLocation } from "react-router-dom";
import { theme } from "../theme";

const routeMeta = {
    "/": {
        title: "Dashboard",
        subtitle: "A calm overview of portfolio health, protections, automation, and guidance.",
    },
    "/portfolio": {
        title: "Portfolio",
        subtitle: "Simplified portfolio visibility with protection-first context.",
    },
    "/protections": {
        title: "Protections",
        subtitle: "Visible safeguards, risk posture, and protection coverage.",
    },
    "/activity": {
        title: "Activity",
        subtitle: "Recent operational events explained in calm, useful language.",
    },
    "/guidance": {
        title: "Aegis Guidance",
        subtitle: "Explainable market and platform guidance without hype.",
    },
    "/research": {
        title: "Research",
        subtitle: "Governed validation workspace separated from live automation.",
    },
    "/settings": {
        title: "Settings",
        subtitle: "Controlled preferences and governance-aware configuration.",
    },
};

export default function AppHeader() {
    const location = useLocation();
    const meta = routeMeta[location.pathname] || routeMeta["/"];

    return (
        <header className="mb-6">

            <div className="flex flex-col xl:flex-row xl:items-start xl:justify-between gap-4">

                <div>
                    <div className={theme.typography.pageTitle}>
                        {meta.title}
                    </div>

                    <p className={`${theme.typography.small} mt-2 max-w-3xl`}>
                        {meta.subtitle}
                    </p>
                </div>

                <div className="flex items-center gap-3">

                    <div className="px-4 py-2 rounded-2xl border border-emerald-500/30 bg-emerald-500/10 text-emerald-300 text-sm font-medium">
                        Protected Runtime
                    </div>

                    <button className="px-4 py-2 rounded-2xl border border-slate-700 bg-slate-900 text-slate-300 text-sm hover:bg-slate-800 transition">
                        Notifications
                    </button>

                </div>

            </div>

        </header>
    );
}