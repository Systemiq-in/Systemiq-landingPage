'use client';

export default function BlueprintBackground() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {/* 32px Crisp Grid Lines */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40" />

      {/* Subtle Central Radial Spotlight */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] bg-gradient-to-b from-[#4F7CFF]/12 via-[#7AE7FF]/05 to-transparent blur-3xl opacity-70" />
      <div className="absolute bottom-0 right-10 w-[500px] h-[400px] bg-[#4F7CFF]/05 blur-3xl opacity-50" />
    </div>
  );
}
