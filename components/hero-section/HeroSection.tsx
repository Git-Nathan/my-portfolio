'use client';

import { Canvas } from '@react-three/fiber';
import {
  Center,
  Environment,
  Lightformer,
  MeshTransmissionMaterial,
  Text3D,
} from '@react-three/drei';
import { Suspense } from 'react';
import { useControls } from 'leva';
import { Scene } from './Scene';
import { MouseTiltWrapper } from '../common/MouseTiltWrapper';

export function HeroSection() {
  // const text3DProps = useControls('Text3D', {
  //   size: { value: 50, min: 1, max: 100, step: 1 },
  //   height: { value: 5, min: 0.1, max: 10, step: 0.1 },
  //   curveSegments: { value: 24, min: 1, max: 50, step: 1 },
  //   bevelEnabled: true,
  //   bevelThickness: { value: 0.2, min: 0, max: 20, step: 0.01 },
  //   bevelSize: { value: 0.1, min: 0, max: 5, step: 0.01 },
  //   bevelSegments: { value: 6, min: 1, max: 20, step: 1 },
  // });

  // const materialProps = useControls('Material', {
  //   backsideThickness: { value: 0.4, min: 0, max: 10, step: 0.5 },
  //   thickness: { value: 0, min: 0, max: 10, step: 0.01 },
  // });

  const text = 'Nathan';

  return (
    <div id='canvas-container' className='h-200'>
      <Canvas orthographic camera={{ zoom: 5, position: [0, 0, 200], far: 300, near: 50 }}>
        <Suspense fallback={null}>
          {/* <OrbitControls /> */}

          <color attach='background' args={['#e0e0e0']} />

          <ambientLight intensity={0.5} />

          <directionalLight
            position={[5, 5, 5]}
            intensity={1}
            castShadow
            shadow-mapSize-width={1024}
            shadow-mapSize-height={1024}
          />

          {/* <MouseTiltWrapper> */}
          <Center position={[0, 0, 20]}>
            <Text3D
              font='/fonts/Chewy_Regular.json'
              // size={text3DProps.size}
              // height={text3DProps.height}
              // curveSegments={text3DProps.curveSegments}
              // bevelEnabled={text3DProps.bevelEnabled}
              // bevelThickness={text3DProps.bevelThickness}
              // bevelSize={text3DProps.bevelSize}
              // bevelSegments={text3DProps.bevelSegments}
            >
              {text}
              <MeshTransmissionMaterial
                backside
                // backsideThickness={materialProps.backsideThickness}
                // thickness={materialProps.thickness}
                color={'#00E8E2'}
              />
            </Text3D>
          </Center>

          <Scene />
          {/* </MouseTiltWrapper> */}

          <Environment preset='city'>
            <Lightformer
              intensity={8}
              position={[10, 5, 0]}
              scale={[10, 50, 1]}
              onUpdate={(self) => self.lookAt(0, 0, 0)}
            />
          </Environment>
        </Suspense>
      </Canvas>
    </div>
  );
}
