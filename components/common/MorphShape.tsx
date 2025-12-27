import { useState, useEffect, useCallback } from 'react';
import { motion } from 'motion/react';
import { interpolate } from 'flubber';
import { shapePaths } from '@/utils/shapePaths';
import { cn } from '@/utils/cn';

export interface IMorphShapeProps {
  defaultShape?: string;
  paths?: string[];
  color?: string;
  onClick?: () => void;
  className?: string;
  size?: number;
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
  defaultShape = shapePaths[0],
  paths = shapePaths,
  color = '#6750A4',
  size = 24,
  onClick,
  className,
}: Readonly<IMorphShapeProps>) {
  const [path, setPath] = useState(defaultShape);
  const [nextPath, setNextPath] = useState(getRandomDifferentShape(paths, defaultShape));
  const [fromPath, setFromPath] = useState(defaultShape);

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
    <motion.button
      className={cn('flex cursor-pointer items-center justify-center', className)}
      onClick={handleClick}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <svg
        width={380}
        height={380}
        viewBox='0 0 380 380'
        style={{
          width: size,
          height: size,
        }}
      >
        <motion.path
          d={path}
          fill={color}
          style={{
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
          }}
        />
      </svg>
    </motion.button>
  );
}
