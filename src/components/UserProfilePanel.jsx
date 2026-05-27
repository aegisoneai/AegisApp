import { useNavigate } from "react-router-dom";
import { useAuthStore } from "../state/authStore";
import DashboardPanel from "./DashboardPanel";
import { theme } from "../theme";

export default function UserProfilePanel() {
    const navigate = useNavigate();
    const user = useAuthStore((state) => state.user);
    const logout = useAuthStore((state) => state.logout);

    function handleLogout() {
        logout();
        navigate("/login", { replace: true });
    }

    if (!user) return null;

    return (
        <DashboardPanel className="mt-6">
            <div className={theme.typography.small}>
                Signed in as
            </div>

            <div className="mt-2 text-lg font-semibold text-white">
                {user.name}
            </div>

            <div className="mt-1 text-sm text-slate-400">
                {user.role} · {user.workspace}
            </div>

            <button
                onClick={handleLogout}
                className="mt-4 w-full rounded-2xl border border-slate-700 bg-slate-900 px-4 py-2 text-sm text-slate-300 hover:bg-slate-800 transition"
            >
                Sign Out
            </button>
        </DashboardPanel>
    );
}