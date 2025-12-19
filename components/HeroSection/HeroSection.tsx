'use client';

import { Canvas } from '@react-three/fiber';
import { Physics } from '@react-three/rapier';
import { useControls } from 'leva';
import { Suspense } from 'react';

export function HeroSection() {
  const { debug } = useControls({ debug: false });

  return (
    <div id='canvas-container' className='h-200'>
      <Canvas>
        <Suspense fallback={null}>
          <Physics debug={debug} gravity={[0, -9.81, 0]}>
            <mesh>
              <boxGeometry args={[1, 1, 1]} />
              <meshStandardMaterial color='orange' />
            </mesh>
          </Physics>
        </Suspense>
      </Canvas>
    </div>
  );
}
