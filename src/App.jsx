import { useEffect, useState } from "react"

import {
  portfolioSummary,
  positions,
  activityEvents,
  protectionItems,
  riskSettings,
  researchCards,
  navItems,
} from "./data/mockData"

import DashboardView from "./pages/DashboardView"
import PortfolioView from "./pages/PortfolioView"
import ProtectionsView from "./pages/ProtectionsView"
import ActivityView from "./pages/ActivityView"
import GuidanceView from "./pages/GuidanceView"
import ResearchView from "./pages/ResearchView"
import SettingsView from "./pages/SettingsView"
import Sidebar from "./components/Sidebar";


export default function AegisDashboardConcept() {
  const [activeView, setActiveView] = useState("Dashboard")
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [showOnboarding, setShowOnboarding] = useState(false)
  const [onboardingStep, setOnboardingStep] = useState(1)
  useEffect(() => {
    const completed = localStorage.getItem("aegis-onboarding-complete")

    if (!completed) {
      setShowOnboarding(true)
    }
  }, [])

  const fullPortfolio = [
    ...positions,
    {
      symbol: "MSFT",
      name: "Microsoft Corp.",
      value: "$18,420",
      allocation: "8.9%",
      change: "+0.6%",
      status: "Protected",
      risk: "Low",
    },
    {
      symbol: "AMZN",
      name: "Amazon.com Inc.",
      value: "$16,880",
      allocation: "8.1%",
      change: "+0.4%",
      status: "Protected",
      risk: "Low",
    },
    {
      symbol: "META",
      name: "Meta Platforms",
      value: "$15,240",
      allocation: "7.4%",
      change: "+1.1%",
      status: "Protected",
      risk: "Low",
    },
  ]

  return (
    <>
      {showOnboarding && (
        <div className="fixed inset-0 z-[100] bg-slate-950/90 backdrop-blur-sm flex items-center justify-center p-6">

          <div className="w-full max-w-2xl rounded-3xl border border-slate-700 bg-slate-800 p-8 shadow-2xl">

            <div className="flex items-center justify-between mb-8">
              <div className="text-sm text-slate-300">
                Step {onboardingStep} of 3
              </div>

              <div className="flex gap-2">
                {[1, 2, 3].map((step) => (
                  <div
                    key={step}
                    className={`h-2 w-8 rounded-full transition ${step <= onboardingStep
                      ? "bg-emerald-400"
                      : "bg-slate-600"
                      }`}
                  />
                ))}
              </div>
            </div>

            {/* Step 1 */}
            {onboardingStep === 1 && (
              <div>

                <div className="text-sm uppercase tracking-wide text-slate-400">
                  Welcome to Aegis One
                </div>

                <h1 className="text-3xl font-bold tracking-tight mt-4 text-white">
                  Intelligent trading guidance designed around protection, clarity, and long-term confidence.
                </h1>

                <p className="text-slate-200 mt-6 text-lg leading-relaxed">
                  Aegis helps simplify intelligent investing through calm guidance,
                  visible protections, and explainable automation.
                </p>

                <div className="mt-10 flex justify-end">
                  <button
                    onClick={() => setOnboardingStep(2)}
                    className="bg-white text-slate-950 px-6 py-3 rounded-2xl font-semibold hover:bg-slate-200 transition"
                  >
                    Get Started
                  </button>
                </div>

              </div>
            )}

            {/* Step 2 */}
            {onboardingStep === 2 && (
              <div>

                <div className="text-sm uppercase tracking-wide text-slate-500">
                  Investment Goals
                </div>

                <h1 className="text-3xl font-bold tracking-tight mt-4 text-white">
                  What best describes your current investing style?
                </h1>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">

                  {[
                    "Long-Term Growth",
                    "Passive Investing",
                    "Balanced Growth",
                    "Capital Preservation",
                  ].map((goal) => (
                    <button
                      key={goal}
                      onClick={() => setOnboardingStep(3)}
                      className="rounded-2xl border border-slate-600 bg-slate-900 p-5 text-left hover:border-white hover:bg-slate-800 transition"
                    >
                      <div className="font-medium text-lg text-white">
                        {goal}
                      </div>
                    </button>
                  ))}

                </div>

              </div>
            )}

            {/* Step 3 */}
            {onboardingStep === 3 && (
              <div>

                <div className="text-sm uppercase tracking-wide text-slate-500">
                  Protection Philosophy
                </div>

                <h1 className="text-3xl font-bold tracking-tight mt-4">
                  Aegis prioritizes protection-first automation and disciplined portfolio behavior.
                </h1>

                <p className="text-slate-400 mt-6 text-lg leading-relaxed">
                  The platform is designed to reduce emotional investing behavior,
                  improve operational clarity, and maintain visible protections whenever practical.
                </p>

                <div className="mt-10 flex items-center justify-between">

                  <button
                    onClick={() => setOnboardingStep(2)}
                    className="text-slate-400 hover:text-white transition"
                  >
                    Back
                  </button>

                  <button
                    onClick={() => {
                      localStorage.setItem("aegis-onboarding-complete", "true")
                      setShowOnboarding(false)
                    }}
                    className="bg-white text-slate-950 px-6 py-3 rounded-2xl font-semibold hover:bg-slate-200 transition"
                  >
                    Enter Workspace
                  </button>

                </div>

              </div>
            )}

          </div>
        </div>
      )}

      <div className="min-h-screen bg-slate-950 text-white flex">

        <Sidebar
          navItems={navItems}
          activeView={activeView}
          setActiveView={setActiveView}
          mobileMenuOpen={mobileMenuOpen}
          setMobileMenuOpen={setMobileMenuOpen}
          setOnboardingStep={setOnboardingStep}
          setShowOnboarding={setShowOnboarding}
        />

        {/* Main Content */}
        <main className="flex-1 p-5 md:p-8 overflow-y-auto">

          <div className="lg:hidden mb-6">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="bg-slate-900 border border-slate-700 px-4 py-3 rounded-2xl text-sm font-medium hover:bg-slate-800 transition"
            >
              ☰ Menu
            </button>
          </div>

          {activeView === "Research" ? (
            <div className="max-w-7xl mx-auto space-y-6">
              <div className="flex flex-col xl:flex-row xl:items-center xl:justify-between gap-4">
                <div>
                  <h1 className="text-4xl font-bold tracking-tight">Research</h1>
                  <p className="text-slate-400 mt-2 text-lg">
                    A governed validation workspace for strategy testing, research review, and future confidence-building reports.
                  </p>
                </div>

                <button
                  onClick={() => setActiveView("Dashboard")}
                  className="bg-slate-800 px-5 py-3 rounded-2xl font-medium hover:bg-slate-700 transition"
                >
                  Back to Dashboard
                </button>
              </div>

              <div className="bg-blue-500/10 border border-blue-500/30 rounded-3xl p-6">
                <div className="text-blue-200 font-semibold text-lg">Research is separated from live automation</div>
                <p className="text-slate-300 mt-2 leading-relaxed">
                  Aegis Research should help users understand strategy quality through validation, simulation, and reporting without allowing untested behavior to affect live execution.
                </p>
              </div>

              <div className="grid grid-cols-1 xl:grid-cols-4 gap-4">
                {researchCards.map((card) => (
                  <div key={card.title} className="bg-slate-900 border border-slate-800 rounded-3xl p-5 shadow-xl">
                    <div className="text-slate-400 text-sm">{card.title}</div>
                    <div className="text-3xl font-bold mt-2">{card.value}</div>
                    <p className="text-slate-300 mt-3 leading-relaxed">{card.description}</p>
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
                <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 shadow-xl">
                  <h2 className="text-2xl font-semibold">Strategy Validation Pipeline</h2>
                  <p className="text-slate-400 mt-2">
                    Aegis should make strategy confidence understandable without implying unrealistic certainty.
                  </p>

                  <div className="space-y-4 mt-6">
                    <div className="bg-slate-950 border border-slate-800 rounded-2xl p-5">
                      <div className="text-slate-400 text-sm">Step 1</div>
                      <div className="font-semibold text-lg mt-1">Historical Backtest</div>
                      <p className="text-slate-300 mt-1">Test behavior across prior market conditions.</p>
                    </div>

                    <div className="bg-slate-950 border border-slate-800 rounded-2xl p-5">
                      <div className="text-slate-400 text-sm">Step 2</div>
                      <div className="font-semibold text-lg mt-1">Walk-Forward Validation</div>
                      <p className="text-slate-300 mt-1">Check whether performance survives outside the training period.</p>
                    </div>

                    <div className="bg-slate-950 border border-slate-800 rounded-2xl p-5">
                      <div className="text-slate-400 text-sm">Step 3</div>
                      <div className="font-semibold text-lg mt-1">Risk Governance Review</div>
                      <p className="text-slate-300 mt-1">Confirm strategy behavior respects Aegis risk and protection standards.</p>
                    </div>

                    <div className="bg-slate-950 border border-slate-800 rounded-2xl p-5">
                      <div className="text-slate-400 text-sm">Step 4</div>
                      <div className="font-semibold text-lg mt-1">Paper Validation</div>
                      <p className="text-slate-300 mt-1">Observe behavior safely before live consideration.</p>
                    </div>
                  </div>
                </div>

                <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 shadow-xl">
                  <h2 className="text-2xl font-semibold">Research Summary</h2>
                  <p className="text-slate-400 mt-2">
                    Retail users should see useful research summaries without being forced into professional analytics overload.
                  </p>

                  <div className="space-y-4 mt-6">
                    <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-2xl p-5">
                      <div className="text-emerald-300 font-medium">Current Research Position</div>
                      <div className="text-2xl font-bold mt-2">Validation First</div>
                      <p className="text-slate-300 mt-2">
                        Aegis prioritizes evidence, survivability, and risk discipline before expanding strategy automation.
                      </p>
                    </div>

                    <div className="bg-slate-950 border border-slate-800 rounded-2xl p-5">
                      <div className="text-slate-400 text-sm">What users should understand</div>
                      <p className="text-slate-300 mt-2">
                        Strong backtest results are not enough. Strategies must survive changing market conditions and realistic execution assumptions.
                      </p>
                    </div>

                    <div className="bg-slate-950 border border-slate-800 rounded-2xl p-5">
                      <div className="text-slate-400 text-sm">What Aegis avoids</div>
                      <p className="text-slate-300 mt-2">
                        Aegis avoids hype-driven prediction claims, over-optimized strategies, and unvalidated live behavior.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 shadow-xl">
                <div className="flex flex-col xl:flex-row xl:items-center xl:justify-between gap-5">
                  <div>
                    <h2 className="text-2xl font-semibold">Future Research Reports</h2>
                    <p className="text-slate-400 mt-2 max-w-4xl leading-relaxed">
                      This screen can later generate retail-friendly and professional-grade validation reports showing performance, drawdown, slippage sensitivity, regime behavior, and promotion readiness.
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-3">
                    <button className="bg-white text-slate-950 px-5 py-3 rounded-2xl font-medium hover:opacity-90 transition">
                      View Sample Report
                    </button>
                    <button className="bg-slate-800 px-5 py-3 rounded-2xl font-medium hover:bg-slate-700 transition">
                      Compare Strategies
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ) : activeView === "Settings" ? (
            <SettingsView
              riskSettings={riskSettings}
              setActiveView={setActiveView}
            />
          ) : activeView === "Activity" ? (
            <ActivityView
              activityEvents={activityEvents}
              setActiveView={setActiveView}
            />
          ) : activeView === "Aegis Guidance" ? (
            <GuidanceView
              setActiveView={setActiveView}
            />
          ) : activeView === "Protections" ? (
            <ProtectionsView
              protectionItems={protectionItems}
              setActiveView={setActiveView}
            />
          ) : activeView === "Portfolio" ? (
            <PortfolioView
              fullPortfolio={fullPortfolio}
              setActiveView={setActiveView}
            />
          ) : activeView === "Research" ? (
            <ResearchView
              researchCards={researchCards}
              setActiveView={setActiveView}
            />
          ) : (
            <DashboardView />
          )}
        </main>
      </div >
    </>
  )
}
