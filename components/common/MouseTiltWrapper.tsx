import { useFrame } from '@react-three/fiber';
import { useControls } from 'leva';
import { ReactNode, useRef } from 'react';
import { Group, MathUtils } from 'three';

export interface IMouseTiltWrapperProps {
  children: ReactNode;
}

export function MouseTiltWrapper(props: Readonly<IMouseTiltWrapperProps>) {
  const { children } = props;

  const enableMouseTilt = useControls('Mouse Tilt', {
    enabled: false,
  }).enabled;

  const groupRef = useRef<Group>(null);

  useFrame(({ pointer }) => {
    if (!enableMouseTilt) return;
    if (!groupRef.current) return;

    groupRef.current.position.x = MathUtils.lerp(groupRef.current.position.x, pointer.x * 20, 0.2);
    groupRef.current.rotation.x = MathUtils.lerp(groupRef.current.rotation.x, pointer.y / 10, 0.2);
    groupRef.current.rotation.y = MathUtils.lerp(groupRef.current.rotation.y, -pointer.x / 2, 0.2);
  });

  return <group ref={groupRef}>{children}</group>;
}
