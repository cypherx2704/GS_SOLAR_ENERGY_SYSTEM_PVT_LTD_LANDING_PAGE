"use client";

import * as React from "react";
import { Canvas, useFrame, type ThreeElements } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import * as THREE from "three";

/* Brand colours as THREE colors */
const GREEN_900 = "#0b3320";
const GREEN_800 = "#14532d";
const GREEN_600 = "#2e8b57";
const GREEN_400 = "#3fa96a";
const GOLD_500 = "#f5b301";
const GOLD_400 = "#ffc730";

/** A stylised solar panel: green frame + grid of cells. */
function SolarPanel(props: ThreeElements["group"]) {
  const cells = [];
  const cols = 4;
  const rows = 3;
  const cw = 0.62;
  const ch = 0.62;
  const gap = 0.08;
  const totalW = cols * cw + (cols - 1) * gap;
  const totalH = rows * ch + (rows - 1) * gap;
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      const x = -totalW / 2 + cw / 2 + c * (cw + gap);
      const y = totalH / 2 - ch / 2 - r * (ch + gap);
      cells.push(
        <mesh key={`${r}-${c}`} position={[x, y, 0.06]}>
          <boxGeometry args={[cw, ch, 0.03]} />
          <meshStandardMaterial
            color={GREEN_800}
            metalness={0.55}
            roughness={0.3}
            emissive={GREEN_600}
            emissiveIntensity={0.28}
          />
        </mesh>,
      );
    }
  }
  return (
    <group {...props}>
      {/* frame / backplate */}
      <mesh castShadow receiveShadow>
        <boxGeometry args={[totalW + 0.28, totalH + 0.28, 0.12]} />
        <meshStandardMaterial color={GREEN_900} metalness={0.4} roughness={0.5} />
      </mesh>
      {cells}
    </group>
  );
}

/** Glowing sun sphere with a gold point light. */
function Sun({ position }: { position: [number, number, number] }) {
  const ref = React.useRef<THREE.Mesh>(null);
  useFrame((state) => {
    if (ref.current) {
      const s = 1 + Math.sin(state.clock.elapsedTime * 1.4) * 0.03;
      ref.current.scale.setScalar(s);
    }
  });
  return (
    <group position={position}>
      <mesh ref={ref}>
        <sphereGeometry args={[0.9, 48, 48]} />
        <meshBasicMaterial color={GOLD_400} toneMapped={false} />
      </mesh>
      {/* soft halo */}
      <mesh>
        <sphereGeometry args={[1.15, 32, 32]} />
        <meshBasicMaterial color={GOLD_500} transparent opacity={0.18} toneMapped={false} />
      </mesh>
      <pointLight color={GOLD_400} intensity={40} distance={12} decay={2} />
    </group>
  );
}

/** The whole rig: tilts toward the pointer + gentle idle motion. */
function Rig() {
  const group = React.useRef<THREE.Group>(null);
  useFrame((state) => {
    if (!group.current) return;
    const targetY = state.pointer.x * 0.4;
    const targetX = -state.pointer.y * 0.25;
    group.current.rotation.y += (targetY - group.current.rotation.y) * 0.05;
    group.current.rotation.x += (targetX + 0.15 - group.current.rotation.x) * 0.05;
  });

  return (
    <group ref={group} position={[0, 0, 0]}>
      <Float speed={1.4} rotationIntensity={0.25} floatIntensity={0.5}>
        <SolarPanel rotation={[-0.4, 0.32, 0.06]} position={[-0.35, -0.55, 0]} scale={1.05} />
      </Float>
      <Float speed={1.1} floatIntensity={0.8}>
        <Sun position={[0.95, 1.45, -0.8]} />
      </Float>
    </group>
  );
}

export default function HeroScene() {
  return (
    <Canvas
      dpr={[1, 1.8]}
      camera={{ position: [0, 0, 6.5], fov: 42 }}
      gl={{ antialias: true, alpha: true }}
      style={{ width: "100%", height: "100%" }}
    >
      <ambientLight intensity={0.9} />
      <directionalLight position={[-4, 3, 5]} intensity={1.6} color={GOLD_500} />
      <directionalLight position={[3, -1, 3]} intensity={0.8} color={GREEN_400} />
      {/* gold rim light behind the panel */}
      <pointLight position={[-2, 0.5, -2]} intensity={12} color={GOLD_400} distance={10} decay={2} />
      <React.Suspense fallback={null}>
        <Rig />
      </React.Suspense>
    </Canvas>
  );
}
