import { create } from "zustand";

const savedSession = localStorage.getItem("aegis-session");

const defaultUser = {
    name: "Aegis User",
    role: "Retail",
    workspace: "Protected Automation",
    permissions: {
        professionalMode: false,
        advancedTelemetry: false,
        strategyResearch: true,
        settingsAccess: true,
    },
};

export const useAuthStore = create((set) => ({
    isAuthenticated: savedSession === "active",

    user: savedSession === "active" ? defaultUser : null,

    login: () => {
        localStorage.setItem("aegis-session", "active");

        set({
            isAuthenticated: true,
            user: defaultUser,
        });
    },

    logout: () => {
        localStorage.removeItem("aegis-session");

        set({
            isAuthenticated: false,
            user: null,
        });
    },
}));