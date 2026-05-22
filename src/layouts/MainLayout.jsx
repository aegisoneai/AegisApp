export default function MainLayout({ sidebar, children }) {
    return (
        <div className="min-h-screen bg-slate-950 text-white flex">
            {sidebar}

            <main className="flex-1 p-5 md:p-8 overflow-y-auto">
                {children}
            </main>
        </div>
    )
}