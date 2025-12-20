import { useRef } from 'react';
import { Group, Object3DEventMap } from 'three';
import Fireflies from './Fireflies';
import { ImagePlane } from '../common/ImagePlane';

export function Scene() {
  const group = useRef<Group<Object3DEventMap> | null>(null);

  return (
    <group ref={group}>
      <ImagePlane url='/bg.jpg' position={[0, 0, 0]} size={[320, 240]} />
      <Fireflies count={20} radius={80} colors={['orange']} />
    </group>
  );
}
