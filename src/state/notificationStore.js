import { create } from "zustand";
import { demoNotifications } from "../data/demo/notifications";

const defaultNotifications = [
    {
        id: 1,
        title: "Protection systems active",
        message:
            "All monitored positions currently maintain active protection coverage.",
        type: "success",
        read: false,
    },
    {
        id: 2,
        title: "Aegis Guidance updated",
        message:
            "Current market conditions remain within governed operating ranges.",
        type: "info",
        read: false,
    },
];

const savedNotifications = localStorage.getItem("aegis-notifications");

export const useNotificationStore = create((set) => ({
    notifications: savedNotifications
        ? JSON.parse(savedNotifications)
        : demoNotifications,

    markAllRead: () =>
        set((state) => {
            const updated = state.notifications.map((item) => ({
                ...item,
                read: true,
            }));

            localStorage.setItem(
                "aegis-notifications",
                JSON.stringify(updated)
            );

            return {
                notifications: updated,
            };
        }),

    clearNotifications: () => {
        localStorage.setItem(
            "aegis-notifications",
            JSON.stringify([])
        );

        set({
            notifications: [],
        });
    },
}));