import { useSmileStore } from '@/stores/smile.store';
import { AppLink } from '../common/button/AppLink';

export function AboutMeActions() {
  const { setSmiling } = useSmileStore();

  return (
    <AppLink
      className='px-5 text-lg'
      href='#my-work'
      scrollOffset={100}
      onMouseEnter={() => setSmiling(true)}
      onMouseLeave={() => setSmiling(false)}
    >
      My Work
    </AppLink>
  );
}
