import { useEffect, useRef } from "react";

export function WaveLinesBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    let width = 0;
    let height = 0;

    const resize = () => {
      if (!canvas || !canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth;
      height = canvas.height = canvas.parentElement.clientHeight;
    };

    window.addEventListener("resize", resize);
    resize();

    let step = 0;

    // 파도 결 구성 (여러 층의 라인)
    const waveLayers = [
      { yRatio: 0.38, amp: 45, freq: 0.0022, speed: 0.012, color: "rgba(56, 189, 248, 0.18)" },
      { yRatio: 0.44, amp: 60, freq: 0.0018, speed: 0.009, color: "rgba(37, 99, 235, 0.22)" },
      { yRatio: 0.52, amp: 50, freq: 0.0025, speed: 0.015, color: "rgba(99, 102, 241, 0.16)" },
      { yRatio: 0.60, amp: 70, freq: 0.0015, speed: 0.007, color: "rgba(30, 64, 175, 0.18)" },
    ];

    const render = () => {
      step += 1;
      ctx.clearRect(0, 0, width, height);

      waveLayers.forEach((layer, idx) => {
        const baseY = height * layer.yRatio;
        const phase = step * layer.speed + idx * 2.1;

        // 파도 결 라인 렌더링
        ctx.beginPath();
        ctx.lineWidth = 1.2;
        ctx.strokeStyle = layer.color;

        for (let x = 0; x <= width; x += 6) {
          const y =
            baseY +
            Math.sin(x * layer.freq + phase) * layer.amp +
            Math.cos(x * layer.freq * 0.5 + phase * 0.8) * (layer.amp * 0.35);

          if (x === 0) {
            ctx.moveTo(x, y);
          } else {
            ctx.lineTo(x, y);
          }
        }
        ctx.stroke();

        // 라인 아래쪽으로 은은한 물결 면 그라데이션 채우기
        ctx.lineTo(width, height);
        ctx.lineTo(0, height);
        ctx.closePath();

        const grad = ctx.createLinearGradient(0, baseY - layer.amp, 0, height);
        grad.addColorStop(0, layer.color.replace("0.", "0.0"));
        grad.addColorStop(0.15, layer.color.replace(/[\d\.]+\)$/, "0.06)"));
        grad.addColorStop(1, "rgba(9, 13, 22, 0)");

        ctx.fillStyle = grad;
        ctx.fill();
      });

      animId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 w-full h-full"
    />
  );
}