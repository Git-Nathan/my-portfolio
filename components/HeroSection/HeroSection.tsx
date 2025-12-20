'use client';

import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { Suspense, useRef } from 'react';
import { Mesh } from 'three';
import { Scene } from './Scene';

function SpinningBox() {
  const meshRef = useRef<Mesh>(null);

  useFrame((_state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta;
      meshRef.current.rotation.y += delta * 0.5;
    }
  });

  return (
    <mesh ref={meshRef}>
      <icosahedronGeometry args={[10, 2]} />
      <meshStandardMaterial color='orange' />
    </mesh>
  );
}

export function HeroSection() {
  return (
    <div id='canvas-container' className='h-200 border border-gray-500'>
      <Canvas orthographic camera={{ zoom: 5, position: [0, 0, 200], far: 300, near: 50 }}>
        <Suspense fallback={null}>
          <OrbitControls />
          <ambientLight intensity={0.3} />
          <Scene />
          <directionalLight
            position={[5, 5, 5]}
            intensity={1}
            castShadow
            shadow-mapSize-width={1024}
            shadow-mapSize-height={1024}
          />
          <SpinningBox />
        </Suspense>
      </Canvas>
    </div>
  );
}
