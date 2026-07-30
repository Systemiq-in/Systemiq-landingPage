'use client';

export default function BlueprintBackground() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {/* Crisp 32px Light Grid Lines */}
      <div className="absolute inset-0 bg-grid-pattern-light opacity-60" />

      {/* Pastel Radial Glows for Light Theme */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-gradient-to-b from-blue-200/40 via-indigo-100/30 to-transparent blur-3xl opacity-70" />
      <div className="absolute top-1/3 right-10 w-[500px] h-[400px] bg-sky-200/30 blur-3xl opacity-60" />
    </div>
  );
}
