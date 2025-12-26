import { useState, useEffect, useCallback } from 'react';
import { motion } from 'motion/react';
import { interpolate } from 'flubber';
import { shapePaths } from '@/utils/shapePaths';

export interface IMorphShapeProps {
  paths?: string[];
  color?: string;
  onClick?: () => void;
}

const ANIMATION_DURATION = 200;

function getRandomDifferentShape(allPaths: string[], exclude: string): string {
  let newShape = exclude;
  while (newShape === exclude && allPaths.length > 1) {
    newShape = allPaths[Math.floor(Math.random() * allPaths.length)];
  }
  return newShape;
}

function easeInOutCubic(t: number): number {
  return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
}

export function MorphShape({
  paths = shapePaths,
  color = '#6750A4',
  onClick,
}: Readonly<IMorphShapeProps>) {
  const [path, setPath] = useState(paths[0]);
  const [nextPath, setNextPath] = useState(getRandomDifferentShape(paths, paths[0]));
  const [fromPath, setFromPath] = useState(paths[0]);

  useEffect(() => {
    const interpolator = interpolate(fromPath, nextPath, { maxSegmentLength: 2 });
    const startTime = Date.now();

    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / ANIMATION_DURATION, 1);
      const easedProgress = easeInOutCubic(progress);

      setPath(interpolator(easedProgress));

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [fromPath, nextPath]);

  const handleClick = useCallback(() => {
    setFromPath(nextPath);
    setNextPath(getRandomDifferentShape(paths, nextPath));
    onClick?.();
  }, [nextPath, paths, onClick]);

  return (
    <motion.svg
      width={320}
      height={320}
      viewBox='0 0 320 320'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className='cursor-pointer'
      onClick={handleClick}
      preserveAspectRatio='xMidYMid meet'
    >
      <motion.path d={path} fill={color} />
    </motion.svg>
  );
}
