export default function AmbientBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      <div
        className="absolute -top-52 -left-40 h-[600px] w-[600px] rounded-full opacity-55 blur-[90px]"
        style={{
          background:
            "radial-gradient(circle, rgba(0,217,192,0.35), transparent 70%)",
        }}
      />
      <div
        className="absolute top-[30%] -right-64 h-[700px] w-[700px] rounded-full opacity-55 blur-[90px]"
        style={{
          background:
            "radial-gradient(circle, rgba(255,107,157,0.12), transparent 70%)",
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
          maskImage:
            "radial-gradient(ellipse 80% 60% at 50% 0%, black 40%, transparent 100%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 80% 60% at 50% 0%, black 40%, transparent 100%)",
        }}
      />
    </div>
  );
}
