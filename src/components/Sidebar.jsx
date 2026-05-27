import { theme } from "../theme";
import DashboardPanel from "./DashboardPanel";
import NavigationButton from "./NavigationButton";

export default function Sidebar({
    navItems,
    activeView,
    setActiveView,
    mobileMenuOpen,
    setMobileMenuOpen,
    setOnboardingStep,
    setShowOnboarding,
}) {
    return (
        <>
            {mobileMenuOpen && (
                <button
                    className="fixed inset-0 z-40 bg-black/60 lg:hidden"
                    onClick={() => setMobileMenuOpen(false)}
                    aria-label="Close menu"
                />
            )}

            <aside
                className={`${mobileMenuOpen ? "flex" : "hidden"} lg:flex fixed lg:static inset-y-0 left-0 z-50 w-72 max-w-[85vw] h-dvh lg:h-auto flex-col border-r border-slate-800 bg-slate-950/95 backdrop-blur-xl overflow-y-auto`}
            >
                <div>
                    <div className="mb-10">
                        <div className="flex items-start justify-between gap-4">
                            <div>
                                <div className={theme.typography.pageTitle}>
                                    Aegis One
                                </div>

                                <div className={`${theme.typography.small} mt-1`}>
                                    Protected automation platform
                                </div>
                            </div>

                            <button
                                onClick={() => setMobileMenuOpen(false)}
                                className="lg:hidden rounded-xl border border-slate-700 px-3 py-2 text-sm text-slate-300"
                            >
                                ✕
                            </button>
                        </div>
                    </div>

                    <nav className="space-y-2">
                        {navItems.map((item) => (
                            <NavigationButton
                                key={item}
                                active={item === activeView}
                                onClick={() => {
                                    setActiveView(item);
                                    setMobileMenuOpen(false);
                                }}
                            >
                                {item}
                            </NavigationButton>
                        ))}
                    </nav>

                    <DashboardPanel className="mt-8">
                        <div className={theme.typography.small}>
                            System Status
                        </div>

                        <div className="mt-2 text-lg font-semibold text-emerald-400">
                            Protected & Stable
                        </div>

                        <div className={`${theme.colors.subtle} text-sm mt-2`}>
                            All monitored systems operating normally.
                        </div>

                        <div className="mt-3 pt-3 border-t border-slate-800">
                            <button
                                onClick={() => {
                                    localStorage.removeItem("aegis-onboarding-complete");
                                    setOnboardingStep(1);
                                    setShowOnboarding(true);
                                }}
                                className={`${theme.colors.subtle} text-xs uppercase tracking-wide hover:text-slate-300 transition`}
                            >
                                Replay Onboarding
                            </button>
                        </div>
                    </DashboardPanel>
                </div>

                <DashboardPanel className="bg-emerald-500/10 border-emerald-500/30 mt-6">
                    <div className="text-sm uppercase tracking-wide text-emerald-300">
                        Core Safety Layer
                    </div>

                    <div className="text-lg font-semibold text-emerald-100 mt-1">
                        Active
                    </div>

                    <p className="text-sm text-slate-300 mt-2">
                        Aegis protections remain online across active automation.
                    </p>
                </DashboardPanel>
            </aside>
        </>
    );
}