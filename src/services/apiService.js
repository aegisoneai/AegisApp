const API_BASE_URL = "/api";

export async function getApiHealth() {
    return {
        status: "placeholder",
        message: "API service layer prepared. No live backend connection configured.",
        baseUrl: API_BASE_URL,
    };
}