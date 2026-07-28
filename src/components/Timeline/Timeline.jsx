import timelineData from "./TimelideData";

function Timeline() {
  return (
    <div className="mt-20">
      {/* Linha */}
      <div className="relative">
        <div className="absolute top-2 left-0 w-full h-[3px] rounded-full bg-white/10"></div>

        <div className="relative flex justify-between">
          {timelineData.map((item, index) => (
            <div key={index} className="flex flex-col items-center w-60">
              {/* Ponto */}
              <div className="z-10 h-5 w-5 rounded-full border-4 border-slate-900 bg-sky-400 shadow-lg shadow-sky-500/40"></div>

              {/* Linha vertical */}
              <div className="h-10 w-[2px] bg-white/10"></div>

              {/* Card */}
              <div
                className="
                w-56
                rounded-2xl
                border
                border-white/10
                bg-white/5
                backdrop-blur-md
                p-6
                transition-all
                duration-300
                hover:-translate-y-2
                hover:border-sky-400/30
                "
              >
                <p className="text-sky-400 font-bold">{item.year}</p>

                <h3 className="mt-2 text-white font-semibold">{item.title}</h3>

                <p className="mt-3 text-sm leading-6 text-gray-400">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Timeline;
