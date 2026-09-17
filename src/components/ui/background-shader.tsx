import { useEffect, useRef } from "react";

const VERTEX_SHADER_SOURCE = `
  attribute vec2 position;
  void main() {
    gl_Position = vec4(position, 0.0, 1.0);
  }
`;

// 21st.dev 스타일 유기적 액체 왜곡 노이즈 프래그먼트 셰이더
const FRAGMENT_SHADER_SOURCE = `
  precision highp float;
  uniform vec2 u_resolution;
  uniform float u_time;
  uniform vec2 u_mouse;

  vec3 mod289(vec3 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
  vec2 mod289(vec2 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
  vec3 permute(vec3 x) { return mod289(((x*34.0)+1.0)*x); }

  float snoise(vec2 v) {
    const vec4 C = vec4(0.211324865405187, 0.366025403784439,
                        -0.577350269189626, 0.024390243902439);
    vec2 i  = floor(v + dot(v, C.yy));
    vec2 x0 = v -   i + dot(i, C.xx);
    vec2 i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
    vec4 x12 = x0.xyxy + C.xxzz;
    x12.xy -= i1;
    i = mod289(i);
    vec3 p = permute(permute(i.y + vec3(0.0, i1.y, 1.0))
          + i.x + vec3(0.0, i1.x, 1.0));
    vec3 m = max(0.5 - vec3(dot(x0,x0), dot(x12.xy,x12.xy), dot(x12.zw,x12.zw)), 0.0);
    m = m*m;
    m = m*m;
    vec3 x = 2.0 * fract(p * C.www) - 1.0;
    vec3 h = abs(x) - 0.5;
    vec3 ox = floor(x + 0.5);
    vec3 a0 = x - ox;
    m *= 1.79284291400159 - 0.85373472095314 * (a0*a0 + h*h);
    vec3 g;
    g.x  = a0.x  * x0.x  + h.x  * x0.y;
    g.yz = a0.yz * x12.xz + h.yz * x12.yw;
    return 130.0 * dot(m, g);
  }

  void main() {
    vec2 st = gl_FragCoord.xy / u_resolution.xy;
    st.x *= u_resolution.x / u_resolution.y;

    vec2 mouse = u_mouse / u_resolution.xy;
    mouse.x *= u_resolution.x / u_resolution.y;

    float distToMouse = length(st - mouse);
    float mouseInfluence = smoothstep(0.6, 0.0, distToMouse) * 0.15;

    float t = u_time * 0.22;

    // FBM 왜곡 노이즈
    vec2 q = vec2(
      snoise(st * 1.3 + vec2(0.0, t * 0.3)),
      snoise(st * 1.3 + vec2(t * 0.25, 1.5))
    );

    vec2 r = vec2(
      snoise(st * 2.2 + 3.0 * q + vec2(1.7, 9.2) + t * 0.15 + mouseInfluence),
      snoise(st * 2.2 + 3.0 * q + vec2(8.3, 2.8) + t * 0.18)
    );

    float f = 0.5 + 0.5 * snoise(st + 3.5 * r + t * 0.1);

    // 브랜드 팔레트: Deep Space Navy, Electric Royal Blue, Cyan Highlight
    vec3 c1 = vec3(0.035, 0.051, 0.086); // 베이스 #090D16
    vec3 c2 = vec3(0.08, 0.28, 0.85);   // 로열 블루
    vec3 c3 = vec3(0.12, 0.65, 0.95);   // 사이언 글로우
    vec3 c4 = vec3(0.38, 0.20, 0.95);   // 퍼플 악센트

    vec3 color = mix(c1, c2, clamp(f * f * 2.2, 0.0, 1.0));
    color = mix(color, c3, clamp(length(q) * 0.75, 0.0, 1.0));
    color = mix(color, c4, clamp(length(r.x) * 0.35, 0.0, 1.0));

    // 중앙 상단 조명 하이라이트
    float vignette = 1.0 - smoothstep(0.2, 1.4, length(gl_FragCoord.xy / u_resolution.xy - vec2(0.5, 0.4)));
    color *= (vignette * 0.85 + 0.25);

    gl_FragColor = vec4(color, 1.0);
  }
`;

export function BackgroundShader() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const gl = canvas.getContext("webgl", {
      alpha: false,
      antialias: false,
      powerPreference: "high-performance",
    });
    if (!gl) return;

    const createShader = (type: number, src: string) => {
      const shader = gl.createShader(type);
      if (!shader) return null;
      gl.shaderSource(shader, src);
      gl.compileShader(shader);
      return shader;
    };

    const vert = createShader(gl.VERTEX_SHADER, VERTEX_SHADER_SOURCE);
    const frag = createShader(gl.FRAGMENT_SHADER, FRAGMENT_SHADER_SOURCE);
    if (!vert || !frag) return;

    const program = gl.createProgram();
    if (!program) return;
    gl.attachShader(program, vert);
    gl.attachShader(program, frag);
    gl.linkProgram(program);
    gl.useProgram(program);

    // 사각형 버텍스 버퍼 바인딩
    const posBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, posBuffer);
    gl.bufferData(
      gl.ARRAY_BUFFER,
      new Float32Array([-1, -1, 1, -1, -1, 1, -1, 1, 1, -1, 1, 1]),
      gl.STATIC_DRAW
    );

    const posAttr = gl.getAttribLocation(program, "position");
    gl.enableVertexAttribArray(posAttr);
    gl.vertexAttribPointer(posAttr, 2, gl.FLOAT, false, 0, 0);

    const uRes = gl.getUniformLocation(program, "u_resolution");
    const uTime = gl.getUniformLocation(program, "u_time");
    const uMouse = gl.getUniformLocation(program, "u_mouse");

    let mouseX = window.innerWidth * 0.5;
    let mouseY = window.innerHeight * 0.5;
    let targetMouseX = mouseX;
    let targetMouseY = mouseY;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      targetMouseX = e.clientX - rect.left;
      targetMouseY = rect.height - (e.clientY - rect.top);
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });

    let animId: number;
    let startTime = performance.now();

    const resize = () => {
      const parent = canvas.parentElement;
      const w = parent?.clientWidth || window.innerWidth;
      const h = parent?.clientHeight || window.innerHeight;
      // 고해상도 레티나 디스플레이 대응 및 성능 밸런스(최대 DPR 1.5)
      const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      gl.viewport(0, 0, canvas.width, canvas.height);
      gl.uniform2f(uRes, canvas.width, canvas.height);
    };

    window.addEventListener("resize", resize);
    resize();

    const render = () => {
      const now = performance.now();
      const elapsed = (now - startTime) * 0.001;

      // 마우스 인터랙션 스무딩 보간 (Lerp)
      mouseX += (targetMouseX * (canvas.width / (canvas.parentElement?.clientWidth || window.innerWidth)) - mouseX) * 0.05;
      mouseY += (targetMouseY * (canvas.height / (canvas.parentElement?.clientHeight || window.innerHeight)) - mouseY) * 0.05;

      gl.uniform1f(uTime, elapsed);
      gl.uniform2f(uMouse, mouseX, mouseY);

      gl.drawArrays(gl.TRIANGLES, 0, 6);
      animId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", resize);
      gl.deleteProgram(program);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 w-full h-full opacity-70"
    />
  );
}