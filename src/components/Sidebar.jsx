import TechIcon from "./TechIcon";

export default function Sidebar({ stack, onRemove, onRemoveAll }) {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-xl border border-gray-100 sticky top-24">
      <h3 className="text-xl font-bold text-gray-800">Your Stack</h3>
      <p className="text-sm text-gray-400 mb-4">{stack.length} Technology Selected</p>
      {stack.length === 0 ? (
        <div className="border border-dashed border-gray-200 rounded-xl p-10 text-center bg-gray-50/50">
          <p className="text-gray-400 text-sm font-medium">No technologies selected yet.</p>
          <p className="text-gray-300 text-xs mt-2">Your stack is empty.</p>
        </div>
      ) : (
        <div className="flex flex-col gap-3">
          <div className="max-h-[380px] overflow-y-auto flex flex-col gap-3 pr-1">
            {stack.map(item => (
              <div key={item.id} className="flex items-center justify-between p-3 border border-gray-100 rounded-xl bg-white shadow-sm hover:border-gray-200">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 flex items-center justify-center flex-shrink-0">
                    <TechIcon name={item.name} size={32} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm text-gray-800">{item.name}</h4>
                    <p className="text-xs text-gray-400">{item.category}</p>
                  </div>
                </div>
                <button onClick={() => onRemove(item.id)} className="text-gray-400 hover:text-red-500 font-bold px-2 text-lg">✕</button>
              </div>
            ))}
          </div>
          <button onClick={onRemoveAll} className="btn btn-outline btn-error btn-sm w-full mt-4 normal-case rounded-lg border-red-500 text-red-500 hover:bg-red-500 hover:text-white">
            Remove All
          </button>
        </div>
      )}
    </div>
  );
}