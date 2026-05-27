import { create } from "zustand";

export const useNotificationStore = create((set) => ({
    notifications: [
        {
            id: 1,
            title: "Protection systems active",
            message: "All monitored positions currently maintain active protection coverage.",
            type: "success",
            read: false,
        },
        {
            id: 2,
            title: "Aegis Guidance updated",
            message: "Current market conditions remain within governed operating ranges.",
            type: "info",
            read: false,
        },
    ],

    markAllRead: () =>
        set((state) => ({
            notifications: state.notifications.map((item) => ({
                ...item,
                read: true,
            })),
        })),

    clearNotifications: () =>
        set({
            notifications: [],
        }),
}));