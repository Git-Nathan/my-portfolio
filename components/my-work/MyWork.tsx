import { Section } from '@/layouts/Section';
import { ColorText } from '../common/ColorText';
import { MyWorkItem } from './MyWorkItem';

export const MyWork = () => {
  const myWorks = [
    {
      title: 'The Hello App',
      description:
        'I contributed to building and maintaining the service provider web and the admin panel web of The Hello App. A platform that connects service providers with customers.',
      image: '/images/thehelloapp.png',
      tags: ['React', 'Tailwind CSS', 'TypeScript', 'Redux', 'Ant Design'],
      projectUrl: '/project/the-hello-app',
      externalUrl: 'https://thehelloapp.com/',
    },
    {
      title: 'NovaLearn',
      description:
        'An innovative e-learning platform designed to provide accessible and engaging online education. Features interactive courses, progress tracking, and a modern learning experience for students and educators.',
      image: '/images/novalearn.png',
      tags: ['Next.js', 'GraphQL', 'React', 'TailwindCSS', 'Education'],
      projectUrl: '/project/novalearn',
      externalUrl: 'https://novalearn.org/',
    },
    {
      title: 'Sohaco Landing Page',
      description:
        "A comprehensive corporate website for Sohaco Group, one of Vietnam's leading construction and real estate development companies. Features project showcases, company information, and investor relations.",
      image: '/images/sohacogroup.png',
      tags: ['React', 'TypeScript', 'Landing Page', 'Tailwind CSS'],
      projectUrl: '/project/sohaco-group',
      externalUrl: 'https://sohacogroup.com.vn/',
    },
  ];

  return (
    <Section
      className='mt-25 lg:mt-[33vh]'
      wrapperProps={{
        className: 'flex flex-col items-start',
      }}
      id='my-work'
    >
      <ColorText
        elements='h2'
        className='w-fit text-4xl font-bold tracking-tighter'
        underlineHoverEffect
      >
        What I’ve Been Working On
      </ColorText>

      <div className='mt-10 flex w-full flex-col gap-20'>
        {myWorks.map((work, index) => (
          <MyWorkItem key={`MyWorkItem-${work.projectUrl}`} {...work} reversed={index % 2 === 1} />
        ))}
      </div>
    </Section>
  );
};
