'use client';

import { cn } from '@/utils/cn';
import { getExcludedRandomString } from '@/utils/getExcludedRandomString';
import { shapePaths } from '@/utils/shapePaths';
import { interpolate } from 'flubber';
import { motion } from 'motion/react';
import { useCallback, useEffect, useState } from 'react';

export interface IMorphShapeProps {
  defaultShape?: string;
  paths?: string[];
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
  onClick,
  className,
}: IMorphShapeProps) {
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
      width={380}
      height={380}
      viewBox='0 0 380 380'
      className={cn('size-6 cursor-pointer', className)}
      stroke='currentColor'
      fill='currentColor'
    >
      <motion.path d={defaultShape ?? path} />
    </motion.svg>
  );
}
