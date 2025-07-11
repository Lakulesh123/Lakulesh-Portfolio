import { OrbitControls } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { useMediaQuery } from "react-responsive";
import React, { Suspense, useRef, useMemo } from "react";

function Starfield({ count = 200 }) {
  const mesh = useRef();
  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      arr[i * 3] = (Math.random() - 0.5) * 20;
      arr[i * 3 + 1] = (Math.random() - 0.5) * 20;
      arr[i * 3 + 2] = (Math.random() - 0.5) * 20;
    }
    return arr;
  }, [count]);
  useFrame(() => {
    if (mesh.current) {
      mesh.current.rotation.y += 0.0008;
      mesh.current.rotation.x += 0.0003;
    }
  });
  return (
    <points ref={mesh}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        color="#fff"
        size={0.12}
        sizeAttenuation
        opacity={0.8}
        transparent
      />
    </points>
  );
}

const HeroExperience = () => {
  const isTablet = useMediaQuery({ query: "(max-width : 1024px)" });
  const isMobile = useMediaQuery({ query: "(max-width : 768px)" });

  if (isMobile) {
    // Show a static image on mobile for max smoothness
    return (
      <img
        src="/images/bg.png"
        alt="Hero background"
        style={{ width: "100%", height: 400, objectFit: "cover" }}
        loading="lazy"
      />
    );
  }

  return (
    <Suspense
      fallback={
        <div
          style={{
            height: 400,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          Loading 3D...
        </div>
      }
    >
      <Canvas
        camera={{ position: [0, 0, 6], fov: 45 }}
        dpr={[0.5, 1]}
        frameloop="always"
        style={{ width: "100%", height: 400 }}
      >
        <ambientLight intensity={0.8} />
        <directionalLight position={[5, 5, 5]} intensity={0.7} />
        <OrbitControls enablePan={false} enableZoom={!isTablet} />
        <Starfield count={200} />
      </Canvas>
    </Suspense>
  );
};

export default HeroExperience;
