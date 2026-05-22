export const portfolioSummary = {
    totalPositions: 20,
    displayedPositions: 3,
    protectedPositions: 20,
    attentionNeeded: 0,
}

export const positions = [
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

export const activityEvents = [
    {
        time: "09:32 AM",
        type: "Protection",
        title: "Protection coverage verified",
        detail: "Aegis confirmed all active positions have protection coverage attached.",
        explanation:
            "This helps reduce unmanaged downside exposure before new automation decisions are considered.",
        status: "Completed",
    },
    {
        time: "09:47 AM",
        type: "Decision",
        title: "Trade opportunity avoided",
        detail:
            "A potential entry did not meet confirmation requirements during elevated volatility.",
        explanation:
            "Aegis avoided increasing exposure when conditions did not support a disciplined entry.",
        status: "Avoided",
    },
    {
        time: "10:14 AM",
        type: "Monitoring",
        title: "Volatility monitoring increased",
        detail:
            "Technology-related holdings showed wider-than-normal price movement.",
        explanation:
            "Aegis increased monitoring sensitivity while keeping portfolio risk inside configured limits.",
        status: "Active",
    },
]

export const protectionItems = [
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
        detail:
            "Fail-safe monitoring remains available if abnormal execution behavior is detected.",
        impact:
            "Preserves controlled operation during unexpected conditions.",
    },
    {
        title: "Daily Risk Limits",
        status: "Within Limits",
        detail:
            "Trading activity remains inside configured daily risk boundaries.",
        impact:
            "Prevents overactivity during unstable market behavior.",
    },
]

export const riskSettings = [
    {
        label: "Automation Style",
        value: "Balanced",
        description:
            "Aegis balances opportunity detection with protection-first execution behavior.",
    },
    {
        label: "Risk Profile",
        value: "Moderate",
        description:
            "Position exposure is allowed within controlled limits while avoiding aggressive expansion.",
    },
    {
        label: "Protection Priority",
        value: "High",
        description:
            "Protection verification remains prioritized before expanding automation activity.",
    },
    {
        label: "User Confirmation Level",
        value: "Guided",
        description:
            "Meaningful changes require plain-language explanation before user confirmation.",
    },
]

export const researchCards = [
    {
        title: "Current Strategy Validation",
        value: "In Review",
        description:
            "Aegis is tracking strategy behavior before future promotion decisions are considered.",
    },
    {
        title: "Backtesting Readiness",
        value: "Planned",
        description:
            "Historical validation will remain isolated from live execution systems.",
    },
    {
        title: "Walk-Forward Testing",
        value: "Required",
        description:
            "Strategies must show survivability beyond optimized historical results.",
    },
    {
        title: "Live Promotion Status",
        value: "Restricted",
        description:
            "Research results do not automatically qualify any strategy for live automation.",
    },
]

export const navItems = [
    "Dashboard",
    "Portfolio",
    "Protections",
    "Aegis Guidance",
    "Activity",
    "Research",
    "Settings",
]