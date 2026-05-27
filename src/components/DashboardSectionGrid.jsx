import { theme } from "../theme";

export default function DashboardSectionGrid({
    children,
    columns = "xl:grid-cols-2",
}) {
    return (
        <div
            className={`
                grid
                grid-cols-1
                ${columns}
                ${theme.spacing.gridGap}
            `}
        >
            {children}
        </div>
    );
}