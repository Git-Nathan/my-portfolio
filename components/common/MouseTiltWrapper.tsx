import { useFrame } from '@react-three/fiber';
import { ReactNode, useRef } from 'react';
import { Group, MathUtils } from 'three';

export interface IMouseTiltWrapperProps {
  children: ReactNode;
}

export function MouseTiltWrapper(props: IMouseTiltWrapperProps) {
  const { children } = props;

  const groupRef = useRef<Group>(null);

  useFrame(({ pointer }) => {
    if (!groupRef.current) return;

    groupRef.current.position.x = MathUtils.lerp(groupRef.current.position.x, pointer.x * 20, 0.2);
    groupRef.current.rotation.x = MathUtils.lerp(groupRef.current.rotation.x, pointer.y / 10, 0.2);
    groupRef.current.rotation.y = MathUtils.lerp(groupRef.current.rotation.y, -pointer.x / 2, 0.2);
  });

  return <group ref={groupRef}>{children}</group>;
}
