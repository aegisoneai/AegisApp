export default function SectionCard({
    title,
    subtitle,
    children,
    actions,
}) {
    return (
        <section className="rounded-3xl border border-slate-800 bg-slate-900/60 p-6">
            <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between mb-6">

                <div>
                    {title && (
                        <h2 className="text-xl font-semibold tracking-tight">
                            {title}
                        </h2>
                    )}

                    {subtitle && (
                        <p className="text-sm text-slate-400 mt-2 max-w-2xl">
                            {subtitle}
                        </p>
                    )}
                </div>

                {actions && (
                    <div className="flex items-center gap-3">
                        {actions}
                    </div>
                )}

            </div>

            <div>
                {children}
            </div>
        </section>
    )
}