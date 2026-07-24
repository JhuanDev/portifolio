import heroBg from "../../assets/backgrounds/bgoficial.png";

function Background() {
  return (
    <div className="fixed inset-0 -z-50">
      <img src={heroBg} alt="" className="h-full w-full object-cover" />

      {/* Overlay */}
      <div className="absolute inset-0 bg-slate-950/70" />
    </div>
  );
}

export default Background;
