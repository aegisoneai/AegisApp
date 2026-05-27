import StatusCard from "../../../components/StatusCard";

export default function SystemStatusSection({
    runtimeStatus,
    detail,
}) {
    return (
        <StatusCard
            label="System Status"
            value={runtimeStatus}
            detail={detail}
            tone="good"
        />
    );
}