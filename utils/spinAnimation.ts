const SPIN_ANIMATIONS = [
  'animate-[spin_90s_linear_infinite_reverse]',
  'animate-[spin_90s_linear_infinite]',
  'animate-[spin_70s_linear_infinite]',
  'animate-[spin_70s_linear_infinite_reverse]',
] as const;

export function getRandomSpinClass() {
  return SPIN_ANIMATIONS[Math.floor(Math.random() * SPIN_ANIMATIONS.length)];
}
