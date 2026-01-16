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

const ANIMATION_DURATION = 900;

function easeOutElastic(t: number): number {
  const c5 = (2 * Math.PI) / 2.5;
  if (t === 0) return 0;
  if (t === 1) return 1;
  return Math.pow(2.5, -8 * t) * Math.sin((t * 10 - 0.75) * c5) + 1;
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
    const interpolator = interpolate(fromPath, nextPath, { maxSegmentLength: 16 });
    const startTime = Date.now();

    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / ANIMATION_DURATION, 1);
      const easedProgress = easeOutElastic(progress);

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
