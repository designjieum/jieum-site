import { motion } from "framer-motion";

export function AuroraBackground() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      {/* 딥 블루 은은한 앰비언트 글로우 */}
      <motion.div
        animate={{
          x: ["-20%", "10%", "-20%"],
          y: ["-10%", "15%", "-10%"],
          scale: [1, 1.15, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{
          width: 600,
          height: 450,
          filter: "blur(140px)",
        }}
        className="absolute -top-32 left-1/4 bg-blue-600/15 rounded-full"
      />

      {/* 부드러운 스카이/인디고 보조 광원 */}
      <motion.div
        animate={{
          x: ["15%", "-15%", "15%"],
          y: ["10%", "-10%", "10%"],
          scale: [1.1, 0.95, 1.1],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{
          width: 500,
          height: 380,
          filter: "blur(130px)",
        }}
        className="absolute top-1/4 right-1/4 bg-indigo-500/10 rounded-full"
      />

      {/* 미세한 그리드 패턴으로 단정하고 전문적인 느낌 추가 */}
      <div
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.03) 1px, transparent 1px)",
          backgroundSize: "4rem 4rem",
          maskImage:
            "radial-gradient(ellipse 60% 50% at 50% 30%, #000 70%, transparent 100%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 60% 50% at 50% 30%, #000 70%, transparent 100%)",
        }}
        className="absolute inset-0"
      />
    </div>
  );
}