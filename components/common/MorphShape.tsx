import { useState, useEffect, useCallback } from 'react';
import { motion } from 'motion/react';
import { interpolate } from 'flubber';
import { shapePaths } from '@/utils/shapePaths';
import { cn } from '@/utils/cn';
import { getExcludedRandomString } from '@/utils/getExcludedRandomString';

export interface IMorphShapeProps {
  defaultShape?: string;
  paths?: string[];
  color?: string;
  onClick?: () => void;
  className?: string;
}

const ANIMATION_DURATION = 200;

function easeInOutCubic(t: number): number {
  return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
}

export function MorphShape({
  defaultShape,
  paths = shapePaths,
  color = '#6750A4',
  onClick,
  className,
}: Readonly<IMorphShapeProps>) {
  const [path, setPath] = useState(shapePaths[0]);
  const [nextPath, setNextPath] = useState(getExcludedRandomString(paths, shapePaths[0]));
  const [fromPath, setFromPath] = useState(shapePaths[0]);

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
    setNextPath(getExcludedRandomString(paths, nextPath));
    onClick?.();
  }, [nextPath, paths, onClick]);

  return (
    <motion.svg
      onClick={handleClick}
      whileHover={{ scale: 1.2 }}
      whileTap={{ scale: 0.9 }}
      width={380}
      height={380}
      viewBox='0 0 380 380'
      className={cn('size-6 cursor-pointer', className)}
    >
      <motion.path
        d={defaultShape ?? path}
        fill={color}
        style={{
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
        }}
      />
    </motion.svg>
  );
}
