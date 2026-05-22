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
            {/* Sidebar Overlay */}
            {mobileMenuOpen && (
                <button
                    className="fixed inset-0 z-40 bg-black/60 lg:hidden"
                    onClick={() => setMobileMenuOpen(false)}
                    aria-label="Close menu"
                />
            )}

            {/* Sidebar */}
            <aside
                className={`${mobileMenuOpen ? 'flex' : 'hidden'} lg:flex fixed lg:static inset-y-0 left-0 z-50 w-72 max-w-[85vw] h-dvh lg:h-auto flex-col border-r border-slate-800 bg-slate-950/95 backdrop-blur-xl overflow-y-auto`}
            >
                <div>

                    <div className="mb-10">
                        <div className="flex items-start justify-between gap-4">

                            <div>
                                <div className="text-2xl font-bold tracking-tight">
                                    Aegis One
                                </div>

                                <div className="text-sm text-slate-400 mt-1">
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
                            <button
                                key={item}
                                onClick={() => {
                                    setActiveView(item)
                                    setMobileMenuOpen(false)
                                }}
                                className={`w-full text-left px-4 py-3 rounded-2xl transition ${item === activeView
                                        ? "bg-white text-slate-950 font-semibold"
                                        : "text-slate-300 hover:bg-slate-900"
                                    }`}
                            >
                                {item}
                            </button>
                        ))}
                    </nav>

                    <div className="mt-8 rounded-2xl border border-slate-800 bg-slate-900/70 p-4">
                        <div className="text-sm text-slate-400">
                            System Status
                        </div>

                        <div className="mt-2 text-lg font-semibold text-emerald-400">
                            Protected & Stable
                        </div>

                        <div className="mt-2 text-sm text-slate-500">
                            All monitored systems operating normally.
                        </div>

                        <div className="mt-3 pt-3 border-t border-slate-800">
                            <button
                                onClick={() => {
                                    localStorage.removeItem("aegis-onboarding-complete")
                                    setOnboardingStep(1)
                                    setShowOnboarding(true)
                                }}
                                className="text-xs uppercase tracking-wide text-slate-500 hover:text-slate-300 transition"
                            >
                                Replay Onboarding
                            </button>
                        </div>
                    </div>

                </div>

                <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-3xl p-4">
                    <div className="text-sm uppercase tracking-wide text-emerald-300">
                        Core Safety Layer
                    </div>

                    <div className="text-lg font-semibold text-emerald-100 mt-1">
                        Active
                    </div>

                    <p className="text-sm text-slate-300 mt-2">
                        Aegis protections remain online across active automation.
                    </p>
                </div>

            </aside>
        </>
    )
}