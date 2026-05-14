"use client";

import { Canvas } from "@react-three/fiber";
import { Float, Sphere } from "@react-three/drei";

export function HeroCanvas() {
  return (
    <div className="h-64 w-full overflow-hidden rounded-2xl border border-border/60 bg-black/40 md:h-80">
      <Canvas camera={{ position: [0, 0, 6], fov: 60 }}>
        <ambientLight intensity={1.2} />
        <pointLight position={[3, 3, 4]} color="#27d3ff" />
        <Float speed={2} rotationIntensity={1.4} floatIntensity={2}>
          <Sphere args={[1.4, 64, 64]} position={[-1.2, 0, 0]}>
            <meshStandardMaterial wireframe color="#9f63ff" />
          </Sphere>
        </Float>
        <Float speed={1.6} rotationIntensity={0.9} floatIntensity={1.5}>
          <Sphere args={[0.9, 64, 64]} position={[1.8, -0.6, 1]}>
            <meshStandardMaterial color="#27d3ff" metalness={0.9} roughness={0.2} />
          </Sphere>
        </Float>
      </Canvas>
    </div>
  );
}
