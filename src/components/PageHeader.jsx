export default function PageHeader({ title, subtitle, children }) {
    return (
        <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between mb-8">
            <div>
                <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
                    {title}
                </h1>

                {subtitle && (
                    <p className="text-slate-400 mt-2 max-w-3xl">
                        {subtitle}
                    </p>
                )}
            </div>

            {children && (
                <div className="flex items-center gap-3">
                    {children}
                </div>
            )}
        </div>
    )
}