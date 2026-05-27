import SectionCard from "./SectionCard";

export default function SettingsSectionCard({
    title,
    subtitle,
    children,
}) {
    return (
        <SectionCard
            title={title}
            subtitle={subtitle}
        >
            <div className="space-y-5">
                {children}
            </div>
        </SectionCard>
    );
}