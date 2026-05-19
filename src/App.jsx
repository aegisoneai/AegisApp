import { useState } from "react"

export default function AegisDashboardConcept() {
  const [activeView, setActiveView] = useState("Dashboard")
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const portfolioSummary = {
    totalPositions: 20,
    displayedPositions: 3,
    protectedPositions: 20,
    attentionNeeded: 0,
  }

  const positions = [
    {
      symbol: "NVDA",
      name: "NVIDIA Corp.",
      value: "$51,640",
      allocation: "40.2%",
      change: "+2.7%",
      status: "Protected",
      risk: "Moderate",
      priority: "Largest exposure",
      note: "Momentum remains strong, but Aegis is watching for elevated pullback risk.",
    },
    {
      symbol: "AAPL",
      name: "Apple Inc.",
      value: "$42,180",
      allocation: "32.8%",
      change: "+1.2%",
      status: "Protected",
      risk: "Low",
      priority: "Core holding",
      note: "Aegis is maintaining the current position while volatility remains controlled.",
    },
    {
      symbol: "TSLA",
      name: "Tesla Inc.",
      value: "$34,622",
      allocation: "27.0%",
      change: "-0.8%",
      status: "Protected",
      risk: "Moderate",
      priority: "Most movement today",
      note: "Aegis is keeping protection active while price action remains uneven.",
    },
  ]

  const fullPortfolio = [
    ...positions,
    { symbol: "MSFT", name: "Microsoft Corp.", value: "$18,420", allocation: "8.9%", change: "+0.6%", status: "Protected", risk: "Low", priority: "Stable holding", note: "Aegis is maintaining normal monitoring." },
    { symbol: "AMZN", name: "Amazon.com Inc.", value: "$16,880", allocation: "8.1%", change: "+0.4%", status: "Protected", risk: "Low", priority: "Stable holding", note: "No unusual activity detected." },
    { symbol: "META", name: "Meta Platforms", value: "$15,240", allocation: "7.4%", change: "+1.1%", status: "Protected", risk: "Low", priority: "Positive movement", note: "Aegis is monitoring continued strength." },
    { symbol: "AMD", name: "Advanced Micro Devices", value: "$12,110", allocation: "5.9%", change: "-1.4%", status: "Protected", risk: "Moderate", priority: "Movement watch", note: "Protection remains active during weakness." },
    { symbol: "GOOGL", name: "Alphabet Inc.", value: "$11,740", allocation: "5.7%", change: "+0.3%", status: "Protected", risk: "Low", priority: "Stable holding", note: "Normal monitoring active." },
    { symbol: "SPY", name: "S&P 500 ETF", value: "$10,950", allocation: "5.3%", change: "+0.2%", status: "Protected", risk: "Low", priority: "Broad market exposure", note: "Used as broad market exposure." },
    { symbol: "QQQ", name: "Nasdaq 100 ETF", value: "$9,820", allocation: "4.8%", change: "+0.9%", status: "Protected", risk: "Moderate", priority: "Tech exposure", note: "Aegis is monitoring tech concentration." },
  ]

  const protectionItems = [
    {
      title: "Position Protection Coverage",
      status: "Healthy",
      detail: "All active positions currently have protection coverage attached.",
      impact: "Reduces risk of unmanaged downside exposure.",
    },
    {
      title: "Reconciliation Integrity",
      status: "Healthy",
      detail: "Broker position status and Aegis internal state are aligned.",
      impact: "Helps prevent hidden or orphaned exposure.",
    },
    {
      title: "Emergency Halt Layer",
      status: "Online",
      detail: "Fail-safe monitoring remains available if abnormal execution behavior is detected.",
      impact: "Preserves controlled operation during unexpected conditions.",
    },
    {
      title: "Daily Risk Limits",
      status: "Within Limits",
      detail: "Trading activity remains inside configured daily risk boundaries.",
      impact: "Prevents overactivity during unstable market behavior.",
    },
  ]

  const activityEvents = [
    {
      time: "09:32 AM",
      type: "Protection",
      title: "Protection coverage verified",
      detail: "Aegis confirmed all active positions have protection coverage attached.",
      explanation: "This helps reduce unmanaged downside exposure before new automation decisions are considered.",
      status: "Completed",
    },
    {
      time: "09:47 AM",
      type: "Decision",
      title: "Trade opportunity avoided",
      detail: "A potential entry did not meet confirmation requirements during elevated volatility.",
      explanation: "Aegis avoided increasing exposure when conditions did not support a disciplined entry.",
      status: "Avoided",
    },
    {
      time: "10:14 AM",
      type: "Monitoring",
      title: "Volatility monitoring increased",
      detail: "Technology-related holdings showed wider-than-normal price movement.",
      explanation: "Aegis increased monitoring sensitivity while keeping portfolio risk inside configured limits.",
      status: "Active",
    },
    {
      time: "11:06 AM",
      type: "Reconciliation",
      title: "Broker state aligned",
      detail: "Broker position data and Aegis internal records remain consistent.",
      explanation: "This reduces risk of hidden exposure, duplicate action, or stale platform state.",
      status: "Healthy",
    },
    {
      time: "12:18 PM",
      type: "Guidance",
      title: "User action not required",
      detail: "Aegis determined that current conditions do not require manual user intervention.",
      explanation: "The platform remains in normal monitoring mode with active protections in place.",
      status: "No Action Needed",
    },
  ]

  const riskSettings = [
    {
      label: "Automation Style",
      value: "Balanced",
      description: "Aegis balances opportunity detection with protection-first execution behavior.",
    },
    {
      label: "Risk Profile",
      value: "Moderate",
      description: "Position exposure is allowed within controlled limits while avoiding aggressive expansion.",
    },
    {
      label: "Protection Priority",
      value: "High",
      description: "Protection verification remains prioritized before expanding automation activity.",
    },
    {
      label: "User Confirmation Level",
      value: "Guided",
      description: "Meaningful changes require plain-language explanation before user confirmation.",
    },
  ]

  const researchCards = [
    {
      title: "Current Strategy Validation",
      value: "In Review",
      description: "Aegis is tracking strategy behavior before future promotion decisions are considered.",
    },
    {
      title: "Backtesting Readiness",
      value: "Planned",
      description: "Historical validation will remain isolated from live execution systems.",
    },
    {
      title: "Walk-Forward Testing",
      value: "Required",
      description: "Strategies must show survivability beyond optimized historical results.",
    },
    {
      title: "Live Promotion Status",
      value: "Restricted",
      description: "Research results do not automatically qualify any strategy for live automation.",
    },
  ]

  const navItems = [
    "Dashboard",
    "Portfolio",
    "Protections",
    "Aegis Guidance",
    "Activity",
    "Research",
    "Settings",
  ]

  return (
    <div className="min-h-screen bg-slate-950 text-white flex">
      {/* Sidebar */}
      {mobileMenuOpen && (
        <button
          className="fixed inset-0 bg-black/60 z-40 lg:hidden"
          onClick={() => setMobileMenuOpen(false)}
          aria-label="Close menu"
        />
      )}
      <aside className={`${mobileMenuOpen ? 'flex' : 'hidden'} lg:flex w-72 border-r border-slate-800 bg-slate-950/95 p-6 flex-col justify-between fixed lg:relative z-50 h-full`}>
        <div>
          <div className="mb-10">
            <div className="text-2xl font-bold tracking-tight">Aegis One</div>
            <div className="text-sm text-slate-400 mt-1">
              Protected automation platform
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
                className={`w-full text-left px-4 py-3 rounded-2xl transition ${
                  item === activeView
                    ? "bg-white text-slate-950 font-semibold"
                    : "text-slate-300 hover:bg-slate-900"
                }`}
              >
                {item}
              </button>
            ))}
          </nav>
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
          <div className="max-w-7xl mx-auto space-y-6">
            <div className="flex flex-col xl:flex-row xl:items-center xl:justify-between gap-4">
              <div>
                <h1 className="text-4xl font-bold tracking-tight">Settings</h1>
                <p className="text-slate-400 mt-2 text-lg">
                  Calm configuration controls for automation behavior, risk preferences, and visibility level.
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
              <div className="text-blue-200 font-semibold text-lg">Settings are intentionally guided</div>
              <p className="text-slate-300 mt-2 leading-relaxed">
                Aegis avoids exposing dangerous switches without explanation. Meaningful automation or risk changes should show plain-language impact before confirmation.
              </p>
            </div>

            <div className="grid grid-cols-1 xl:grid-cols-4 gap-4">
              {riskSettings.map((setting) => (
                <div key={setting.label} className="bg-slate-900 border border-slate-800 rounded-3xl p-5 shadow-xl">
                  <div className="text-slate-400 text-sm">{setting.label}</div>
                  <div className="text-3xl font-bold mt-2">{setting.value}</div>
                  <p className="text-slate-300 mt-3 leading-relaxed">{setting.description}</p>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
              <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 shadow-xl">
                <h2 className="text-2xl font-semibold">Risk Profile</h2>
                <p className="text-slate-400 mt-2">
                  Choose the behavior style that best matches how much automation exposure you want Aegis to consider.
                </p>

                <div className="space-y-4 mt-6">
                  <div className="bg-slate-950 border border-slate-800 rounded-2xl p-5">
                    <div className="flex items-center justify-between gap-4">
                      <div>
                        <div className="font-semibold text-lg">Conservative</div>
                        <p className="text-slate-400 mt-1">Prioritizes fewer entries, lower exposure, and stronger confirmation.</p>
                      </div>
                      <button className="bg-slate-800 px-4 py-2 rounded-xl font-medium">Select</button>
                    </div>
                  </div>

                  <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-2xl p-5">
                    <div className="flex items-center justify-between gap-4">
                      <div>
                        <div className="font-semibold text-lg text-emerald-100">Moderate</div>
                        <p className="text-slate-300 mt-1">Balances opportunity detection with controlled protection-first automation.</p>
                      </div>
                      <div className="bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 px-3 py-1 rounded-full text-sm">
                        Current
                      </div>
                    </div>
                  </div>

                  <div className="bg-slate-950 border border-slate-800 rounded-2xl p-5 opacity-80">
                    <div className="flex items-center justify-between gap-4">
                      <div>
                        <div className="font-semibold text-lg">Advanced</div>
                        <p className="text-slate-400 mt-1">Unlocks deeper controls with stronger confirmation and governance review.</p>
                      </div>
                      <button className="bg-slate-800 px-4 py-2 rounded-xl font-medium">Review</button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 shadow-xl">
                <h2 className="text-2xl font-semibold">Visibility Level</h2>
                <p className="text-slate-400 mt-2">
                  Aegis can show more detail as users become more comfortable without overwhelming the default experience.
                </p>

                <div className="space-y-4 mt-6">
                  <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-2xl p-5">
                    <div className="font-semibold text-lg text-emerald-100">Retail View</div>
                    <p className="text-slate-300 mt-1">Simple summaries, protection status, and plain-English guidance.</p>
                  </div>

                  <div className="bg-slate-950 border border-slate-800 rounded-2xl p-5">
                    <div className="font-semibold text-lg">Advanced View</div>
                    <p className="text-slate-400 mt-1">Adds more analytics, strategy context, and deeper position interpretation.</p>
                  </div>

                  <div className="bg-slate-950 border border-slate-800 rounded-2xl p-5">
                    <div className="font-semibold text-lg">Observability View</div>
                    <p className="text-slate-400 mt-1">Shows diagnostics, reconciliation detail, telemetry, and audit-level event data.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 shadow-xl">
              <h2 className="text-2xl font-semibold">Governed Change Example</h2>
              <p className="text-slate-300 mt-3 text-lg leading-relaxed">
                If a user attempts a meaningful risk increase, Aegis should explain what will change, what protections remain active,
                what risks may increase, and require intentional confirmation before applying the setting.
              </p>

              <div className="grid grid-cols-1 xl:grid-cols-3 gap-4 mt-6">
                <div className="bg-slate-950 border border-slate-800 rounded-2xl p-5">
                  <div className="text-slate-400 text-sm">Step 1</div>
                  <div className="font-semibold mt-1">Explain the impact</div>
                </div>
                <div className="bg-slate-950 border border-slate-800 rounded-2xl p-5">
                  <div className="text-slate-400 text-sm">Step 2</div>
                  <div className="font-semibold mt-1">Require confirmation</div>
                </div>
                <div className="bg-slate-950 border border-slate-800 rounded-2xl p-5">
                  <div className="text-slate-400 text-sm">Step 3</div>
                  <div className="font-semibold mt-1">Log the change</div>
                </div>
              </div>
            </div>
          </div>
        ) : activeView === "Activity" ? (
          <div className="max-w-7xl mx-auto space-y-6">
            <div className="flex flex-col xl:flex-row xl:items-center xl:justify-between gap-4">
              <div>
                <h1 className="text-4xl font-bold tracking-tight">Activity</h1>
                <p className="text-slate-400 mt-2 text-lg">
                  A plain-language timeline of what Aegis monitored, protected, avoided, and recommended.
                </p>
              </div>

              <button
                onClick={() => setActiveView("Dashboard")}
                className="bg-slate-800 px-5 py-3 rounded-2xl font-medium hover:bg-slate-700 transition"
              >
                Back to Dashboard
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="bg-slate-900 border border-slate-800 rounded-3xl p-5">
                <div className="text-slate-400 text-sm">Events Today</div>
                <div className="text-3xl font-bold mt-2">5</div>
              </div>
              <div className="bg-slate-900 border border-slate-800 rounded-3xl p-5">
                <div className="text-slate-400 text-sm">Protections Verified</div>
                <div className="text-3xl font-bold mt-2 text-emerald-300">20</div>
              </div>
              <div className="bg-slate-900 border border-slate-800 rounded-3xl p-5">
                <div className="text-slate-400 text-sm">Trades Avoided</div>
                <div className="text-3xl font-bold mt-2 text-blue-300">1</div>
              </div>
              <div className="bg-slate-900 border border-slate-800 rounded-3xl p-5">
                <div className="text-slate-400 text-sm">User Actions Needed</div>
                <div className="text-3xl font-bold mt-2">0</div>
              </div>
            </div>

            <div className="bg-blue-500/10 border border-blue-500/30 rounded-3xl p-6">
              <div className="text-blue-200 font-semibold text-lg">Why this timeline matters</div>
              <p className="text-slate-300 mt-2 leading-relaxed">
                Aegis records meaningful automation, protection, and monitoring events so users can understand what happened without reading technical logs.
                This creates transparency without overwhelming the retail experience.
              </p>
            </div>

            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 shadow-xl">
              <div className="flex flex-col xl:flex-row xl:items-center xl:justify-between gap-4 mb-6">
                <div>
                  <h2 className="text-2xl font-semibold">Today’s Operational Timeline</h2>
                  <p className="text-slate-400 mt-1">
                    Events are summarized in normal language first, with deeper details available when needed.
                  </p>
                </div>

                <div className="flex flex-wrap gap-3">
                  <button className="bg-white text-slate-950 px-4 py-2 rounded-xl font-medium">All Events</button>
                  <button className="bg-slate-800 px-4 py-2 rounded-xl font-medium">Protections</button>
                  <button className="bg-slate-800 px-4 py-2 rounded-xl font-medium">Decisions</button>
                  <button className="bg-slate-800 px-4 py-2 rounded-xl font-medium">Guidance</button>
                </div>
              </div>

              <div className="space-y-4">
                {activityEvents.map((event) => (
                  <div key={`${event.time}-${event.title}`} className="bg-slate-950 border border-slate-800 rounded-3xl p-5">
                    <div className="flex flex-col xl:flex-row xl:items-start xl:justify-between gap-4">
                      <div className="flex gap-4">
                        <div className="min-w-24 text-slate-400 font-medium">{event.time}</div>
                        <div>
                          <div className="flex flex-wrap items-center gap-2">
                            <span className="bg-slate-900 border border-slate-800 text-slate-300 px-3 py-1 rounded-full text-sm">
                              {event.type}
                            </span>
                            <span className="bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 px-3 py-1 rounded-full text-sm">
                              {event.status}
                            </span>
                          </div>

                          <h3 className="text-xl font-semibold mt-3">{event.title}</h3>
                          <p className="text-slate-300 mt-2 leading-relaxed">{event.detail}</p>

                          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-4 mt-4">
                            <div className="text-slate-400 text-sm">Plain-English explanation</div>
                            <div className="text-slate-200 mt-1">{event.explanation}</div>
                          </div>
                        </div>
                      </div>

                      <button className="bg-slate-800 px-4 py-2 rounded-xl font-medium hover:bg-slate-700 transition whitespace-nowrap">
                        View Details
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
              <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6">
                <h2 className="text-2xl font-semibold">User-Friendly Summary</h2>
                <p className="text-slate-300 mt-3 leading-relaxed text-lg">
                  Aegis verified protections, avoided one low-confidence trade opportunity,
                  increased monitoring during volatility, and did not require user action.
                </p>
              </div>

              <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6">
                <h2 className="text-2xl font-semibold">Audit Direction</h2>
                <p className="text-slate-300 mt-3 leading-relaxed text-lg">
                  In the future, this same timeline can connect to journaling, broker events,
                  protection history, AI reasoning records, and advanced observability layers.
                </p>
              </div>
            </div>
          </div>
        ) : activeView === "Aegis Guidance" ? (
          <div className="max-w-7xl mx-auto space-y-6">
            <div className="flex flex-col xl:flex-row xl:items-center xl:justify-between gap-4">
              <div>
                <h1 className="text-4xl font-bold tracking-tight">Aegis Guidance</h1>
                <p className="text-slate-400 mt-2 text-lg">
                  Explainable operational intelligence designed to help users understand market conditions, protections, and portfolio behavior.
                </p>
              </div>

              <button
                onClick={() => setActiveView("Dashboard")}
                className="bg-slate-800 px-5 py-3 rounded-2xl font-medium hover:bg-slate-700 transition"
              >
                Back to Dashboard
              </button>
            </div>

            <div className="bg-blue-500/10 border border-blue-500/30 rounded-3xl p-7">
              <div className="text-blue-300 text-sm uppercase tracking-wide">
                Current Market Interpretation
              </div>
              <div className="text-4xl font-bold text-white mt-2">
                Elevated volatility with controlled exposure
              </div>
              <p className="text-slate-200 text-xl leading-relaxed mt-4 max-w-5xl">
                Market conditions remain active today, particularly within technology-related sectors.
                Aegis is maintaining conservative exposure behavior while continuing to monitor for stronger confirmation before increasing automation activity.
              </p>
            </div>

            <div className="grid grid-cols-1 xl:grid-cols-3 gap-5">
              <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 shadow-xl">
                <div className="text-slate-400 text-sm">Market Condition</div>
                <div className="text-3xl font-bold mt-2">Elevated</div>
                <p className="text-slate-300 mt-3 leading-relaxed">
                  Price movement and volatility are above normal levels today.
                </p>
              </div>

              <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 shadow-xl">
                <div className="text-slate-400 text-sm">Aegis Response</div>
                <div className="text-3xl font-bold mt-2">Conservative</div>
                <p className="text-slate-300 mt-3 leading-relaxed">
                  Position sizing and automation activity remain controlled while conditions stabilize.
                </p>
              </div>

              <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 shadow-xl">
                <div className="text-slate-400 text-sm">User Action</div>
                <div className="text-3xl font-bold mt-2">None Needed</div>
                <p className="text-slate-300 mt-3 leading-relaxed">
                  No immediate changes are currently recommended.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
              <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 shadow-xl">
                <h2 className="text-2xl font-semibold">Why Aegis is behaving this way</h2>

                <div className="space-y-5 mt-5">
                  <div className="bg-slate-950 border border-slate-800 rounded-2xl p-5">
                    <div className="text-blue-300 font-medium">Technology volatility increased</div>
                    <p className="text-slate-300 mt-2 leading-relaxed">
                      Several major technology holdings experienced wider-than-normal movement today.
                      Aegis responds by avoiding unnecessary expansion of exposure during unstable conditions.
                    </p>
                  </div>

                  <div className="bg-slate-950 border border-slate-800 rounded-2xl p-5">
                    <div className="text-blue-300 font-medium">Protection systems remain healthy</div>
                    <p className="text-slate-300 mt-2 leading-relaxed">
                      Existing positions continue operating within configured protection parameters,
                      reducing the need for defensive intervention.
                    </p>
                  </div>

                  <div className="bg-slate-950 border border-slate-800 rounded-2xl p-5">
                    <div className="text-blue-300 font-medium">No abnormal execution behavior detected</div>
                    <p className="text-slate-300 mt-2 leading-relaxed">
                      Broker reconciliation and automation monitoring currently show stable operational behavior.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 shadow-xl">
                <h2 className="text-2xl font-semibold">Operational Guidance</h2>

                <div className="space-y-5 mt-5">
                  <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-2xl p-5">
                    <div className="text-emerald-300 font-medium">Current Recommendation</div>
                    <div className="text-2xl font-bold mt-2">Continue Normal Monitoring</div>
                  </div>

                  <div className="bg-slate-950 border border-slate-800 rounded-2xl p-5">
                    <div className="text-slate-400 text-sm">Risk Commentary</div>
                    <p className="text-slate-300 mt-2 leading-relaxed">
                      Risk remains controlled despite elevated movement because current exposure stays inside configured operational limits.
                    </p>
                  </div>

                  <div className="bg-slate-950 border border-slate-800 rounded-2xl p-5">
                    <div className="text-slate-400 text-sm">What Aegis is watching</div>
                    <p className="text-slate-300 mt-2 leading-relaxed">
                      Aegis continues monitoring volatility expansion, liquidity behavior, and confirmation quality before increasing automation activity.
                    </p>
                  </div>

                  <div className="bg-slate-950 border border-slate-800 rounded-2xl p-5">
                    <div className="text-slate-400 text-sm">Uncertainty Awareness</div>
                    <p className="text-slate-300 mt-2 leading-relaxed">
                      Future market movement remains uncertain. Aegis prioritizes controlled operation and protection visibility over aggressive prediction behavior.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 shadow-xl">
              <div className="flex flex-col xl:flex-row xl:items-center xl:justify-between gap-5">
                <div>
                  <h2 className="text-2xl font-semibold">Explanation Layers</h2>
                  <p className="text-slate-400 mt-2 max-w-4xl leading-relaxed">
                    Aegis explanations can expand based on user experience level and visibility preferences while preserving a calm operational experience.
                  </p>
                </div>

                <div className="flex flex-wrap gap-3">
                  <button className="bg-white text-slate-950 px-5 py-3 rounded-2xl font-medium hover:opacity-90 transition">
                    Retail View
                  </button>
                  <button className="bg-slate-800 px-5 py-3 rounded-2xl font-medium hover:bg-slate-700 transition">
                    Advanced View
                  </button>
                  <button className="bg-slate-800 px-5 py-3 rounded-2xl font-medium hover:bg-slate-700 transition">
                    Observability View
                  </button>
                </div>
              </div>
            </div>
          </div>
        ) : activeView === "Protections" ? (
          <div className="max-w-7xl mx-auto space-y-6">
            <div className="flex flex-col xl:flex-row xl:items-center xl:justify-between gap-4">
              <div>
                <h1 className="text-4xl font-bold tracking-tight">Protections</h1>
                <p className="text-slate-400 mt-2 text-lg">
                  A clear view of the safety systems currently protecting your account.
                </p>
              </div>

              <button
                onClick={() => setActiveView("Dashboard")}
                className="bg-slate-800 px-5 py-3 rounded-2xl font-medium hover:bg-slate-700 transition"
              >
                Back to Dashboard
              </button>
            </div>

            <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-3xl p-6">
              <div className="text-emerald-300 text-sm uppercase tracking-wide">Current Protection State</div>
              <div className="text-4xl font-bold text-emerald-100 mt-2">Fully Protected</div>
              <p className="text-slate-300 text-lg mt-3 max-w-4xl">
                Aegis currently shows all active positions protected, broker reconciliation aligned,
                and no urgent safety action required.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="bg-slate-900 border border-slate-800 rounded-3xl p-5">
                <div className="text-slate-400 text-sm">Protected Positions</div>
                <div className="text-3xl font-bold mt-2 text-emerald-300">20 / 20</div>
              </div>
              <div className="bg-slate-900 border border-slate-800 rounded-3xl p-5">
                <div className="text-slate-400 text-sm">Unprotected Exposure</div>
                <div className="text-3xl font-bold mt-2">$0</div>
              </div>
              <div className="bg-slate-900 border border-slate-800 rounded-3xl p-5">
                <div className="text-slate-400 text-sm">Safety Events</div>
                <div className="text-3xl font-bold mt-2">0</div>
              </div>
              <div className="bg-slate-900 border border-slate-800 rounded-3xl p-5">
                <div className="text-slate-400 text-sm">System Mode</div>
                <div className="text-3xl font-bold mt-2">Normal</div>
              </div>
            </div>

            <div className="grid grid-cols-1 xl:grid-cols-2 gap-5">
              {protectionItems.map((item) => (
                <div key={item.title} className="bg-slate-900 border border-slate-800 rounded-3xl p-6 shadow-xl">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h2 className="text-2xl font-semibold">{item.title}</h2>
                      <p className="text-slate-400 mt-2 leading-relaxed">{item.detail}</p>
                    </div>
                    <div className="bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 px-3 py-1 rounded-full text-sm whitespace-nowrap">
                      {item.status}
                    </div>
                  </div>

                  <div className="mt-5 bg-slate-950 border border-slate-800 rounded-2xl p-4">
                    <div className="text-slate-400 text-sm">Why this matters</div>
                    <div className="text-slate-200 mt-1">{item.impact}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6">
              <h2 className="text-2xl font-semibold">Aegis Safety Explanation</h2>
              <p className="text-slate-300 mt-3 leading-relaxed text-lg">
                Protections are designed to reduce unmanaged risk, verify that broker data matches platform state,
                and help prevent unsafe automation behavior. Aegis keeps these systems visible so users understand
                whether automation is operating normally or requires attention.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <button className="bg-white text-slate-950 px-5 py-3 rounded-2xl font-medium hover:opacity-90 transition">
                  View Protection Details
                </button>
                <button className="bg-slate-800 px-5 py-3 rounded-2xl font-medium hover:bg-slate-700 transition">
                  Review Risk Settings
                </button>
              </div>
            </div>
          </div>
        ) : activeView === "Portfolio" ? (
          <div className="max-w-7xl mx-auto space-y-6">
            <div className="flex flex-col xl:flex-row xl:items-center xl:justify-between gap-4">
              <div>
                <h1 className="text-4xl font-bold tracking-tight">Portfolio</h1>
                <p className="text-slate-400 mt-2 text-lg">
                  A deeper view of all active holdings, protection status, and Aegis interpretation.
                </p>
              </div>

              <button
                onClick={() => setActiveView("Dashboard")}
                className="bg-slate-800 px-5 py-3 rounded-2xl font-medium hover:bg-slate-700 transition"
              >
                Back to Dashboard
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="bg-slate-900 border border-slate-800 rounded-3xl p-5">
                <div className="text-slate-400 text-sm">Total Holdings</div>
                <div className="text-3xl font-bold mt-2">20</div>
              </div>
              <div className="bg-slate-900 border border-slate-800 rounded-3xl p-5">
                <div className="text-slate-400 text-sm">Protected Holdings</div>
                <div className="text-3xl font-bold mt-2 text-emerald-300">20</div>
              </div>
              <div className="bg-slate-900 border border-slate-800 rounded-3xl p-5">
                <div className="text-slate-400 text-sm">Needs Review</div>
                <div className="text-3xl font-bold mt-2 text-blue-300">0</div>
              </div>
              <div className="bg-slate-900 border border-slate-800 rounded-3xl p-5">
                <div className="text-slate-400 text-sm">Largest Exposure</div>
                <div className="text-3xl font-bold mt-2">NVDA</div>
              </div>
            </div>

            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-5">
              <div className="flex flex-col xl:flex-row xl:items-center xl:justify-between gap-4">
                <div>
                  <h2 className="text-2xl font-semibold">Portfolio Controls</h2>
                  <p className="text-slate-400 mt-1">
                    Filter and sort without overwhelming the main dashboard.
                  </p>
                </div>

                <div className="flex flex-wrap gap-3">
                  <button className="bg-white text-slate-950 px-4 py-2 rounded-xl font-medium">All</button>
                  <button className="bg-slate-800 px-4 py-2 rounded-xl font-medium">Needs Attention</button>
                  <button className="bg-slate-800 px-4 py-2 rounded-xl font-medium">Largest Exposure</button>
                  <button className="bg-slate-800 px-4 py-2 rounded-xl font-medium">Highest Movement</button>
                </div>
              </div>
            </div>

            <div className="bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden shadow-xl">
              <div className="hidden xl:grid grid-cols-7 gap-4 px-6 py-4 border-b border-slate-800 text-slate-400 text-sm">
                <div>Symbol</div>
                <div>Name</div>
                <div>Value</div>
                <div>Allocation</div>
                <div>Today</div>
                <div>Risk</div>
                <div>Protection</div>
              </div>

              <div className="divide-y divide-slate-800">
                {fullPortfolio.map((position) => (
                  <div
                    key={position.symbol}
                    className="grid grid-cols-1 xl:grid-cols-7 gap-3 xl:gap-4 px-6 py-5 hover:bg-slate-800/40 transition"
                  >
                    <div>
                      <div className="xl:hidden text-slate-500 text-xs">Symbol</div>
                      <div className="font-bold text-xl">{position.symbol}</div>
                    </div>
                    <div>
                      <div className="xl:hidden text-slate-500 text-xs">Name</div>
                      <div className="text-slate-300">{position.name}</div>
                    </div>
                    <div>
                      <div className="xl:hidden text-slate-500 text-xs">Value</div>
                      <div className="font-semibold">{position.value}</div>
                    </div>
                    <div>
                      <div className="xl:hidden text-slate-500 text-xs">Allocation</div>
                      <div>{position.allocation}</div>
                    </div>
                    <div>
                      <div className="xl:hidden text-slate-500 text-xs">Today</div>
                      <div className={position.change.startsWith("+") ? "text-emerald-400" : "text-rose-300"}>
                        {position.change}
                      </div>
                    </div>
                    <div>
                      <div className="xl:hidden text-slate-500 text-xs">Risk</div>
                      <div>{position.risk}</div>
                    </div>
                    <div>
                      <div className="xl:hidden text-slate-500 text-xs">Protection</div>
                      <span className="inline-flex bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 px-3 py-1 rounded-full text-sm">
                        {position.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-blue-500/10 border border-blue-500/30 rounded-3xl p-5">
              <div className="text-blue-200 font-semibold text-lg">Aegis interpretation</div>
              <p className="text-slate-300 mt-1">
                Your portfolio is fully protected. Concentration is highest in technology-related holdings, so Aegis is monitoring volatility and exposure balance before expanding automation.
              </p>
            </div>
          </div>
        ) : (
        <div className="max-w-7xl mx-auto space-y-6">
          {/* Mobile Header */}
          <div className="lg:hidden bg-slate-900 border border-slate-800 rounded-3xl p-5">
            <div className="text-3xl font-bold">Aegis One</div>
            <div className="text-slate-400 mt-1">
              Intelligent Trading. Protected by Design.
            </div>
          </div>

          {/* Header */}
          <div className="flex flex-col xl:flex-row xl:items-center xl:justify-between gap-4">
            <div>
              <h1 className="text-4xl font-bold tracking-tight">Dashboard</h1>
              <p className="text-slate-400 mt-2 text-lg">
                A calm overview of your portfolio, protections, and Aegis activity.
              </p>
            </div>

            <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-2xl px-5 py-3">
              <div className="text-sm text-emerald-300 uppercase tracking-wide">
                System Status
              </div>
              <div className="text-xl font-semibold text-emerald-200">
                Protected & Stable
              </div>
            </div>
          </div>

          {/* Attention Banner */}
          <div className="bg-blue-500/10 border border-blue-500/30 rounded-3xl p-5 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <div className="text-blue-200 font-semibold text-lg">
                No urgent action needed
              </div>
              <p className="text-slate-300 mt-1">
                Aegis is monitoring your active positions and keeping protections in place.
              </p>
            </div>
            <button className="bg-blue-400 text-slate-950 px-5 py-3 rounded-2xl font-semibold hover:opacity-90 transition">
              View Explanation
            </button>
          </div>

          {/* Top Overview */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-5 shadow-xl">
              <div className="text-slate-400 text-sm">Portfolio Value</div>
              <div className="text-3xl font-bold mt-2">$128,442</div>
              <div className="text-emerald-400 mt-2">+1.84% Today</div>
            </div>

            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-5 shadow-xl">
              <div className="text-slate-400 text-sm">Risk Level</div>
              <div className="text-3xl font-bold mt-2">Moderate</div>
              <div className="text-slate-400 mt-2">
                Exposure currently within safe operating range.
              </div>
            </div>

            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-5 shadow-xl">
              <div className="text-slate-400 text-sm">Active Positions</div>
              <div className="text-3xl font-bold mt-2">3</div>
              <div className="text-slate-400 mt-2">
                All positions currently protected.
              </div>
            </div>

            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-5 shadow-xl">
              <div className="text-slate-400 text-sm">Automation Status</div>
              <div className="text-3xl font-bold mt-2">Active</div>
              <div className="text-slate-400 mt-2">
                Aegis monitoring market conditions continuously.
              </div>
            </div>
          </div>

          {/* Main Grid */}
          <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
            {/* AI Guidance */}
            <div className="xl:col-span-2 bg-slate-900 border border-slate-800 rounded-3xl p-7 shadow-2xl">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-5">
                <div>
                  <h2 className="text-2xl font-semibold">Aegis Guidance</h2>
                  <p className="text-slate-400 mt-1">
                    Plain-language operational interpretation.
                  </p>
                </div>

                <div className="bg-blue-500/10 border border-blue-500/30 text-blue-200 px-4 py-2 rounded-xl text-sm">
                  Market Conditions: Elevated
                </div>
              </div>

              <div className="bg-slate-950 border border-slate-800 rounded-2xl p-6 text-lg leading-relaxed text-slate-200">
                Market volatility is elevated today. Aegis is maintaining conservative
                position sizing and waiting for stronger confirmation before entering
                additional trades.

                <br /><br />

                Current positions remain protected and no urgent action is recommended.
              </div>

              <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-3">
                <div className="bg-slate-950 border border-slate-800 rounded-2xl p-4">
                  <div className="text-slate-400 text-sm">What happened?</div>
                  <div className="mt-1 font-medium">Volatility increased</div>
                </div>
                <div className="bg-slate-950 border border-slate-800 rounded-2xl p-4">
                  <div className="text-slate-400 text-sm">Aegis response</div>
                  <div className="mt-1 font-medium">Risk stayed controlled</div>
                </div>
                <div className="bg-slate-950 border border-slate-800 rounded-2xl p-4">
                  <div className="text-slate-400 text-sm">User action</div>
                  <div className="mt-1 font-medium">None needed</div>
                </div>
              </div>

              <div className="mt-6 flex flex-wrap gap-3">
                <button className="bg-white text-slate-950 px-5 py-3 rounded-2xl font-medium hover:opacity-90 transition">
                  View Full Explanation
                </button>

                <button className="bg-slate-800 px-5 py-3 rounded-2xl font-medium hover:bg-slate-700 transition">
                  Review Positions
                </button>
              </div>
            </div>

            {/* Protection Status */}
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 shadow-2xl">
              <h2 className="text-2xl font-semibold mb-5">Protection Status</h2>

              <div className="space-y-4">
                <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-2xl p-4">
                  <div className="text-emerald-300 text-sm uppercase tracking-wide">
                    Protection Coverage
                  </div>
                  <div className="text-xl font-semibold mt-1">
                    Fully Protected
                  </div>
                </div>

                <div className="bg-slate-950 border border-slate-800 rounded-2xl p-4">
                  <div className="text-slate-400 text-sm">Stop Protection</div>
                  <div className="text-lg mt-1">
                    Active on all open positions
                  </div>
                </div>

                <div className="bg-slate-950 border border-slate-800 rounded-2xl p-4">
                  <div className="text-slate-400 text-sm">Exposure Status</div>
                  <div className="text-lg mt-1">
                    Within configured risk limits
                  </div>
                </div>

                <div className="bg-slate-950 border border-slate-800 rounded-2xl p-4">
                  <div className="text-slate-400 text-sm">Emergency Systems</div>
                  <div className="text-lg mt-1">
                    Online & Monitoring
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Portfolio Summary + Priority Positions */}
          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 shadow-xl">
            <div className="flex flex-col xl:flex-row xl:items-center xl:justify-between gap-5 mb-6">
              <div>
                <h2 className="text-2xl font-semibold">Portfolio Overview</h2>
                <p className="text-slate-400 mt-1">
                  Showing the positions most relevant to your current risk and activity.
                </p>
              </div>

              <div className="bg-slate-950 border border-slate-800 rounded-2xl px-5 py-3">
                <div className="text-slate-400 text-sm">Dashboard View</div>
                <div className="font-semibold mt-1">
                  Showing {portfolioSummary.displayedPositions} of {portfolioSummary.totalPositions} active positions
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
              <div className="bg-slate-950 border border-slate-800 rounded-2xl p-4">
                <div className="text-slate-400 text-sm">Total Positions</div>
                <div className="text-3xl font-bold mt-2">{portfolioSummary.totalPositions}</div>
              </div>

              <div className="bg-slate-950 border border-slate-800 rounded-2xl p-4">
                <div className="text-slate-400 text-sm">Protected</div>
                <div className="text-3xl font-bold mt-2 text-emerald-300">
                  {portfolioSummary.protectedPositions}
                </div>
              </div>

              <div className="bg-slate-950 border border-slate-800 rounded-2xl p-4">
                <div className="text-slate-400 text-sm">Needs Attention</div>
                <div className="text-3xl font-bold mt-2 text-blue-300">
                  {portfolioSummary.attentionNeeded}
                </div>
              </div>

              <div className="bg-slate-950 border border-slate-800 rounded-2xl p-4">
                <div className="text-slate-400 text-sm">Coverage</div>
                <div className="text-3xl font-bold mt-2">100%</div>
              </div>
            </div>

            <div className="bg-blue-500/10 border border-blue-500/30 rounded-2xl p-5 mb-5">
              <div className="text-blue-200 font-semibold">Why these positions are shown</div>
              <p className="text-slate-300 mt-1">
                Aegis highlights positions based on exposure size, daily movement, risk status, and whether user review is needed.
                Your full portfolio remains available separately without cluttering the main dashboard.
              </p>
            </div>

            <div className="grid grid-cols-1 xl:grid-cols-3 gap-4">
              {positions.map((position) => (
                <div
                  key={position.symbol}
                  className="bg-slate-950 border border-slate-800 rounded-3xl p-5"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <div className="text-2xl font-bold">{position.symbol}</div>
                      <div className="text-slate-400 text-sm">{position.name}</div>
                    </div>
                    <div className="bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 px-3 py-1 rounded-full text-sm">
                      {position.status}
                    </div>
                  </div>

                  <div className="mt-4 inline-flex bg-slate-900 border border-slate-800 text-slate-300 px-3 py-1 rounded-full text-sm">
                    {position.priority}
                  </div>

                  <div className="mt-5 flex items-end justify-between">
                    <div>
                      <div className="text-slate-400 text-sm">Position Value</div>
                      <div className="text-2xl font-semibold">{position.value}</div>
                    </div>
                    <div
                      className={`font-semibold ${
                        position.change.startsWith("+")
                          ? "text-emerald-400"
                          : "text-rose-300"
                      }`}
                    >
                      {position.change}
                    </div>
                  </div>

                  <p className="text-slate-300 mt-5 leading-relaxed">
                    {position.note}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <p className="text-slate-400">
                The home dashboard stays focused. Use the full portfolio view for all holdings, filters, and deeper analysis.
              </p>

              <div className="flex flex-wrap gap-3">
                <button
                  onClick={() => setActiveView("Portfolio")}
                  className="bg-white text-slate-950 px-5 py-3 rounded-2xl font-medium hover:opacity-90 transition"
                >
                  View All 20 Positions
                </button>
                <button className="bg-slate-800 px-5 py-3 rounded-2xl font-medium hover:bg-slate-700 transition">
                  Change Display Rules
                </button>
              </div>
            </div>
          </div>

          {/* Bottom Panels */}
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
            {/* Activity */}
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 shadow-xl">
              <h2 className="text-2xl font-semibold mb-5">Today's Activity</h2>

              <div className="space-y-4">
                <div className="flex items-start gap-4 border-b border-slate-800 pb-4">
                  <div className="w-3 h-3 rounded-full bg-emerald-400 mt-2"></div>
                  <div>
                    <div className="font-medium">Protection orders verified</div>
                    <div className="text-slate-400 text-sm mt-1">
                      All active positions confirmed protected.
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4 border-b border-slate-800 pb-4">
                  <div className="w-3 h-3 rounded-full bg-blue-400 mt-2"></div>
                  <div>
                    <div className="font-medium">Trade opportunity avoided</div>
                    <div className="text-slate-400 text-sm mt-1">
                      Market conditions did not meet confirmation requirements.
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-3 h-3 rounded-full bg-yellow-400 mt-2"></div>
                  <div>
                    <div className="font-medium">Volatility monitoring increased</div>
                    <div className="text-slate-400 text-sm mt-1">
                      Elevated market movement detected.
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Recommended Action */}
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 shadow-xl">
              <h2 className="text-2xl font-semibold mb-5">Recommended Action</h2>

              <div className="bg-slate-950 border border-slate-800 rounded-2xl p-5">
                <div className="text-slate-300 leading-relaxed text-lg">
                  No immediate action is recommended.

                  <br /><br />

                  Aegis is currently operating within normal protection parameters.
                  You may review your active positions or continue automated monitoring.
                </div>

                <div className="mt-6 flex flex-wrap gap-3">
                  <button className="bg-white text-slate-950 px-5 py-3 rounded-2xl font-medium hover:opacity-90 transition">
                    View Portfolio
                  </button>

                  <button className="bg-slate-800 px-5 py-3 rounded-2xl font-medium hover:bg-slate-700 transition">
                    Pause Automation
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        )}
      </main>
    </div>
  )
}
