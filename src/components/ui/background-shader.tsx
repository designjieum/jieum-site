import { MeshGradient } from "@paper-design/shaders-react";

interface BackgroundShaderProps {
  className?: string;
}

export function BackgroundShader({ className }: BackgroundShaderProps) {
  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className || ""}`}>
      <MeshGradient
        width="100%"
        height="100%"
        fit="cover"
        // 보라색 제거 -> 깊은 미드나잇 네이비 & 오션/코발트 블루 중심의 세련된 다크 테크 팔레트
        colors={["#090D16", "#1D4ED8", "#38BDF8", "#0F2B5C"]}
        distortion={0.7}
        swirl={0.37}
        grainMixer={0}
        grainOverlay={0}
        speed={0.3}
      />
    </div>
  );
}

export default BackgroundShader;