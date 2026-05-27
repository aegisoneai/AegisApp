import { theme } from "../theme";

export default function StatusCard({
    label,
    value,
    detail,
    tone = "default",
}) {
    const toneClasses = {
        default: `
            ${theme.colors.border}
            bg-slate-900/70
            ${theme.colors.text}
        `,

        good: `
            border-emerald-500/30
            bg-emerald-500/10
            text-emerald-100
        `,

        warning: `
            border-amber-500/30
            bg-amber-500/10
            text-amber-100
        `,

        danger: `
            border-red-500/30
            bg-red-500/10
            text-red-100
        `,
    };

    return (
        <div
            className={`
                ${theme.radius.card}
                border
                p-5
                ${toneClasses[tone]}
            `}
        >
            <div className={theme.typography.small}>
                {label}
            </div>

            <div className="text-2xl font-bold mt-2">
                {value}
            </div>

            {detail && (
                <div className={`${theme.typography.small} mt-2`}>
                    {detail}
                </div>
            )}
        </div>
    );
}