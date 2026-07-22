'use client';

import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Html, Edges, Float, OrbitControls } from '@react-three/drei';

function Cube() {
  const meshRef = useRef();

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.15;
      meshRef.current.rotation.y += delta * 0.2;
    }
  });

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={2}>
      <mesh ref={meshRef}>
        <boxGeometry args={[2.5, 2.5, 2.5]} />
        <meshStandardMaterial color="#09090B" transparent opacity={0.8} />
        <Edges scale={1.05} threshold={15} color="#06b6d4" />
        
        <Html position={[1.5, 1.5, 1.5]} center className="pointer-events-none">
          <div className="px-3 py-1 bg-[#18181B] border border-[#27272A] rounded-md text-xs font-medium text-cyan-400 shadow-xl backdrop-blur-sm">
            API
          </div>
        </Html>
        <Html position={[-1.5, -1.5, 1.5]} center className="pointer-events-none">
          <div className="px-3 py-1 bg-[#18181B] border border-[#27272A] rounded-md text-xs font-medium text-emerald-400 shadow-xl backdrop-blur-sm">
            CSV
          </div>
        </Html>
        <Html position={[1.5, -1.5, -1.5]} center className="pointer-events-none">
          <div className="px-3 py-1 bg-[#18181B] border border-[#27272A] rounded-md text-xs font-medium text-purple-400 shadow-xl backdrop-blur-sm">
            SQL
          </div>
        </Html>
        <Html position={[-1.5, 1.5, -1.5]} center className="pointer-events-none">
          <div className="px-3 py-1 bg-[#18181B] border border-[#27272A] rounded-md text-xs font-medium text-pink-400 shadow-xl backdrop-blur-sm">
            ML
          </div>
        </Html>
      </mesh>
    </Float>
  );
}

export function InteractiveCube() {
  return (
    <div className="w-full h-full min-h-[400px] cursor-grab active:cursor-grabbing">
      <Canvas camera={{ position: [0, 0, 6] }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} />
        <Cube />
      </Canvas>
    </div>
  );
}
