import { useNavigate } from "react-router-dom";
import { useAuthStore } from "../state/authStore";
import { theme } from "../theme";

export default function LoginView() {
    const navigate = useNavigate();
    const login = useAuthStore((state) => state.login);

    function handleLogin() {
        login();
        navigate("/", { replace: true });
    }

    return (
        <div className="min-h-screen bg-slate-950 text-white flex items-center justify-center p-6">
            <div className="w-full max-w-md rounded-3xl border border-slate-800 bg-slate-900/70 p-8 shadow-xl">
                <div className={theme.typography.pageTitle}>
                    Aegis One
                </div>

                <p className={`${theme.typography.small} mt-3`}>
                    Protected automation platform access.
                </p>

                <div className="mt-8 rounded-2xl border border-emerald-500/30 bg-emerald-500/10 p-4">
                    <div className="text-sm uppercase tracking-wide text-emerald-300">
                        Session Scaffold
                    </div>

                    <p className="text-sm text-slate-300 mt-2">
                        This is a frontend-only login placeholder. Real authentication will be connected later through a governed backend auth provider.
                    </p>
                </div>

                <button
                    onClick={handleLogin}
                    className="mt-8 w-full rounded-2xl bg-white px-5 py-3 font-semibold text-slate-950 hover:bg-slate-200 transition"
                >
                    Enter Aegis Workspace
                </button>
            </div>
        </div>
    );
}