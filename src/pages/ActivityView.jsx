import SectionCard from "../components/SectionCard";
import { activityFeed } from "../data/demo/activityFeed";

export default function ActivityView() {
    return (
        <div className="max-w-4xl mx-auto space-y-4 text-sm text-slate-300">
            {activityFeed.map((activity) => (
                <div
                    key={`${activity.title}-${activity.time}`}
                    className="border-b border-slate-800 pb-4"
                >
                    <div className="flex items-center justify-between gap-4">
                        <div className="font-medium text-slate-100">
                            {activity.title}
                        </div>

                        <div className="text-xs text-slate-500">
                            {activity.time}
                        </div>
                    </div>

                    <div className="text-slate-400 mt-1">
                        {activity.detail}
                    </div>
                </div>
            ))}
        </div>
    )
}