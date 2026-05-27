import { theme } from "../theme";

export default function NavigationButton({
    active = false,
    children,
    onClick,
}) {
    return (
        <button
            onClick={onClick}
            className={`
                w-full
                text-left
                px-4
                py-3
                ${theme.radius.section}
                ${theme.transitions.default}

                ${active
                    ? "bg-white text-slate-950 font-semibold"
                    : "text-slate-300 hover:bg-slate-900"
                }
            `}
        >
            {children}
        </button>
    );
}