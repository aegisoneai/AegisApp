import { theme } from "../theme";

export default function DashboardPanel({
    children,
    className = "",
}) {
    return (
        <div
            className={`
                ${theme.radius.section}
                ${theme.colors.border}
                ${theme.colors.surfaceSecondary}
                border
                p-4
                ${className}
            `}
        >
            {children}
        </div>
    );
}