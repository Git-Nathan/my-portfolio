import { useTexture } from '@react-three/drei';
import { DoubleSide, SRGBColorSpace } from 'three';

export interface IImagePlaneProps {
  url: string;
  position?: [number, number, number];
  size?: [number, number];
}

export function ImagePlane(props: Readonly<IImagePlaneProps>) {
  const { url, position = [0, 0, 0], size = [1, 1] } = props;

  const texture = useTexture(url, (loadedTexture) => {
    loadedTexture.colorSpace = SRGBColorSpace;
  });

  return (
    <mesh position={position}>
      <planeGeometry args={size} />
      <meshBasicMaterial map={texture} side={DoubleSide} />
    </mesh>
  );
}
