import { create } from "zustand";

export const useAppStore = create((set) => ({

    mobileMenuOpen: false,
    showOnboarding: false,
    onboardingStep: 1,
    notificationDrawerOpen: false,

    setMobileMenuOpen: (value) =>
        set({ mobileMenuOpen: value }),

    setShowOnboarding: (value) =>
        set({ showOnboarding: value }),

    setOnboardingStep: (value) =>
        set({ onboardingStep: value }),

    setNotificationDrawerOpen: (value) =>
        set({ notificationDrawerOpen: value }),

}));