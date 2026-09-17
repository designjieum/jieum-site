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
        className="absolute -top-32 left-1/4 w-[600px] h-[450px] bg-blue-600/15 blur-[140px] rounded-full"
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
        className="absolute top-1/4 right-1/4 w-[500px] h-[380px] bg-indigo-500/10 blur-[130px] rounded-full"
      />

      {/* 미세한 그리드 패턴으로 단정하고 전문적인 느낌 추가 */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_30%,#000_70%,transparent_100%)]" />
    </div>
  );
}