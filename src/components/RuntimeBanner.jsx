import { theme } from "../theme";

export default function RuntimeBanner({
    status = "Protected & Stable",
    detail = "All monitored systems operating normally.",
}) {
    return (
        <div
            className={`
                ${theme.radius.card}
                border border-emerald-500/30
                bg-emerald-500/10
                p-4
            `}
        >
            <div
                className={`
                    text-sm
                    uppercase
                    tracking-wide
                    ${theme.colors.success}
                `}
            >
                Runtime Status
            </div>

            <div className="text-lg font-semibold text-emerald-100 mt-1">
                {status}
            </div>

            <p
                className={`
                    ${theme.typography.small}
                    mt-2
                `}
            >
                {detail}
            </p>
        </div>
    );
}