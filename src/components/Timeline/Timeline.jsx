import timelineData from "./TimelideData";

function Timeline() {
  return (
    <section className="mt-24">
      <div className="relative">
        {/* Linha principal */}
        <div className="absolute left-0 right-0 top-1.75 h-0.5 bg-white/10"></div>

        {/* Glow da linha */}
        <div className="absolute left-0 right-0 top-1.75 h-0.5 bg-linear-to-r from-sky-400/10 via-sky-400/30 to-sky-400/10"></div>

        <div className="relative flex justify-between">
          {timelineData.map((item, index) => (
            <div key={index} className="flex w-62 flex-col items-center">
              {/* Ponto */}
              <div className="relative z-20">
                <div className="absolute inset-0 rounded-full bg-sky-400 blur-md opacity-60"></div>

                <div className="relative h-4 w-4 rounded-full bg-sky-400 ring-4 ring-[#08111F]"></div>
              </div>

              {/* Linha vertical */}
              <div className="h-10 w-px bg-linear-to-b from-sky-400/70 to-white/10"></div>

              {/* Card */}
              <div
                className="
                  relative
                  w-88
                  min-h-62.5
                  overflow-hidden
                  rounded-xl
                  border
                  border-white/10
                  bg-[#0B1220]
                  transition-all
                  duration-300
                  hover:scale-[1.03]
                  hover:border-sky-400/40
                "
              >
                {/* Glow permanente */}
                <div
                  className="
                    absolute
                    inset-0
                    rounded-xl
                    shadow-[0_0_35px_rgba(56,189,248,.10)]
                    pointer-events-none
                  "
                ></div>

                {/* Glow superior */}
                <div
                  className="
                    absolute
                    -top-14
                    left-1/2
                    h-24
                    w-40
                    -translate-x-1/2
                    rounded-full
                    bg-sky-400/10
                    blur-3xl
                    pointer-events-none
                  "
                ></div>

                {/* Conteúdo */}
                <div className="relative">
                  {/* Cabeçalho */}
                  <div className="border-b border-white/10 px-6 py-5">
                    <span className="text-xs font-semibold uppercase tracking-[0.30em] text-sky-400">
                      {item.year}
                    </span>
                  </div>

                  {/* Corpo */}
                  <div className="px-6 py-6">
                    <h3 className="text-xl font-semibold text-white">
                      {item.title}
                    </h3>

                    <p className="mt-5 leading-7 text-gray-400">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Timeline;
