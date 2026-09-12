import TechIcon from "./TechIcon";

export default function TechCard({ tech, onAddToStack, isAdded }) {
  const { name, category, description, difficulty, rating, badge } = tech;

  const getBadgeStyle = (badgeName) => {
    const nameLower = badgeName?.toLowerCase().trim();
    if (nameLower === "popular") return "bg-cyan-50 text-cyan-600";
    if (nameLower === "versatile") return "bg-emerald-50 text-emerald-600";
    if (nameLower === "fast") return "bg-orange-50 text-orange-600";
    if (nameLower === "top sql") return "bg-indigo-50 text-indigo-600";
    if (nameLower === "containers") return "bg-blue-50 text-blue-600";
    if (nameLower === "backend standard") return "bg-violet-50 text-violet-600";
    if (nameLower === "standard") return "bg-green-50 text-green-600";
    if (nameLower === "trending") return "bg-amber-50 text-amber-600";
    if (nameLower === "ubiquitous") return "bg-yellow-50 text-yellow-600";
    if (nameLower === "essential") return "bg-sky-50 text-sky-600";
    if (nameLower === "robust") return "bg-red-50 text-red-600";
    return "bg-slate-50 text-slate-600";
  };

  return (
    <div className="bg-white rounded-2xl border border-gray-100 p-6 flex flex-col justify-between transition-all hover:shadow-lg w-full">
      <div>
        <div className="flex justify-between items-start mb-6">
          <div className="flex items-center justify-center w-10 h-10">
            <TechIcon name={name} size={40} />
          </div>

          <span className={`text-xs font-semibold px-3 py-1 rounded-full ${getBadgeStyle(badge)}`}>
            {badge}
          </span>
        </div>

        <h3 className="text-xl font-bold text-slate-900 mb-2">{name}</h3>
        <p className="text-xs md:text-sm text-slate-400 font-normal leading-relaxed h-16 overflow-hidden text-ellipsis mb-6">
          {description}
        </p>

        <div className="flex flex-wrap items-center gap-2 mb-6 text-[11px] font-medium text-slate-500">
          <span className="bg-slate-50 px-3 py-1 rounded-md border border-slate-100/60">{category}</span>
          <span className="bg-slate-50 px-3 py-1 rounded-md border border-slate-100/60">{difficulty}</span>
          <span className="flex items-center gap-1 ml-auto text-amber-500 font-bold">
            <span className="text-xs">★</span> {rating}
          </span>
        </div>
      </div>

      <div>
        <button
          onClick={() => onAddToStack(tech)}
          disabled={isAdded}
          className={`w-full py-2.5 rounded-xl font-bold text-xs tracking-wide transition-all ${
            isAdded
              ? "bg-slate-100 text-slate-400 cursor-not-allowed shadow-none"
              : "bg-[#0f172a] text-white hover:bg-slate-800 active:scale-[0.98]"
          }`}
        >
          {isAdded ? "Added to Stack" : "Add to Stack"}
        </button>
      </div>
    </div>
  );
}