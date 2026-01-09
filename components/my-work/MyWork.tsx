import { Section } from '@/layouts/Section';
import { ColorText } from '../common/ColorText';
import { MyWorkItem } from './MyWorkItem';

export const MyWork = () => {
  return (
    <Section
      className='mt-40'
      wrapperProps={{
        className: 'flex flex-col items-start',
      }}
    >
      <ColorText
        elements='h1'
        className='w-fit text-4xl font-bold tracking-tighter'
        underlineHoverEffect
      >
        What I’ve Been Working On
      </ColorText>

      <MyWorkItem />
    </Section>
  );
};
