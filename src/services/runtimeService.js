export async function getRuntimeSummary() {
    return {
        environment: "LOCAL-DEV",
        tradingRuntimeConnected: false,
        message: "Frontend is not directly connected to trading runtime.",
    };
}