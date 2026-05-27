import { useEffect } from "react";
import { Routes, Route, Navigate, useNavigate, useLocation } from "react-router-dom";

import AppHeader from "./components/AppHeader";
import Sidebar from "./components/Sidebar";
import NotificationDrawer from "./components/NotificationDrawer";
import ProtectedRoute from "./components/ProtectedRoute";
import LoginView from "./pages/LoginView";

import { useAppStore } from "./state/appStore";
import { useAuthStore } from "./state/authStore";

import {
  positions,
  activityEvents,
  protectionItems,
  riskSettings,
  researchCards,
  navItems,
} from "./data/mockData";

import DashboardView from "./pages/DashboardView";
import PortfolioView from "./pages/PortfolioView";
import ProtectionsView from "./pages/ProtectionsView";
import ActivityView from "./pages/ActivityView";
import GuidanceView from "./pages/GuidanceView";
import ResearchView from "./pages/ResearchView";
import SettingsView from "./pages/SettingsView";

export default function AegisDashboardConcept() {
  const navigate = useNavigate();
  const location = useLocation();

  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);

  const {
    mobileMenuOpen,
    showOnboarding,
    onboardingStep,
    notificationDrawerOpen,
    setMobileMenuOpen,
    setShowOnboarding,
    setOnboardingStep,
    setNotificationDrawerOpen,
  } = useAppStore();

  useEffect(() => {
    const completed = localStorage.getItem("aegis-onboarding-complete");

    if (!completed && isAuthenticated) {
      setShowOnboarding(true);
    }
  }, [isAuthenticated, setShowOnboarding]);

  const activeViewMap = {
    "/": "Dashboard",
    "/portfolio": "Portfolio",
    "/protections": "Protections",
    "/activity": "Activity",
    "/guidance": "Aegis Guidance",
    "/research": "Research",
    "/settings": "Settings",
  };

  const activeView = activeViewMap[location.pathname] || "Dashboard";

  const fullPortfolio = [
    ...positions,
    {
      symbol: "MSFT",
      name: "Microsoft Corp.",
      value: "$18,420",
      allocation: "8.9%",
      change: "+0.6%",
      status: "Protected",
      risk: "Low",
    },
    {
      symbol: "AMZN",
      name: "Amazon.com Inc.",
      value: "$16,880",
      allocation: "8.1%",
      change: "+0.4%",
      status: "Protected",
      risk: "Low",
    },
    {
      symbol: "META",
      name: "Meta Platforms",
      value: "$15,240",
      allocation: "7.4%",
      change: "+1.1%",
      status: "Protected",
      risk: "Low",
    },
  ];

  const routeMap = {
    Dashboard: "/",
    Portfolio: "/portfolio",
    Protections: "/protections",
    Activity: "/activity",
    "Aegis Guidance": "/guidance",
    Research: "/research",
    Settings: "/settings",
  };

  const appShell = (
    <div className="min-h-screen bg-slate-950 text-white flex">
      <Sidebar
        navItems={navItems}
        activeView={activeView}
        setActiveView={(view) => {
          navigate(routeMap[view] || "/");
        }}
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
        setOnboardingStep={setOnboardingStep}
        setShowOnboarding={setShowOnboarding}
      />

      <main className="flex-1 p-5 md:p-8 overflow-y-auto">
        <div className="lg:hidden mb-6">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="bg-slate-900 border border-slate-700 px-4 py-3 rounded-2xl text-sm font-medium hover:bg-slate-800 transition"
          >
            ☰ Menu
          </button>
        </div>

        <div className="max-w-7xl mx-auto">
          <AppHeader />
        </div>

        <Routes>
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <DashboardView />
              </ProtectedRoute>
            }
          />

          <Route
            path="/portfolio"
            element={
              <ProtectedRoute>
                <PortfolioView
                  fullPortfolio={fullPortfolio}
                  setActiveView={() => { }}
                />
              </ProtectedRoute>
            }
          />

          <Route
            path="/protections"
            element={
              <ProtectedRoute>
                <ProtectionsView
                  protectionItems={protectionItems}
                  setActiveView={() => { }}
                />
              </ProtectedRoute>
            }
          />

          <Route
            path="/activity"
            element={
              <ProtectedRoute>
                <ActivityView
                  activityEvents={activityEvents}
                  setActiveView={() => { }}
                />
              </ProtectedRoute>
            }
          />

          <Route
            path="/guidance"
            element={
              <ProtectedRoute>
                <GuidanceView setActiveView={() => { }} />
              </ProtectedRoute>
            }
          />

          <Route
            path="/research"
            element={
              <ProtectedRoute>
                <ResearchView
                  researchCards={researchCards}
                  setActiveView={() => { }}
                />
              </ProtectedRoute>
            }
          />

          <Route
            path="/settings"
            element={
              <ProtectedRoute>
                <SettingsView
                  riskSettings={riskSettings}
                  setActiveView={() => { }}
                />
              </ProtectedRoute>
            }
          />

          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
    </div>
  );

  return (
    <>
      {showOnboarding && isAuthenticated && (
        <div className="fixed inset-0 z-[100] bg-slate-950/90 backdrop-blur-sm flex items-center justify-center p-6">
          <div className="w-full max-w-2xl rounded-3xl border border-slate-700 bg-slate-800 p-8 shadow-2xl">
            <div className="flex items-center justify-between mb-8">
              <div className="text-sm text-slate-300">
                Step {onboardingStep} of 3
              </div>

              <div className="flex gap-2">
                {[1, 2, 3].map((step) => (
                  <div
                    key={step}
                    className={`h-2 w-8 rounded-full transition ${step <= onboardingStep ? "bg-emerald-400" : "bg-slate-600"
                      }`}
                  />
                ))}
              </div>
            </div>

            {onboardingStep === 1 && (
              <div>
                <div className="text-sm uppercase tracking-wide text-slate-400">
                  Welcome to Aegis One
                </div>

                <h1 className="text-3xl font-bold tracking-tight mt-4 text-white">
                  Intelligent trading guidance designed around protection, clarity, and long-term confidence.
                </h1>

                <p className="text-slate-200 mt-6 text-lg leading-relaxed">
                  Aegis helps simplify intelligent investing through calm guidance,
                  visible protections, and explainable automation.
                </p>

                <div className="mt-10 flex justify-end">
                  <button
                    onClick={() => setOnboardingStep(2)}
                    className="bg-white text-slate-950 px-6 py-3 rounded-2xl font-semibold hover:bg-slate-200 transition"
                  >
                    Get Started
                  </button>
                </div>
              </div>
            )}

            {onboardingStep === 2 && (
              <div>
                <div className="text-sm uppercase tracking-wide text-slate-500">
                  Investment Goals
                </div>

                <h1 className="text-3xl font-bold tracking-tight mt-4 text-white">
                  What best describes your current investing style?
                </h1>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
                  {[
                    "Long-Term Growth",
                    "Passive Investing",
                    "Balanced Growth",
                    "Capital Preservation",
                  ].map((goal) => (
                    <button
                      key={goal}
                      onClick={() => setOnboardingStep(3)}
                      className="rounded-2xl border border-slate-600 bg-slate-900 p-5 text-left hover:border-white hover:bg-slate-800 transition"
                    >
                      <div className="font-medium text-lg text-white">
                        {goal}
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {onboardingStep === 3 && (
              <div>
                <div className="text-sm uppercase tracking-wide text-slate-500">
                  Protection Philosophy
                </div>

                <h1 className="text-3xl font-bold tracking-tight mt-4">
                  Aegis prioritizes protection-first automation and disciplined portfolio behavior.
                </h1>

                <p className="text-slate-400 mt-6 text-lg leading-relaxed">
                  The platform is designed to reduce emotional investing behavior,
                  improve operational clarity, and maintain visible protections whenever practical.
                </p>

                <div className="mt-10 flex items-center justify-between">
                  <button
                    onClick={() => setOnboardingStep(2)}
                    className="text-slate-400 hover:text-white transition"
                  >
                    Back
                  </button>

                  <button
                    onClick={() => {
                      localStorage.setItem("aegis-onboarding-complete", "true");
                      setShowOnboarding(false);
                    }}
                    className="bg-white text-slate-950 px-6 py-3 rounded-2xl font-semibold hover:bg-slate-200 transition"
                  >
                    Enter Workspace
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      <NotificationDrawer
        open={notificationDrawerOpen}
        onClose={() => setNotificationDrawerOpen(false)}
      />

      <Routes>
        <Route path="/login" element={<LoginView />} />
        <Route
          path="/*"
          element={isAuthenticated ? appShell : <Navigate to="/login" replace />}
        />
      </Routes>
    </>
  );
}