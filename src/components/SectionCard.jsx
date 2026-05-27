import { theme } from "../theme";

export default function SectionCard({
    title,
    subtitle,
    children,
    actions,
}) {
    return (
        <section
            className={`
                ${theme.radius.card}
                ${theme.colors.border}
                ${theme.colors.surface}
                border
                p-6
            `}
        >
            <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between mb-6">

                <div>
                    {title && (
                        <h2 className={theme.typography.cardTitle}>
                            {title}
                        </h2>
                    )}

                    {subtitle && (
                        <p className={`${theme.typography.small} mt-2 max-w-2xl`}>
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
    );
}