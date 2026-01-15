import { DocumentDownloadIcon } from '@/icons/DocumentDownloadIcon';
import { useSmileStore } from '@/stores/smile.store';
import { AppLink } from '../common/button/AppLink';
import { ExternalLink } from '../common/button/ExternalLink';

export function AboutMeActions() {
  const { setSmiling } = useSmileStore();

  return (
    <>
      <AppLink
        className='px-5 text-lg'
        href='#my-work'
        scrollOffset={100}
        onMouseEnter={() => setSmiling(true)}
        onMouseLeave={() => setSmiling(false)}
      >
        My Work
      </AppLink>

      <ExternalLink
        href='/pdfs/Nathan_Ngo_Frontend_Engineer_React.pdf'
        icon={<DocumentDownloadIcon />}
        onMouseEnter={() => setSmiling(true)}
        onMouseLeave={() => setSmiling(false)}
      >
        Resume
      </ExternalLink>
    </>
  );
}
