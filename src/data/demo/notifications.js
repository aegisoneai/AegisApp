export const demoNotifications = [
    {
        id: 1,
        title: "Demo Mode Active",
        message: "This preview uses simulated data only. No broker connection or live trading is active.",
        type: "system",
        read: false,
    },
    {
        id: 2,
        title: "Protection Review Complete",
        message: "Portfolio protection settings remain active across demo positions.",
        type: "protection",
        read: false,
    },
    {
        id: 3,
        title: "Automation Health Check",
        message: "Automation systems are shown as healthy for demo presentation purposes.",
        type: "automation",
        read: true,
    },
];